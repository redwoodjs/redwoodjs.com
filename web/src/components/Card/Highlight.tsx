import GitHubIcon from 'src/components/Icons/GitHubIcon'
import List from 'src/components/Tag/List/List'
import { CardProps } from 'web/src/components/Card/Card'

interface HighlightProps extends CardProps {
  subtitle?: string
}

const Highlight: React.FC<HighlightProps> = ({
  description,
  media,
  link,
  subtitle,
  tags,
  title,
  onTagClick,
  excludeTag,
}) => (
  <article className="card highlight">
    <picture>
      <img className={'w-full lg:w-2/3 h-full m-auto object-cover'} {...media} />
    </picture>
    <div className="content">
      <div className={'lg:w-2/3'}>
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
        <a
          className="w-auto flex flex-row align-middle mt-8"
          href={link}
          target={'_blank'}
          rel="noreferrer"
        >
          <span className="text-white">Source</span>
          <span className="text-white icon md-18 ml-2">launch</span>
        </a>
        <footer className={'p-0 mt-4'}>
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
