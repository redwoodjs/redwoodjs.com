import Display from 'src/components/Tag/Display'

const List = ({ rootKey, tags, onClick, excludeTag = undefined }) => (
  <div className={'flex flex-wrap'}>
    {tags
      ?.filter((tag) => tag.label !== excludeTag)
      ?.map((tag) => (
        <Display
          key={`${rootKey} - tag - ${tag?.link ?? tag.label}`}
          {...tag}
          onClick={onClick}
        />
      ))}
  </div>
)

export default List
