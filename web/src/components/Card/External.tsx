import { CardProps } from 'web/src/components/Card/Card'

export interface ExternalProps extends CardProps {
  description?: string
}

const External: React.FC<ExternalProps> = ({ description, link, label }) => (
  <a
    className="card external flex flex-col p-4 bg-white hover:shadow-2xl mt-4 transition-all duration-500"
    href={link}
    target={'_blank'}
    rel="noreferrer"
  >
    <span className={'font-bold'}>{label}</span>
    <span className={'text-sm'}>{description}</span>
  </a>
)

export default External
