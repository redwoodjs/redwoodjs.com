import type { UrlViewsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query UrlViewsQuery {
    urlViews {
      url
      count
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ urlViews }: CellSuccessProps<UrlViewsQuery>) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {urlViews.map((item) => {
        return (
          <>
            <div>
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.url}
              </a>
            </div>
            <div className="text-right">{item.count}</div>
          </>
        )
      })}
    </div>
  )
}
