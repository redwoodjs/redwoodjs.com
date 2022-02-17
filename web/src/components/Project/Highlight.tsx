import { ProjectProps } from 'web/src/components/Project/Project'
import Tag from 'web/src/components/Tag/Tag'
import './Project.scss'

interface HighlightProps extends ProjectProps {
  subtitle?: string
}

const Highlight: React.FC<HighlightProps> = ({
  description,
  imgProps,
  subtitle,
  tags,
  title,
}) => (
  <article className="project highlight">
    <picture>
      <img {...imgProps} />
    </picture>
    <div className="content">
      <header>
        {subtitle && <h2>{subtitle}</h2>}
        <h1>{title}</h1>
      </header>
      <p>{description}</p>
      <footer>
        {tags?.map((tag) => (
          <Tag
            key={`${title} - tag - ${tag?.link ?? tag}`}
            link={tag?.link}
            pointer={tag?.pointer ?? tag}
          />
        ))}
      </footer>
    </div>
  </article>
)

export default Highlight
