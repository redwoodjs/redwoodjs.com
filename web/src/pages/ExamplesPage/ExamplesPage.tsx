import Project from 'src/components/Project/Project'
import ExamplesCell from './components/ExamplesCell/ExamplesCell'

import './ExamplesPage.scss'

const ExamplesPage = () => {
  return (
    <div className={'page_examples'}>
      <section>
        <h1>Build with RedwoodJS</h1>
        <div className={'content'}>
          <ExamplesCell isHighlight />
        </div>
      </section>
      <section className={'community'}>
        <header>
          <h2>Community</h2>
          <p>
            Those community driven examples will let you see how creative you
            can be with Redwood
          </p>
        </header>
        <div className={'content'}>
          <ExamplesCell type={'sample'} />
        </div>
      </section>
      <section>
        <h1>Certified community examples</h1>
        <div className="content">
          <Project
            label={'AWS Deploy'}
            description={'Blue-Green deploy w/ Redwood & AWS'}
            link={'https://github.com/redwoodjs/redwood/releases/tag/v0.41.0'}
          />
          {[...Array(8)].map((x) => (
            <Project
              key={`CCE - ${x}`}
              label={'And so on'}
              description={'Blue-Green deploy w/ Redwood & AWS'}
              link={'https://github.com/redwoodjs/redwood/releases/tag/v0.41.0'}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ExamplesPage
