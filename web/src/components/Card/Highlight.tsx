import List from 'src/components/Tag/List/List'
import { CardProps } from 'web/src/components/Card/Card'

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
  <article className="card highlight flex flex-col w-full m-auto md:w-2/3 md:flex-row">
    <picture>
      <img className={'w-1/2 h-full m-auto'} {...media} />
    </picture>
    <div className="content">
      <header>
        {subtitle && <h2 className={'w-full text-center'}>{subtitle}</h2>}
        <h1
          className={'w-full p-2 text-lg font-extrabold text-center capitalize'}
        >
          {title}
        </h1>
      </header>
      <p>{description}</p>
      <footer className={'p-0'}>
        <List tags={tags} rootKey={title} />
      </footer>
    </div>
  </article>
)

export default Highlight
