import { useState } from 'react'

import { useTranslation } from 'react-i18next'
import { Accordion } from '@/components/ui/accordion'

const skills = [
  {
    title: '⚛️ Core',
    list: ['React.js', 'TypeScript / JavaScript (ES6+)'],
  },
  {
    title: '🎨 Styles',
    list: [
      'CSS, SCSS',
      'TailwindCSS',
      'Styled-components',
      'Adaptive / Cross-browser layout',
    ],
  },
  {
    title: '📦 State Management',
    list: ['Redux / Redux Toolkit', 'Zustand'],
  },
  {
    title: '🔌 API Work',
    list: [
      'REST',
      'RTK Query, React Query, SWR',
      'Axios, WebSockets',
      'Integration with external services',
    ],
  },
  {
    title: '📝 Forms & Validation',
    list: ['React-hook-form', 'zod', 'yup'],
  },
  {
    title: '🎬 Animations & 3D',
    list: ['Framer Motion', 'D3.js', 'Three.js / react-three-fiber'],
  },
  {
    title: '🛠️ Other',
    list: [
      'Next.js / Node.js (basic knowledge)',
      'Telegram Mini Apps',
      'Localization (i18n, next-intl)',
      'Sentry.io',
      'TradingView Charts',
      'Solana RPC / Web3',
    ],
  },
  {
    title: '🚀 Additional',
    list: [
      'Git / GitHub / GitLab',
      'Agile / Scrum',
      'Frontend performance optimization',
    ],
  },
]

export const Skills = () => {
  const [openId, setOpenId] = useState<string | null>(null)
  const { t } = useTranslation()

  const handleToggle = (id: string) => () => {
    if (openId === id) {
      setOpenId(null)
    } else {
      setOpenId(id)
    }
  }

  return (
    <div className="pl-10 bg-black flex flex-col h-full justify-center mobile:items-center mobile:justify-start mobile:pl-0 ">
      <h2 className="title">{t('titles.skills')}</h2>

      <div className="max-w-[65%]">
        {skills.map(({ title, list }) => (
          <Accordion
            triggerClassName="text-[calc(var(--ss)*1.5)]"
            isOpen={openId === title}
            toggle={handleToggle(title)}
            key={title}
            title={title}
          >
            <ul className="list-disc pl-[9%] text-[calc(var(--ss)*1.3)]">
              {list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Accordion>
        ))}
      </div>
    </div>
  )
}
