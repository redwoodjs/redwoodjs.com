import { Translation } from 'react-i18next'

const Loading = ({ placeholder = '' }) => {
  return (
    <Translation>
      {(t) => (
        <section className="max-w-screen-xl w-full mt-10 mx-auto px-8 my-8">
          <div className="flex justify-center bg-white border border-stone-200 py-12 rounded-lg text-stone-400">
            <span className="icon animate-spin mr-2">refresh</span>
            {placeholder && t('loading.content', { placeholder })}
            {!placeholder && t('loading.normal')}
          </div>
        </section>
      )}
    </Translation>
  )
}

export default Loading
