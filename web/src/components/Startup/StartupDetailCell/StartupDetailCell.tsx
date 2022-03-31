import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import SocialLinkExternal from 'src/components/SocialLink/SocialLinkExternal'

import { resizeFilestackImage } from 'src/components/Uploader/utility'

import type { StartupDetailQuery } from 'types/graphql'

export const QUERY = gql`
  query StartupDetailQuery($slug: String!) {
    startup: GetStartup(slug: $slug) {
      id
      createdAt
      updatedAt
      #
      achievements
      cta {
        href
        title
      }
      name
      published
      questionResponses {
        question
        response
      }
      slug
      tagline
      technologies
      thumbnail
      #
      socialLinks {
        id
        link
        platform
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ startup }: CellSuccessProps<StartupDetailQuery>) => {
  return (
    <>
      <table className="rw-table">
        <tbody>
          <tr>
            <th>Name</th>
            <td className="space-y-2">
              <p>{startup.name}</p>
              <p className="text-xs text-stone-500">{startup.tagline}</p>
            </td>
          </tr>
          <tr>
            <th>Status</th>
            <td>{startup.published ? 'Public' : 'Hidden'}</td>
          </tr>
          <tr>
            <th>Thumbnail</th>
            <td>
              <img
                alt="Startup thumbnail"
                src={resizeFilestackImage(startup.thumbnail, {
                  fit: false,
                  height: 400,
                  width: 300,
                })}
              />
            </td>
          </tr>
          <tr>
            <th>Call to Action</th>
            <td className="space-y-1">
              <p>{startup.cta.title}</p>
              <a
                className="hover:underline hover:text-teal-800"
                href={startup.cta.href}
              >
                {startup.cta.href}
              </a>
            </td>
          </tr>
          {startup.achievements.length > 0 && (
            <tr>
              <th>Achievements</th>
              <td>
                <ul className="list-disc list-inside">
                  {startup.achievements.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </td>
            </tr>
          )}
          {startup.technologies.length > 0 && (
            <tr>
              <th>Technologies</th>
              <td>
                <ul className="list-disc list-inside">
                  {startup.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </td>
            </tr>
          )}
          {startup.socialLinks.length > 0 && (
            <tr>
              <th>Social Links</th>
              <td>
                <ul className="list-inside">
                  {startup.socialLinks.map((link) => (
                    <li key={link.id}>
                      <SocialLinkExternal {...link} />
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          )}
          <tr>
            <th>Created</th>
            <td>{new Date(startup.createdAt).toLocaleString()}</td>
          </tr>
          <tr>
            <th>Updated</th>
            <td>{new Date(startup.updatedAt).toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditStartup({ slug: startup.slug })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          // onClick={() => onDeleteClick(showcase.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}
