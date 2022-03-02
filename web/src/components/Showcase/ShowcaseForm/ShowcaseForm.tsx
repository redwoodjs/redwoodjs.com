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

const ShowcaseForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.showcase?.id)
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
          name="isPublished"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Is published
        </Label>

        <CheckboxField
          name="isPublished"
          defaultChecked={props.showcase?.isPublished}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="isPublished" className="rw-field-error" />

        <Label
          name="link"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Link
        </Label>

        <TextField
          name="link"
          defaultValue={props.showcase?.link}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="link" className="rw-field-error" />

        <Label
          name="label"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Label
        </Label>

        <TextField
          name="label"
          defaultValue={props.showcase?.label}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="label" className="rw-field-error" />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>

        <TextField
          name="title"
          defaultValue={props.showcase?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="subtitle"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Subtitle
        </Label>

        <TextField
          name="subtitle"
          defaultValue={props.showcase?.subtitle}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="subtitle" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.showcase?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="mediaId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Media id
        </Label>

        <NumberField
          name="mediaId"
          defaultValue={props.showcase?.mediaId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="mediaId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ShowcaseForm
