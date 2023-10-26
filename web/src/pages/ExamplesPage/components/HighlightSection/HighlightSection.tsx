import { CardVariant } from 'src/components/Card/Card'
import ExamplesCell from 'src/pages/ExamplesPage/components/ExamplesCell'

const HighlightSection = ({ onTagClick }) => (
  <section className={'highlights m-auto max-w-screen-xl p-8'}>
    <div className={'mt-12 grid grid-cols-1 gap-4 md:grid-cols-3'}>
      <ExamplesCell
        tag={'highlight'}
        variant={CardVariant.highlight}
        onTagClick={onTagClick}
      />
    </div>
  </section>
)

export default HighlightSection
