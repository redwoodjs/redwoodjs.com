import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import { Trans } from 'react-i18next'
import Display from 'src/components/Tag/Display'
import useFilters from 'src/pages/ExamplesPage/components/Filters/useFilters'
import type { FindTags } from 'types/graphql'

export const QUERY = gql`
  query FindTags {
    tags {
      id
      label
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return <></>
}

export const Failure = ({ error: _error }: CellFailureProps) => <></>

export const Success = ({ tags }: CellSuccessProps<FindTags>) => {
  const filters = useFilters()

  return (
    <div>
      <p className="w-full italic text-center text-xl">
        <Trans
          i18nKey="ExamplesPage.filters.browseBy"
          components={{ straight: <span className="not-italic text-3xl" /> }}
        />
      </p>
      <div
        className={
          'flex flex-row flex-wrap m-auto justify-center w-64 md:w-96 my-8 mb-24'
        }
      >
        {tags.map((tag) => (
          <Display
            key={`Browse tags - ${tag.label}`}
            {...tag}
            onClick={filters.onTagClick}
          />
        ))}
      </div>
    </div>
  )
}
