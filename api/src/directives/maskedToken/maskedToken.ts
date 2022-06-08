import {
  createTransformerDirective,
  TransformerDirectiveFunc,
} from '@redwoodjs/graphql-server'

export const schema = gql`
  """
  Use @maskedToken to transform the resolved value to return a modified result.
  """
  directive @maskedToken on FIELD_DEFINITION
`

const transform: TransformerDirectiveFunc = ({ context, resolvedValue }) => {
  return !context?.currentUser?.roles.includes('admin') ? '###' : resolvedValue
}

const maskedToken = createTransformerDirective(schema, transform)

export default maskedToken
