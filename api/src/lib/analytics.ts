import fetch from 'node-fetch'

import { logger } from 'src/lib/logger'

export const getAnalyticsEndpoint = async ({ url }) => {
  logger.info({ url }, 'Fetching ...')

  const emptyResult = []

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()

    return data['result'] || []
  } catch (error) {
    logger.error({ url }, 'Failed to fetch')
    return emptyResult
  }
}

export const getMarketingSiteUrls = async () => {
  logger.info('Fetching marketing site url analytics ...')

  return await getAnalyticsEndpoint({
    url: 'https://logflare.app/endpoints/query/c3baca31-3db0-4252-bf6f-92f0b6f927ed',
  })
}

export const getJobViewCount = async ({ id }) => {
  logger.info({ id }, 'Fetching job views ...')

  return await getAnalyticsEndpoint({
    url: `https://logflare.app/endpoints/query/45442be7-c611-4733-80ef-9f30448f6e2e?url=jobs/${id}`,
  })
}
