export interface TagProps {
  label: string
  link?: string
  onClick?: (string) => void
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

const Display: React.FC<TagProps> = ({
  link,
  label,
  onClick = (_label) => {},
}) => {
  return link && label ? (
    <Button link={link} label={label} />
  ) : (
    <button
      type="button"
      className={'tag mr-2 mb-2'}
      onClick={() => {
        onClick(label)
      }}
    >
      {label}
    </button>
  )
}

export default Display
