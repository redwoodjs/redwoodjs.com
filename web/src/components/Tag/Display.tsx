export interface TagProps {
  label: string
  link?: string
}

const Button = ({ link, label }) => (
  <a
    href={link}
    target={'_blank'}
    className={'tag mr-2 mb-2 hover:shadow-lg'}
    rel="noreferrer"
  >
    {label}
  </a>
)

const Display: React.FC<TagProps> = ({ link, label }) => {
  return link && label ? (
    <Button link={link} label={label} />
  ) : (
    <span className="tag mr-2 mb-2">{label}</span>
  )
}

export default Display
