import Display from 'src/components/Tag/Display'
import './List.scss'

const List = ({ rootKey, tags }) => (
  <div className={'tags__list'}>
    {tags?.map((tag) => (
      <Display key={`${rootKey} - tag - ${tag?.link ?? tag.label}`} {...tag} />
    ))}
  </div>
)

export default List
