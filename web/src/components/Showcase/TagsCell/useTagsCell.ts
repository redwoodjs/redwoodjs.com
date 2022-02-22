import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const UPDATE_SHOWCASE_TAG = gql`
  mutation CONNECT_TAG_TO_SHOWCASE(
    $id: Int!
    $input: ConnectTagToShowcaseInput!
  ) {
    connectTagToShowcase(id: $id, input: $input) {
      id
    }
  }
`

export default function useTagsCell({
  showcaseId,
  selectedTags,
  refetchQueries,
}) {
  const defaultValues = Object.fromEntries(
    selectedTags.map((tag) => [`tags.${tag.id}`, tag])
  )

  const [connectTagToShowcase, connectTagToShowcaseRequest] = useMutation(
    UPDATE_SHOWCASE_TAG,
    {
      refetchQueries,
      onCompleted() {
        toast.success('Success!')
      },
    }
  )

  const onClick = React.useCallback(
    (tagId) => {
      connectTagToShowcase({
        variables: { id: showcaseId, input: { tagId } },
      }).then()
    },
    [showcaseId, connectTagToShowcase]
  )

  return {
    defaultValues,
    onClick,
    request: connectTagToShowcaseRequest,
  }
}
