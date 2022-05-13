import { logger } from 'src/lib/logger'

import { getMarketingSiteUrls, getJobViewCount } from 'src/lib/analytics'

export const urlViews = async () => {
  return await getMarketingSiteUrls()
}

export const jobViews = async ({ id }) => {
  const data = await getJobViewCount({ id })

  logger.debug({ custom: data }, 'response data service')

  return data[0]
}
