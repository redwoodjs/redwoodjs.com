import {
  CheckboxField,
  FieldError,
  Form,
  FormError,
  Label,
  NumberField,
  RadioField,
  Submit,
  TextField,
} from '@redwoodjs/forms'

const AuthorForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.author?.id)
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
          name="firstname"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Firstname
        </Label>

        <TextField
          name="firstname"
          defaultValue={props.author?.firstname}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="firstname" className="rw-field-error" />

        <Label
          name="lastname"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Lastname
        </Label>

        <TextField
          name="lastname"
          defaultValue={props.author?.lastname}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="lastname" className="rw-field-error" />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>

        <TextField
          name="email"
          defaultValue={props.author?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="email" className="rw-field-error" />

        <Label
          name="isEmailPublic"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Is email public
        </Label>

        <CheckboxField
          name="isEmailPublic"
          defaultChecked={props.author?.isEmailPublic}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="isEmailPublic" className="rw-field-error" />

        <Label
          name="pronoun"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Pronoun
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="author-pronoun-0"
            name="pronoun"
            defaultValue="they"
            defaultChecked={props.author?.pronoun?.includes('they')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>They</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="author-pronoun-1"
            name="pronoun"
            defaultValue="he"
            defaultChecked={props.author?.pronoun?.includes('he')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>He</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="author-pronoun-2"
            name="pronoun"
            defaultValue="she"
            defaultChecked={props.author?.pronoun?.includes('she')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>She</div>
        </div>

        <FieldError name="pronoun" className="rw-field-error" />

        <Label
          name="linkedin"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Linkedin
        </Label>

        <TextField
          name="linkedin"
          defaultValue={props.author?.linkedin}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="linkedin" className="rw-field-error" />

        <Label
          name="github"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Github
        </Label>

        <TextField
          name="github"
          defaultValue={props.author?.github}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="github" className="rw-field-error" />

        <Label
          name="productHunt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Product hunt
        </Label>

        <TextField
          name="productHunt"
          defaultValue={props.author?.productHunt}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="productHunt" className="rw-field-error" />

        <Label
          name="company"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Company
        </Label>

        <TextField
          name="company"
          defaultValue={props.author?.company}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="company" className="rw-field-error" />

        <Label
          name="discord"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Discord
        </Label>

        <TextField
          name="discord"
          defaultValue={props.author?.discord}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="discord" className="rw-field-error" />

        <Label
          name="avatarId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Avatar id
        </Label>

        <NumberField
          name="avatarId"
          defaultValue={props.author?.avatarId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="avatarId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default AuthorForm
