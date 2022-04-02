import List from 'src/components/Tag/List/List'
import { CardProps } from 'web/src/components/Card/Card'

export interface ExternalProps extends CardProps {
  description?: string
}

const External: React.FC<ExternalProps> = ({
  description,
  link,
  label,
  tags,
}) => (
  <a
    className="card external flex flex-col p-4 bg-white hover:shadow-xl mt-4 transition-all duration-500"
    href={link}
    target={'_blank'}
    rel="noreferrer"
  >
    <span className={'font-bold'}>{label}</span>
    <div className={'flex flex-col grow divide-solid divide-y divide-red-200'}>
      <div className={'text-sm pb-2 flex grow h-6'}>
        <p className="truncate">{description}</p>
      </div>
      <div className={'align-bottom pt-2'}>
        <List
          rootKey={label}
          tags={tags}
          Component={({ label }) => (
            <div className={'text-xs mr-2 italic'}>{label}</div>
          )}
        />
      </div>
    </div>
  </a>
)

export default External
