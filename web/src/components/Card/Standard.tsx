import List from 'src/components/Tag/List/List'
import { CardProps } from 'web/src/components/Card/Card'

export interface StandardProps extends CardProps {
  link: string
}

const Standard: React.FC<StandardProps> = ({
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
      <div className="content">
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
      <footer className={'p-4'}>
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
