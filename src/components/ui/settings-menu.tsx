import { cn } from '@/utils/cn'
import type { PropsWithChildren } from 'react'
import { motion } from 'motion/react'
import ReactDOM from 'react-dom'

interface Props {
  className?: string
}

export const SettingsMenu = ({
  className,
  children,
}: PropsWithChildren<Props>) => {
  return ReactDOM.createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
      className={cn('fixed top-3 right-4 z-[10000]', className)}
    >
      {children}
    </motion.div>,
    document.body
  )
}
