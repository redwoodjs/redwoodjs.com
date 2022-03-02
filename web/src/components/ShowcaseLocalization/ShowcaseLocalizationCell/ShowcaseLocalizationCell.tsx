import type { FindShowcaseLocalizationById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ShowcaseLocalization from 'src/components/ShowcaseLocalization/ShowcaseLocalization'

export const QUERY = gql`
  query FindShowcaseLocalizationById($id: Int!) {
    showcaseLocalization: showcaseLocalization(id: $id) {
      id
      isValid
      language
      title
      subtitle
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>ShowcaseLocalization not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ showcaseLocalization }: CellSuccessProps<FindShowcaseLocalizationById>) => {
  return <ShowcaseLocalization showcaseLocalization={showcaseLocalization} />
}
