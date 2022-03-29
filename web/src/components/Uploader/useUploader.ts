import { toast } from '@redwoodjs/web/toast'
import * as filestack from 'filestack-js'

export default function useUploader({ imageUrl, setImageUrl }) {
  const fsClient = filestack.init(process.env.FILESTACK_API_KEY)

  const onUpload = React.useCallback(
    ({ filesUploaded, filesFailed }) => {
      if (filesFailed.length) {
        toast.error(
          'There was a problem uploading your selected image. Try again, or pick a different image.',
          { duration: 10000 }
        )
      } else {
        setImageUrl(filesUploaded[0].url)
      }
    },
    [setImageUrl]
  )

  const onOpenPicker = React.useCallback(() => {
    fsClient
      .picker({
        accept: ['image/jpeg', 'image/png', 'image/gif'],
        maxFiles: 1,
        onUploadDone: onUpload,
      })
      .open()
  }, [fsClient, onUpload])

  const onChangeImage = React.useCallback(() => {
    setImageUrl(null)
    onOpenPicker()
  }, [onOpenPicker])

  return {
    imageUrl,
    onChangeImage,
    onOpenPicker,
  }
}
