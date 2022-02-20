import List from 'src/components/Tag/List/List'
import { CardProps } from 'web/src/components/Card/Card'
import './Card.scss'

export interface StandardProps extends CardProps {
  source: string
}

const Standard: React.FC<StandardProps> = ({
  title,
  media,
  description,
  tags,
  source,
}) => (
  <article className="card standard">
    <header>
      <h1>{title}</h1>
      {media && <img alt={'Example app'} {...media} />}
    </header>
    <div className="content">
      <p>{description}</p>
      {source && (
        <a href={source} target={'_blank'} rel="noreferrer">
          Source
        </a>
      )}
    </div>
    <footer>
      <List tags={tags} rootKey={title} />
    </footer>
  </article>
)

export default Standard
