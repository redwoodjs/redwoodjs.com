import { useRef } from 'react'
import { TextField } from '@redwoodjs/forms'

const FormTaggable = ({ name, get, set }) => {
  const inputRef = useRef()

  const onAdd = () => {
    if (
      inputRef.current.value.trim() !== '' &&
      get.indexOf(inputRef.current.value.trim()) === -1
    ) {
      set([...get, inputRef.current.value.trim()])
      inputRef.current.value = ''
    }
  }

  const onRemove = (index) => {
    const newSet = [...get]
    newSet.splice(index, 1)
    set(newSet)
  }

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      onAdd()
    }
  }

  return (
    <>
      <div className="flex items-center button-attach">
        <TextField
          name={name}
          ref={inputRef}
          errorClassName="error"
          onKeyPress={onKeyPress}
          validation={{
            validate: () =>
              !!get.length ||
              `At least one ${name} required. Did you click the ADD button?`,
          }}
        />
        <button type="button" onClick={onAdd}>
          Add
        </button>
      </div>
      <ul className="tags">
        {get.map((item, i) => (
          <li key={`${name}-${i}`}>
            <span>{item}</span>
            <button
              type="button"
              className="icon md-13"
              onClick={() => onRemove(i)}
              title="Remove this item"
            >
              close
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default FormTaggable
