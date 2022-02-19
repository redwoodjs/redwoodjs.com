import External, { ExternalProps } from 'web/src/components/Project/External'
import Highlight from 'web/src/components/Project/Highlight'
import Standard, { StandardProps } from 'web/src/components/Project/Standard'
import { TagProps } from 'web/src/components/Tag/Tag'

export enum ProjectVariant {
  highlight = 'highlight',
  standard = 'standard',
  external = 'external',
}

export interface ProjectProps {
  label: string
  link: string
  title: string
  imgProps?: Record<string, string>
  description?: string
  tags: Array<string & TagProps>
}

interface ProxyProps extends ProjectProps, StandardProps, ExternalProps {
  variant: ProjectVariant
}

const Project: React.FC<ProxyProps> = ({
  variant = ProjectVariant.external,
  ...props
}) => {
  switch (variant) {
    case ProjectVariant.highlight:
      return <Highlight {...props} />
    case ProjectVariant.standard:
      return <Standard {...props} />
    default:
      return <External {...props} />
  }
}

export default Project
