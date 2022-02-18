import {
  FieldError,
  Form,
  FormError,
  Label,
  RadioField,
  Submit,
  TextField,
} from '@redwoodjs/forms'

const MediaForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.media?.id)
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
          name="url"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Url
        </Label>

        <TextField
          name="url"
          defaultValue={props.media?.url}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="url" className="rw-field-error" />

        <Label
          name="type"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Type
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="media-type-0"
            name="type"
            defaultValue="video"
            defaultChecked={props.media?.type?.includes('video')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Video</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="media-type-1"
            name="type"
            defaultValue="picture"
            defaultChecked={props.media?.type?.includes('picture')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Picture</div>
        </div>

        <FieldError name="type" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default MediaForm
