import ReactDOM from 'react-dom'
import { cn } from '@/utils/cn'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@/hooks/useNavigation'

import styles from './styles.module.scss'

const NAV_ITEMS = [
  {
    label: 'titles.summary',
    step: 2,
  },
  {
    label: 'titles.skills',
    step: 4,
  },
  {
    label: 'titles.contacts',
    step: 5,
  },
]

export const Navigation = () => {
  const { t } = useTranslation()
  const { isOpen, handleNavigationClick, toggleOpen } = useNavigation()

  return ReactDOM.createPortal(
    <header className={cn(styles.navigation, { [styles.active]: isOpen })}>
      <nav className={styles.nav}>
        {NAV_ITEMS.map(({ label, step }, i) => (
          <button
            key={i}
            onClick={handleNavigationClick(step)}
            className={styles.nav_item}
          >
            {t(label)}
          </button>
        ))}
      </nav>

      <button
        onClick={toggleOpen}
        className={styles.btn}
      >
        <svg
          width="100%"
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 1792 1792"
        >
          <path
            fill="inherit"
            d="M895.8,1696l371.6-546.4h-259.5c-13.5-5.7-25.6-13.2-30.6-22.4c-10.3-20.3-6.4-88.3,75.1-215
          c102.2-158.8,136.7-315.4,102.2-465.6C1103,220.6,910.4,101,902.2,96L777.6,300c1.1,0.7,115,73.3,143.8,199.7
          c19.6,85.1-4.3,180.5-70.1,283C773,904,733.9,1012.2,733.9,1105.1c0,15.3,1.4,29.9,3.6,44.1H524.6L895.8,1696z"
          />
        </svg>
      </button>
    </header>,
    document.body
  )
}
