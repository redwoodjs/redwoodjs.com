import List from 'src/components/Tag/List/List'
import { SocialLink } from 'types/graphql'
import { CardProps } from 'web/src/components/Card/Card'

export interface StandardProps extends CardProps {
  link: string
  socialLinks?: SocialLink[]
}

const Standard: React.FC<StandardProps> = ({
  description,
  link,
  tags,
  title,
  onTagClick,
  excludeTag,
  socialLinks,
}) => {
  const source = React.useMemo(
    () =>
      socialLinks?.filter((link) => link.platform === 'github')?.pop()?.link,
    [socialLinks]
  )

  return (
    <article className="card highlight w-64 flex flex-col border-[1px] border-gray-500 mb-4">
      <header className="bg-forest-800">
        <h1
          className={
            'w-full p-2 text-lg font-extrabold text-center text-white capitalize'
          }
        >
          {title}
        </h1>
      </header>
      <aside className={'flex flex-row px-4 pt-4'}>
        <List
          tags={tags}
          rootKey={title}
          onClick={onTagClick}
          excludeTag={excludeTag}
        />
      </aside>
      <div className="content flex grow">
        <div>
          <p className={' text-black'}>{description}</p>
        </div>
      </div>
      {(link || source) && (
        <a
          href={link ?? source}
          target={'_blank'}
          rel="noreferrer"
          className="flex flex-row align-middle m-4"
        >
          <span>Source</span>
          <span className="text-black icon md-18 ml-2">launch</span>
        </a>
      )}
    </article>
  )
}

const SStandard: React.FC<StandardProps> = ({
  title,
  media,
  description,
  tags,
  link,
  onTagClick,
  excludeTag,
}) => (
  <article className="card flex flex-col mt-4 bg-white border-[1px] border-forest-800 rounded-t">
    <div className={'content'}>
      <header className="bg-forest-800">
        <h1
          className={
            'w-full p-2 text-lg font-extrabold text-center text-white capitalize'
          }
        >
          {title}
        </h1>
        {media && <img alt={'Example app'} {...media} />}
      </header>
      <div className="content flex grow">
        <div>
          <p className={'text-black'}>{description}</p>
          {link && (
            <a
              href={link}
              target={'_blank'}
              rel="noreferrer"
              className={'flex flex-row align-middle no-underline mt-2'}
            >
              <span>Source</span>
              <span className="text-black icon md-18 ml-2">launch</span>
            </a>
          )}
        </div>
      </div>
      <footer className={'flex flex-row align-bottom p-4'}>
        <List
          tags={tags}
          rootKey={title}
          onClick={onTagClick}
          excludeTag={excludeTag}
        />
      </footer>
    </div>
  </article>
)

export default Standard
