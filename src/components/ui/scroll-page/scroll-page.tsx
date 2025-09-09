import { cn } from '@/utils/cn'
import styles from './styles.module.scss'

interface Props {
  children: React.ReactNode
  className?: string
  step: number
  position?: 'left' | 'right'
}

export const ScrollPage = ({ children, className, step, position }: Props) => {
  return (
    <section
      data-step={step}
      style={
        {
          '--page-step': step,
        } as React.CSSProperties
      }
      className={cn(
        {
          [styles.has_position]: position,
        },
        styles.scroll_page,
        className
      )}
    >
      {position === 'right' && <div className="min-w-[50vw]" />}
      {children}
      {position === 'left' && <div className="min-w-[50vw]" />}
    </section>
  )
}
