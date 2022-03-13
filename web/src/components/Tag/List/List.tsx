import Display, { TagProps } from 'src/components/Tag/Display'
import { Tag } from 'types/graphql'

interface ListProps {
  rootKey: string
  tags: Tag[]
  onClick?: TagProps['onClick']
  Component?: React.ComponentFactory<any, any>
  excludeTag?: string
}

const List: React.FC<ListProps> = ({
  rootKey,
  tags,
  onClick,
  Component = Display,
  excludeTag = undefined,
}) => (
  <div className={'flex flex-row flex-wrap'}>
    {tags
      ?.filter(
        (tag) => !['sample', 'showcase', 'community'].includes(tag.label)
      )
      ?.filter((tag) => tag.label !== excludeTag)
      ?.map((tag) => (
        <Component
          key={`${rootKey} - tag - ${tag?.link ?? tag.label}`}
          {...tag}
          onClick={onClick}
        />
      ))}
  </div>
)

export default List
