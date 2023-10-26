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
    className="external flex flex-col bg-white p-4 transition-all duration-500 hover:shadow-xl"
    href={link}
    target={'_blank'}
    rel="noreferrer"
  >
    <span className={'font-bold'}>{label}</span>
    <div className={'flex grow flex-col divide-y divide-solid divide-red-200'}>
      <div className={'flex h-6 grow pb-2 text-sm'}>
        <p className="truncate">{description}</p>
      </div>
      <div className={'pt-2 align-bottom'}>
        <List
          rootKey={label}
          tags={tags}
          Component={({ label }) => (
            <div className={'mr-2 text-xs italic'}>{label}</div>
          )}
        />
      </div>
    </div>
  </a>
)

export default External
