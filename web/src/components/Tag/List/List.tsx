import Display from 'src/components/Tag/Display'

const List = ({ rootKey, tags }) => (
  <div className={'flex flex-wrap'}>
    {tags?.map((tag) => (
      <Display key={`${rootKey} - tag - ${tag?.link ?? tag.label}`} {...tag} />
    ))}
  </div>
)

export default List
