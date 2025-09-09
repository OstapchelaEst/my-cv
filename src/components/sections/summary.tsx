import { useTranslation } from 'react-i18next'

export const Summary = () => {
  const { t } = useTranslation()

  return (
    <div className="pl-10 bg-black h-full flex flex-col justify-center max-w-[85%] mobile:pl-0 mobile:justify-start mobile:items-center mobile:max-w-full">
      <h2 className="title">{t('titles.summary')}</h2>

      <p className="text">{t('summary.p1')}</p>
      <p className="text">{t('summary.p2')}</p>
    </div>
  )
}
