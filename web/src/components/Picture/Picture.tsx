const Picture = ({ src, fallback, alt, className = undefined }) => {
  return (
    <picture>
      <source type="image/webp" srcSet={src} />
      <source type="image/jpeg" srcSet={fallback} />
      <img src={fallback} alt={alt} className={className} />
    </picture>
  )
}

export default Picture
