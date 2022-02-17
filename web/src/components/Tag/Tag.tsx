import './Tag.scss'

export interface TagProps {
  pointer: string
  link?: string
}

const Button = ({ link, pointer }) => (
  <a href={link} target={'_blank'} className={'tag'} rel="noreferrer">
    {pointer}
  </a>
)

const Tag: React.FC<TagProps> = ({ link, pointer }) => {
  return link && pointer ? (
    <Button link={link} pointer={pointer} />
  ) : (
    <span className="tag">{pointer}</span>
  )
}

export default Tag
