import { ProjectProps } from 'web/src/components/Project/Project'
import Tag from 'web/src/components/Tag/Tag'
import './Project.scss'

export interface StandardProps extends ProjectProps {
  source: string
}

const Standard: React.FC<StandardProps> = ({
  title,
  imgProps,
  description,
  tags,
  source,
}) => (
  <article className="project standard">
    <header>
      <h1>{title}</h1>
      {imgProps && <img alt={'Example app'} {...imgProps} />}
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
      {tags?.map((tag) => (
        <Tag
          key={`${title} - tag - ${tag?.link ?? tag}`}
          link={tag?.link}
          pointer={tag?.pointer ?? tag}
        />
      ))}
    </footer>
  </article>
)

export default Standard
