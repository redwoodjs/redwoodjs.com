import { Label } from '@redwoodjs/forms'
import { Translation } from 'react-i18next'
import { resizeFilestackImage } from './utility'

export const Display = ({
  imageUrl,
  onChangeImage,
  onOpenPicker,
  pointer = 'Logo',
  imageSize = {
    width: 768,
    height: 384,
  },
}) => (
  <Translation>
    {(t) => (
      <div className="input">
        <div className="flex flex-col">
          <Label name="logo" className="rw-label" errorClassName="error">
            {t(pointer)}
          </Label>
          {imageUrl ? (
            <div className="flex flex-col items-center">
              <img
                src={resizeFilestackImage(imageUrl, imageSize)}
                alt="Uploaded logo"
                className="w-96 h-48 mx-auto object-contain"
              />
              <button
                type="button"
                className="mt-4 button-sm"
                onClick={onChangeImage}
              >
                Change Image
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="mt-2 button-alt"
              onClick={onOpenPicker}
            >
              Choose Image...
            </button>
          )}
        </div>
        <div className="column help">
          {`Include an image to help your content stand out. PNG, JPG or GIF only, please.`}
        </div>
      </div>
    )}
  </Translation>
)
