import List from 'src/components/Tag/List/List'
import { CardProps } from 'web/src/components/Card/Card'
import './Card.scss'

interface HighlightProps extends CardProps {
  subtitle?: string
}

const Highlight: React.FC<HighlightProps> = ({
  description,
  media,
  subtitle,
  tags,
  title,
}) => (
  <article className="card highlight">
    <picture>
      <img {...media} />
    </picture>
    <div className="content">
      <header>
        {subtitle && <h2>{subtitle}</h2>}
        <h1>{title}</h1>
      </header>
      <p>{description}</p>
      <footer>
        <List tags={tags} rootKey={title} />
      </footer>
    </div>
  </article>
)

export default Highlight
