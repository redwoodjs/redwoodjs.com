import classNames from 'classnames'

export interface TagProps {
  label: string
  link?: string
  onClick?: (string) => void
}

const Link = ({ link, label }) => (
  <a
    href={link}
    target={'_blank'}
    className={'tag mr-2 mb-2 hover:shadow-lg'}
    rel="noreferrer"
  >
    {label}
  </a>
)

const Button = ({ clicked, label, onClick }) => (
  <button
    type="button"
    className={classNames('tag mr-2 mb-2', {
      'bg-teal-500 text-white': clicked,
      'bg-white': !clicked,
    })}
    onClick={() => {
      onClick(label)
    }}
  >
    {label}
  </button>
)

const Display: React.FC<TagProps> = ({
  link,
  label,
  onClick = (_label) => {},
}) => {
  const [clicked, setClicked] = React.useState<boolean>(false)

  return link && label ? (
    <Link link={link} label={label} />
  ) : (
    <Button
      label={label}
      clicked={clicked}
      onClick={(e) => {
        setClicked((x) => !x)
        onClick(e)
      }}
    />
  )
}

export default Display
