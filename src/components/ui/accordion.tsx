import { cn } from '@/utils/cn'
import { type PropsWithChildren } from 'react'

interface Props {
  title: string
  toggle: () => void
  isOpen: boolean
  triggerClassName?: string
}

export const Accordion = ({
  title,
  children,
  isOpen,
  triggerClassName,
  toggle,
}: PropsWithChildren<Props>) => {
  return (
    <div
      className={cn(
        'grid h-fit grid-rows-[auto_0fr] transition-all duration-300',
        {
          'grid-rows-[auto_1fr]': isOpen,
        }
      )}
    >
      <button
        onClick={toggle}
        className={' flex items-center group justify-between gap-4'}
      >
        <span
          className={cn(
            'group-hover:text-accent/60 transition-all',
            {
              'text-accent': isOpen,
            },
            triggerClassName
          )}
        >
          {title}
        </span>

        <svg
          className={cn(
            'transition-all w-4 h-4 fill-white group-hover:fill-accent/60',
            {
              'rotate-180 fill-accent': isOpen,
            }
          )}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.9188 8.17969H11.6888H6.07877C5.11877 8.17969 4.63877 9.33969 5.31877 10.0197L10.4988 15.1997C11.3288 16.0297 12.6788 16.0297 13.5088 15.1997L15.4788 13.2297L18.6888 10.0197C19.3588 9.33969 18.8788 8.17969 17.9188 8.17969Z"
            fill="inherit"
          />
        </svg>
      </button>

      <div
        className={cn('overflow-hidden opacity-0 transition-all duration-300', {
          'opacity-100 delay-100': isOpen,
        })}
      >
        {children}
      </div>
    </div>
  )
}
