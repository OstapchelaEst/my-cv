import i18n from '@/i18next'
import { cn } from '@/utils/cn'
import { useTranslation } from 'react-i18next'

const languages = ['pl', 'en', 'ru']

export const Translate = () => {
  const {
    i18n: { language },
  } = useTranslation()

  return (
    <ul className="flex items-center gap-3">
      {languages.map((lang) => (
        <li key={lang}>
          <button
            onClick={() => {
              i18n.changeLanguage(lang)
            }}
            className={cn(
              'text-white uppercase text-[var(--ss)*2.5] transition-all duration-300 hover:text-accent/70 font-semibold',
              {
                'pointer-events-none text-accent': lang === language,
              }
            )}
          >
            {lang}
          </button>
        </li>
      ))}
    </ul>
  )
}
