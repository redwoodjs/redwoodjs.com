import { db } from 'api/src/lib/db'
import { MediaType } from '@prisma/client'

const MediaIndex = {
  rwLogo: {
    id: 1,
    type: MediaType.picture,
    label: 'RW Logo',
    src: 'https://d33wubrfki0l68.cloudfront.net/492ed629970792d32ac857da0166a7d2308bad99/428b6/images/diecut.svg',
  },
  jamstackGraph: {
    id: 2,
    type: MediaType.picture,
    label: 'JamstackGraph',
    src: 'https://d33wubrfki0l68.cloudfront.net/fe55b84dd8ef022e3729071c88f19825f564eaec/d049e/images/structure.png',
  },
  randomImage: {
    id: 3,
    type: MediaType.picture,
    label: 'RandomImage',
    src: 'https://user-images.githubusercontent.com/2951/96807389-3eede900-13cb-11eb-828a-52210cd67e3e.png',
  },
}

export default async function Media() {
  let medias = {}

  for (const [mediaKey, media] of Object.entries(MediaIndex)) {
    const record = await db.media.upsert({
      create: media,
      update: media,
      where: { id: media.id },
    })
    medias = { ...medias, [mediaKey]: record }
  }

  return medias
}
