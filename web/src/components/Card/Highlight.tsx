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
    () => socialLinks?.find((link) => link.platform === 'github')?.link,
    [socialLinks]
  )

  return (
    <article className="card highlight flex w-full flex-col border-[1px] border-gray-500">
      <picture className="h-[130px] w-full overflow-hidden rounded-t">
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
                'w-full p-2 text-center text-lg font-extrabold capitalize text-black'
              }
            >
              {title}
            </h1>
            <aside className={'mt-4 p-0'}>
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
  <div className="my-4 mr-4 flex flex-row items-center justify-end align-bottom">
    <a
      className="mr-2 flex w-auto flex-row align-middle"
      href={link}
      target={'_blank'}
      rel="noreferrer"
    >
      <span className="text-black">View Demo</span>
      <span className="icon md-18 ml-2 text-black">launch</span>
    </a>
    {source && (
      <a
        className="button border-[1px] bg-transparent px-2  py-1 text-xs"
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
