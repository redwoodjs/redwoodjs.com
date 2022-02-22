import { CheckboxField, Form, Label } from '@redwoodjs/forms'
import useTagsCell from 'src/components/Showcase/TagsCell/useTagsCell'

export const QUERY = gql`
  query SHOWCASE_TAGS($showcaseId: Int!) {
    showcase(id: $showcaseId) {
      tags {
        id
        label
      }
    }
    tags {
      id
      label
    }
  }
`

export const Success = ({ tags, showcase, showcaseId }) => {
  const { defaultValues, onClick } = useTagsCell({
    showcaseId,
    selectedTags: showcase?.tags,
    refetchQueries: [{ query: QUERY, variables: { showcaseId } }],
  })

  return (
    <Form config={{ defaultValues }} className={'ml-4 relative w-1/3'}>
      <div className={'sticky top-2'}>
        <h1 className={'font-semibold'}>Tags</h1>
        <ul>
          {tags.map((tag) => (
            <li key={`Tag - ${tag.label}`} className={'px-2'}>
              <CheckboxField
                name={`tags.${tag.id}`}
                className={'rw-input'}
                onChange={() => {
                  onClick(tag.id)
                }}
              />
              <Label name={`tags.${tag.id}`}>{tag.label}</Label>
            </li>
          ))}
        </ul>
      </div>
    </Form>
  )
}
