import { Display } from 'src/components/Uploader/Display'
import useUploader from 'src/components/Uploader/useUploader'

export default function Uploader({ imageUrl, setImageUrl }) {
  const methods = useUploader({ imageUrl, setImageUrl })

  return <Display {...methods} />
}
