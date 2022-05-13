import { logger } from 'src/lib/logger'

import { getMarketingSiteUrls, getJobViewCount } from 'src/lib/analytics'

export const urlAnalytics = async () => {
  return await getMarketingSiteUrls()
}

export const jobViewAnalytics = async ({ id }) => {
  const data = await getJobViewCount({ id })

  logger.debug({ custom: data }, 'response data service')

  return data[0]
}
