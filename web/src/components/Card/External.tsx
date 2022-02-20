import { CardProps } from 'web/src/components/Card/Card'

export interface ExternalProps extends CardProps {
  description?: string
}

const External: React.FC<ExternalProps> = ({ description, link, label }) => (
  <a className="card external" href={link} target={'_blank'} rel="noreferrer">
    <span className={'title'}>{label}</span>
    <span className={'description'}>{description}</span>
  </a>
)

export default External
