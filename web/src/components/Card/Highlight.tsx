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
  onTagClick,
  excludeTag,
}) => (
  <article className="card highlight">
    <picture>
      <img className={'w-full lg:w-1/2 h-full m-auto'} {...media} />
    </picture>
    <div className="content">
      <div className={'w-2/3'}>
        <header>
          {subtitle && (
            <h2 className={'w-full text-center text-white'}>{subtitle}</h2>
          )}
          <h1
            className={
              'w-full p-2 text-lg font-extrabold text-center capitalize text-white'
            }
          >
            {title}
          </h1>
        </header>
        <p className={'text-white'}>{description}</p>
        <footer className={'p-0'}>
          <List
            tags={tags}
            rootKey={title}
            onClick={onTagClick}
            excludeTag={excludeTag}
          />
        </footer>
      </div>
    </div>
  </article>
)

export default Highlight
