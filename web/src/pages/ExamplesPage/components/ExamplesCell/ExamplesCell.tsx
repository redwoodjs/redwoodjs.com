import Card, { CardVariant } from 'src/components/Card/Card'
import { ApplicationType, FindExamples } from 'types/graphql'

interface SuccessProps extends FindExamples {
  tag?: string
  type?: ApplicationType
}

export const QUERY = gql`
  query FindExamples($type: String, $tag: String) {
    examples(input: { type: $type, tag: $tag }) {
      id
      type
      link
      label
      title
      subtitle
      source
      description
      productHunt
      media {
        id
        src
      }
      tags {
        id
        label
      }
    }
  }
`

export const Success: React.FC<SuccessProps> = ({
  examples,
  variant = CardVariant.standard,
}) => (
  <>
    {examples.map((example, index) => (
      <Card
        key={`Example #${index} - #${example.id}`}
        variant={variant}
        imgProps={{ src: example?.media?.src }}
        {...example}
      />
    ))}
  </>
)
