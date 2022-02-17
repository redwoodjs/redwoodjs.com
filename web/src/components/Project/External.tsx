import { ProjectProps } from 'web/src/components/Project/Project'

export interface ExternalProps extends ProjectProps {
  description?: string
}

const External: React.FC<ExternalProps> = ({ description, link, label }) => (
  <a
    className="project external"
    href={link}
    target={'_blank'}
    rel="noreferrer"
  >
    <span className={'title'}>{label}</span>
    <span className={'description'}>{description}</span>
  </a>
)

export default External
