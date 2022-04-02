import { CardVariant } from 'src/components/Card/Card'
import ExamplesCell from 'src/pages/ExamplesPage/components/ExamplesCell'

const HighlightSection = ({ onTagClick }) => (
  <section className={'highlights max-w-screen-xl m-auto'}>
    <div className={'mt-12 flex flex-wrap flex-col justify-between md:flex-row'}>
      <ExamplesCell
        tag={'highlight'}
        variant={CardVariant.highlight}
        onTagClick={onTagClick}
      />
    </div>
  </section>
)

export default HighlightSection
