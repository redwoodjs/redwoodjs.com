import Project, { ProjectVariant } from 'src/components/Project/Project'
import { ApplicationType, FindExamples } from 'types/graphql'

interface SuccessProps extends FindExamples {
  isHighlight?: boolean
  type?: ApplicationType
}

export const QUERY = gql`
  query FindExamples($type: String, $isHighlight: Boolean) {
    examples(input: { type: $type, isHighlight: $isHighlight }) {
      id
      type
      link
      label
      title
      subtitle
      source
      description
      productHunt
    }
  }
`

export const Success: React.FC<SuccessProps> = ({ examples, isHighlight }) => (
  <>
    {examples.map((example, index) => (
      <Project
        key={`Example #${index} - #${example.id}`}
        variant={
          isHighlight ? ProjectVariant.highlight : ProjectVariant.standard
        }
        {...example}
      />
    ))}
  </>
)
