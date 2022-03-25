import ReactMarkdown from 'react-markdown'

import type { StartupShowcaseQuery } from 'types/graphql'

export type StartupShowcaseAboutProps = Pick<
  StartupShowcaseQuery['startup'],
  'about'
>

const StartupShowcaseAbout = ({ about }: StartupShowcaseAboutProps) => {
  //
  if (!about) return null

  // --

  return (
    <section>
      <ReactMarkdown className="startup-markdown" components={{ h1: 'h2' }}>
        {about}
      </ReactMarkdown>
    </section>
  )
}

export default StartupShowcaseAbout
