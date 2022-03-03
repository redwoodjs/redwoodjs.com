import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const UserForm = (props) => {
  const onSubmit = (data) => {
    if (data.roles) {
      data.roles = data.roles.filter((value) => !!value)
    }

    props.onSave(data, props?.user?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>

        <TextField
          name="email"
          defaultValue={props.user?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="email" className="rw-field-error" />

        <Label
          name="roles"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Roles
        </Label>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="user-roles-0"
            name="roles[0]"
            defaultValue="admin"
            defaultChecked={props.user?.roles?.includes('admin')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Admin</div>
        </div>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="user-roles-1"
            name="roles[1]"
            defaultValue="editor"
            defaultChecked={props.user?.roles?.includes('editor')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Editor</div>
        </div>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="user-roles-2"
            name="roles[2]"
            defaultValue="translator"
            defaultChecked={props.user?.roles?.includes('translator')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Translator</div>
        </div>

        <div className="rw-check-radio-items">
          <CheckboxField
            id="user-roles-3"
            name="roles[3]"
            defaultValue="candidate"
            defaultChecked={props.user?.roles?.includes('candidate')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Candidate</div>
        </div>

        <FieldError name="roles" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UserForm
