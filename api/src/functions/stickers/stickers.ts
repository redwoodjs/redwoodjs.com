import type { APIGatewayEvent, Context } from 'aws-lambda'
import { logger } from 'src/lib/logger'
import fetch from 'node-fetch'

/**
 * This function takes every sticker request and adds it to an AirTable
 * at https://airtable.com/tblX3TAoUUW7afyso/viw0gZLG7DYkc5Vn0?blocks=hide.
 * (All PWV employees should have access.)
 *
 * When a new sticker request comes into Netlify, they'll call a Webhook endpoint.
 * In this case, the endpoint is this function.
 * It accepts the incoming data and then makes an API call out to AirTable to add the record.
 */
export const handler = async (event: APIGatewayEvent, _context: Context) => {
  logger.info('Invoked stickers function')

  const fields = JSON.parse(event.body).data
  delete fields.ip
  delete fields.user_agent
  delete fields.referrer
  fields.status = 'New'
  fields.created_at = new Date().toISOString()

  const response = await fetch(process.env.AIRTABLE_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      records: [{ fields }],
    }),
  })

  console.info(response)

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(response.body),
  }
}
