import './Tag.scss'

export interface TagProps {
  label: string
  link?: string
}

const Button = ({ link, label }) => (
  <a href={link} target={'_blank'} className={'tag'} rel="noreferrer">
    {label}
  </a>
)

const Display: React.FC<TagProps> = ({ link, label }) => {
  return link && label ? (
    <Button link={link} label={label} />
  ) : (
    <span className="tag">{label}</span>
  )
}

export default Display
