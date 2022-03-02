import {
  Form,
  FormError,
  FieldError,
  Label,
  CheckboxField,
  RadioField,
  TextField,
  Submit,
} from '@redwoodjs/forms'



const ShowcaseLocalizationForm = (props) => {
  const onSubmit = (data) => {

  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.showcaseLocalization?.id)
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
          name="isValid"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Is valid
        </Label>
        
          <CheckboxField
            name="isValid"
            defaultChecked={props.showcaseLocalization?.isValid}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="isValid" className="rw-field-error" />

        <Label
          name="language"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Language
        </Label>
        
          
          
        <div className="rw-check-radio-items">
          <RadioField
            id="showcaseLocalization-language-0"
            name="language"
            defaultValue="eng"
            defaultChecked={props.showcaseLocalization?.language?.includes('eng')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Eng
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="showcaseLocalization-language-1"
            name="language"
            defaultValue="fra"
            defaultChecked={props.showcaseLocalization?.language?.includes('fra')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Fra
          </div>
        </div>
          
        

        <FieldError name="language" className="rw-field-error" />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>
        
          <TextField
            name="title"
            defaultValue={props.showcaseLocalization?.title}
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
            defaultValue={props.showcaseLocalization?.subtitle}
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
            defaultValue={props.showcaseLocalization?.description}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="description" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ShowcaseLocalizationForm
