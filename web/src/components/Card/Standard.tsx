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
}) => (
  <article className="card standard flex flex-col">
    <header>
      <h1
        className={'w-full p-2 text-lg font-extrabold text-center capitalize'}
      >
        {title}
      </h1>
      {media && <img alt={'Example app'} {...media} />}
    </header>
    <div className="content">
      <p>{description}</p>
      {link && (
        <a href={link} target={'_blank'} rel="noreferrer">
          Source
        </a>
      )}
    </div>
    <footer className={'p-4'}>
      <List tags={tags} rootKey={title} />
    </footer>
  </article>
)

export default Standard
