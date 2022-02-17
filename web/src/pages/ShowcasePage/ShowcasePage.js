import { MetaTags } from '@redwoodjs/web'
import Project, { ProjectVariant } from 'src/components/Project/Project'
import './ShowcasePage.scss'

const ShowcasePage = () => {
  return (
    <main>
      <MetaTags title="Showcase" description="Showcase page" />

      <section>
        <h1>Build with RedwoodJS</h1>
        <div className={'content'}>
          <Project
            variant={ProjectVariant.highlight}
            imgProps={{
              src: 'https://d33wubrfki0l68.cloudfront.net/492ed629970792d32ac857da0166a7d2308bad99/428b6/images/diecut.svg',
            }}
            tags={[
              {
                pointer: 'CMS',
                link: 'https://github.com/redwoodjs/redwood/releases/tag/v0.45.0',
              },
            ]}
            title={'Music Collection'}
            subtitle={'Working your CMS skills'}
            source={'localhost:8910'}
            description={`The sequence of retrieving data from an API, showing a loading placeholder, and then displaying the result is so common that Redwood codifies it into a declarative code pattern, resulting in simple and readable code!`}
          />
          <Project
            variant={ProjectVariant.highlight}
            imgProps={{
              src: 'https://d33wubrfki0l68.cloudfront.net/492ed629970792d32ac857da0166a7d2308bad99/428b6/images/diecut.svg',
            }}
            tags={[
              {
                pointer: 'tool',
                link: 'https://github.com/redwoodjs/redwood/releases/tag/v0.45.0',
              },
            ]}
            title={'Todo App'}
            subtitle={'Working your CMS skills'}
            source={'localhost:8910'}
            description={`The sequence of retrieving data from an API, showing a loading placeholder, and then displaying the result is so common that Redwood codifies it into a declarative code pattern, resulting in simple and readable code!`}
          />
          <Project
            variant={ProjectVariant.highlight}
            imgProps={{
              src: 'https://d33wubrfki0l68.cloudfront.net/492ed629970792d32ac857da0166a7d2308bad99/428b6/images/diecut.svg',
            }}
            tags={[
              {
                pointer: 'e-commerce',
                link: 'https://github.com/redwoodjs/redwood/releases/tag/v0.45.0',
              },
            ]}
            title={'Stripe integration example'}
            subtitle={'Working your CMS skills'}
            source={'localhost:8910'}
            description={`The sequence of retrieving data from an API, showing a loading placeholder, and then displaying the result is so common that Redwood codifies it into a declarative code pattern, resulting in simple and readable code!`}
          />
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
          <Project
            variant={ProjectVariant.showcase}
            tags={[
              {
                pointer: 'v0.45',
                link: 'https://github.com/redwoodjs/redwood/releases/tag/v0.45.0',
              },
            ]}
            imgProps={{
              src: 'https://d33wubrfki0l68.cloudfront.net/fe55b84dd8ef022e3729071c88f19825f564eaec/d049e/images/structure.png',
            }}
            title={'Todo App with Expo'}
            source={'localhost:8910'}
            description={`The sequence of retrieving data from an API, showing a loading placeholder, and then displaying the result is so common that Redwood codifies it into a declarative code pattern, resulting in simple and readable code!`}
          />
          <Project
            variant={ProjectVariant.showcase}
            tags={[
              {
                pointer: 'v0.44',
                link: 'https://github.com/redwoodjs/redwood/releases/tag/v0.44.0',
              },
            ]}
            title={'Music App with Spotify API'}
            imgProps={{
              src: 'https://d33wubrfki0l68.cloudfront.net/02931d36f812dbcc6a3e41f05d133a7cdcace063/949ca/images/stickers.png',
            }}
            description={`The sequence of retrieving data from an API, showing a loading placeholder, and then displaying the result is so common that Redwood codifies it into a declarative code pattern, resulting in simple and readable code!`}
          />
          <Project
            variant={ProjectVariant.showcase}
            tags={[
              {
                pointer: 'v0.41',
                link: 'https://github.com/redwoodjs/redwood/releases/tag/v0.41.0',
              },
            ]}
            title={'You know, that example!'}
            description={`From v0.15? Way back, kids don't know these days.`}
          />
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
    </main>
  )
}

export default ShowcasePage
