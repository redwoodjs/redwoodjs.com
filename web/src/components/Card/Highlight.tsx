import List from 'src/components/Tag/List/List'
import { SocialLink } from 'types/graphql'
import { CardProps } from 'web/src/components/Card/Card'

interface HighlightProps extends CardProps {
  subtitle?: string
  socialLinks?: SocialLink[]
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
  socialLinks,
}) => {
  const source = React.useMemo(
    () => socialLinks?.filter((link) => link.platform === 'github')?.pop(),
    [socialLinks]
  )

  return (
    <article className="card highlight w-96 flex flex-col border-[1px] border-gray-500">
      <picture className="h-[130px] w-full rounded-t overflow-hidden">
        <img
          alt={`${title} - ${subtitle} - ${description}`}
          className={'object-cover object-bottom'}
          {...media}
        />
      </picture>
      <div className="content flex grow">
        <div>
          <header>
            {subtitle && (
              <h2 className={'w-full text-center text-black'}>{subtitle}</h2>
            )}
            <h1
              className={
                'w-full p-2 text-lg font-extrabold text-center capitalize text-black'
              }
            >
              {title}
            </h1>
            <aside className={'p-0 mt-4'}>
              <List
                tags={tags}
                rootKey={title}
                onClick={onTagClick}
                excludeTag={excludeTag}
              />
            </aside>
          </header>
          <p className={'mt-4 text-black'}>{description}</p>
        </div>
      </div>
      <Links source={source} link={link} />
    </article>
  )
}

const Links = ({ source, link }) => (
  <div className="align-bottom flex flex-row justify-end items-center my-4">
    <a
      className="w-auto flex flex-row align-middle mr-8"
      href={link}
      target={'_blank'}
      rel="noreferrer"
    >
      <span className="text-black">View Demo</span>
      <span className="text-black icon md-18 ml-2">launch</span>
    </a>
    {source && (
      <a
        className="button px-2 py-1 font-bold text-xs border-white border-[1px] bg-transparent"
        href={source}
        target={'_blank'}
        rel="noreferrer"
      >
        <span className="text-black">Source</span>
      </a>
    )}
  </div>
)

export default Highlight
