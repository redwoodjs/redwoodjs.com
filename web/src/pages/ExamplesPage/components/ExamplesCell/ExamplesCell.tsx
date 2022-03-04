import Card, { CardVariant } from 'src/components/Card/Card'
import i18n from 'src/i18n'
import { FindExamples } from 'types/graphql'

interface SuccessProps extends FindExamples {
  tag?: string
  type?: string
  variant: CardVariant
}

export const beforeQuery = (variables) => {
  return {
    variables: {
      ...variables,
      language: i18n.language,
    },
  }
}

export const QUERY = gql`
  query FindExamples($type: String, $tag: String, $language: String) {
    examples(input: { type: $type, tag: $tag }, language: $language) {
      id
      link
      label
      title
      subtitle
      description
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
        media={{ src: example?.media?.src }}
        {...example}
      />
    ))}
  </>
)
