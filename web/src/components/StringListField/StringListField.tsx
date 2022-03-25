import { useEffect } from 'react'
import { TextField, useFieldArray } from '@redwoodjs/forms'

// --

export interface StringListFieldProps {
  addTitle?: string
  defaultValue?: string[]
  max?: number
  name: string
  placeholder?: string
}

// --

/**
 * A `<Form>` field component for gathering a list of strings. The user's response will be added to the form's submit object as an `Array` identified by `name`, with each member being one of the responses.
 *
 * When a field is present, a user will be required to provide a value.
 */
const StringListField = ({
  addTitle,
  defaultValue,
  max,
  name,
  placeholder,
}: StringListFieldProps) => {
  //

  const { append, fields, remove } = useFieldArray({ name })

  // --

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => defaultValue && append(defaultValue), [])

  // --

  return (
    <div className="flex flex-col mt-2 space-y-4">
      <button
        aria-label="Add field"
        className="button button-invert bg-transparent leading-[0] p-1 h-fit w-fit flex flex-row items-center space-x-4"
        disabled={max && fields.length === max}
        onClick={() => append('')}
        type="button"
      >
        <span className="icon md-20">add</span>
        {addTitle && <span className="block text-sm">{addTitle}</span>}
      </button>
      <ul className="space-y-4">
        {fields.map((field, idx) => (
          <li className="flex flex-row items-center space-x-3" key={field.id}>
            <button
              aria-label="Remove field"
              className="button button-invert bg-transparent text-red-600 hover:bg-red-100 hover:text-red-700 leading-[0] p-1 h-fit"
              onClick={() => remove(idx)}
              type="button"
            >
              <span className="icon md-16">delete</span>
            </button>
            <TextField
              className="rw-input mt-0"
              name={`${name}.${idx}`}
              defaultValue=""
              placeholder={placeholder}
              validation={{ required: true }}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StringListField
