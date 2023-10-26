import { Trans, useTranslation } from 'react-i18next'
import { CardVariant } from 'src/components/Card/Card'
import Filters from 'src/pages/ExamplesPage/components/Filters'
import Context, {
  defaultState,
} from 'src/pages/ExamplesPage/components/Filters/Context'
import useFilters from 'src/pages/ExamplesPage/components/Filters/useFilters'
import StandoutSection from 'src/pages/ExamplesPage/components/StandoutSection/StandoutSection'
import TagsCell from 'src/pages/ExamplesPage/components/TagsCell'
import ApplicationCallout from './components/ApplicationCallout/ApplicationCallout'
import ExamplesCell from './components/ExamplesCell'
import HighlightSection from './components/HighlightSection/HighlightSection'

const Body = () => {
  const { onTagClick } = useFilters()

  return (
    <div className={'page_examples'}>
      <HighlightSection onTagClick={onTagClick} />
      <ApplicationCallout />
      <StandoutSection onTagClick={onTagClick} />
      <section className={'community mx-auto mt-24 max-w-screen-xl p-4'}>
        <TagsCell />
        {false && <Filters />}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          <ExamplesCell
            type="sample"
            tag={'community'}
            variant={CardVariant.external}
            onTagClick={onTagClick}
          />
        </div>
      </section>
    </div>
  )
}

const ExamplesPage = () => {
  const [state, dispatch] = React.useReducer((s, a) => {
    if ('toggleFilter' in a) {
      let tags = s.filters.tags

      if (tags.includes(a.toggleFilter)) {
        tags = tags.filter((x) => x !== a.toggleFilter)
      } else {
        tags = [...tags, a.toggleFilter]
      }

      return { ...s, filters: { tags } }
    }

    if ('clear' in a) {
      return { ...s, filters: { tags: [] } }
    }

    return s
  }, defaultState)

  return (
    <Context.Provider value={{ ...state, dispatch }}>
      <Body />
    </Context.Provider>
  )
}

export default ExamplesPage
