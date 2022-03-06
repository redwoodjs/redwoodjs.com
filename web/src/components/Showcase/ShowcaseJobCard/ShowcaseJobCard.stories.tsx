import ShowcaseJobCard from './ShowcaseJobCard'

const props = {
  id: 1,
  title: 'string',
  locations: 'string',
  aboutJob: 'string',
  createdAt: 'string',
}

export const generated = () => {
  return <ShowcaseJobCard {...props} />
}

export default { title: 'Components/ShowcaseJobCard' }
