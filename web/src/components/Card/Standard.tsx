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
    <article className="card flex w-full flex-col border-[1px] border-gray-500">
      <header className="bg-forest-800">
        <h1
          className={
            'w-full p-2 text-center text-lg font-extrabold capitalize text-white'
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
          className="m-4 flex flex-row align-middle"
        >
          <span>Source</span>
          <span className="icon md-18 ml-2 text-black">launch</span>
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
  <article className="card mt-4 flex flex-col rounded-t border-[1px] border-forest-800 bg-white">
    <div className={'content'}>
      <header className="bg-forest-800">
        <h1
          className={
            'w-full p-2 text-center text-lg font-extrabold capitalize text-white'
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
              className={'mt-2 flex flex-row align-middle no-underline'}
            >
              <span>Source</span>
              <span className="icon md-18 ml-2 text-black">launch</span>
            </a>
          )}
        </div>
      </div>
      <footer className={'flex flex-row p-4 align-bottom'}>
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
