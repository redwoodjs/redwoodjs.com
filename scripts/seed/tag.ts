import { db } from 'api/src/lib/db'

export default async function Tag() {
  const tags = [
    { label: 'canon' },
    { label: 'cms' },
    { label: 'community' },
    { label: 'core-maintained' },
    { label: 'e-commerce' },
    { label: 'highlight' },
    { label: 'integration' },
    { label: 'sample' },
    { label: 'startup' },
    { label: 'tool' },
  ]

  await Promise.allSettled(
    tags.map((tag) =>
      db.tag.upsert({ where: { label: tag.label }, create: tag, update: tag })
    )
  )

  return await db.tag
    .findMany({ select: { id: true, label: true } })
    .then((tags) =>
      Object.fromEntries(tags.map(({ id, label }) => [label, { id }]))
    )
}
