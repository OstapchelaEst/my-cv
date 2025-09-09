import { motion } from 'motion/react'
import { cn } from '@/utils/cn'
import { IconsDecorations } from './icons-decoration'
import { BackgroundDecorations } from './background-decorations'

import styles from './styles.module.scss'

export const Hero = () => {
  return (
    <>
      <BackgroundDecorations />

      <div className={styles.hero}>
        <h1 className="mobile:text-center">
          <AnimatedTitle>Astapchuk Dzmitry</AnimatedTitle>
        </h1>

        <IconsDecorations />

        <motion.div
          className={styles.underline}
          initial={{ width: '0%', opacity: 0 }}
          animate={{ width: '110%', opacity: 1 }}
          transition={{ duration: 2, ease: 'linear' }}
        />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          front-end developer
        </motion.h2>
      </div>
    </>
  )
}

const AnimatedTitle = ({ children }: { children: string }) => {
  return children.split('').map((char, index) => {
    return (
      <motion.span
        className={cn('inline-block', {
          'w-[calc(var(--ss)*2.5)] mobile:block': char === ' ',
          '': char === ' ',
        })}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 + index * 0.1 }}
        key={index}
      >
        {char}
      </motion.span>
    )
  })
}
