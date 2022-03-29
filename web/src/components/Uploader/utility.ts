interface ImageProps {
  width?: number
  height?: number
  fit?: string
}

export const resizeFilestackImage = (
  imageUrl: string,
  { width, height, fit }: ImageProps
): string => {
  const directives = []
  if (width) {
    directives.push(`width:${width}`)
  }
  if (height) {
    directives.push(`height:${height}`)
  }
  if (fit) {
    directives.push(`fit:${fit}`)
  }

  const imageUrlParts = imageUrl.split('/')
  imageUrlParts.splice(3, 0, `resize=${directives.join(',')}`)

  return imageUrlParts.join('/')
}
