import {createTransformerDirective, TransformerDirectiveFunc,} from '@redwoodjs/graphql-server'

enum LanguageISOCode {
  fr = "fra",
  en = "eng"
}

const DEFAULT_LANGUAGE = LanguageISOCode.en

export const schema = gql`
  """
  Use @translate to transform the resolved value to return a modified result.
  """
  directive @translate(language: String) on FIELD_DEFINITION
`

function applyTransformation(node, iso_code) {
  if ("localizations" in node) {
    const {localizations, ...data} = node

    const localization = localizations.filter(loc => loc.language === iso_code)?.pop() ?? false

    if (localization) {
      const {
        id, isValid, language, ...translation
      } = localization

      return {...data, ...translation}
    }

    return data

  } else {
    return node
  }
}

const transform: TransformerDirectiveFunc = ({context, directiveArgs, resolvedValue}) => {
  // @ts-ignore
  const language = LanguageISOCode[context.variables?.language] ?? DEFAULT_LANGUAGE

  if (resolvedValue instanceof Array) {
    return resolvedValue.map(node => applyTransformation(node, language))
  } else {
    return applyTransformation(resolvedValue, language)
  }
}

const translate = createTransformerDirective(schema, transform)

export default translate
