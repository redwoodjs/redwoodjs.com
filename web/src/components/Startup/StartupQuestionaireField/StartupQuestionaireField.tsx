import { useEffect } from 'react'
import { TextField, useFieldArray } from '@redwoodjs/forms'

import type { StartupQuestionResponseInput } from 'types/graphql'

// --

export interface StartupQuestionaireFieldProps {
  defaultValue?: StartupQuestionResponseInput[]
  name: string
}

// --

const cleanQuestions = (d: StartupQuestionResponseInput[]) =>
  d.map(({ question, response }) => ({ question, response }))

// --

const StartupQuestionaireField = ({
  defaultValue,
  name,
}: StartupQuestionaireFieldProps) => {
  //
  const { append, fields, remove } = useFieldArray({ name })

  // --

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => defaultValue && append(cleanQuestions(defaultValue)), [])

  // --

  return (
    <div className="flex flex-col mt-2 space-y-4">
      <button
        aria-label="Add field"
        className="button button-invert bg-transparent leading-[0] p-1 h-fit w-fit flex flex-row items-center space-x-4"
        onClick={() => append('')}
        type="button"
      >
        <span className="icon md-20">add</span>
        <span className="block text-sm">Add a Response</span>
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
            <div className="flex flex-col flex-grow space-y-2">
              <TextField
                className="rw-input mt-0"
                name={`${name}.${idx}.question`}
                defaultValue=""
                placeholder="Question"
                validation={{ required: true }}
              />
              <TextField
                className="rw-input mt-0"
                name={`${name}.${idx}.response`}
                defaultValue=""
                placeholder="Response"
                validation={{ required: true }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StartupQuestionaireField
