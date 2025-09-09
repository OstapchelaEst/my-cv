import { cn } from '@/utils/cn'
import { motion } from 'motion/react'

import styles from './styles.module.scss'

export const IconsDecorations = () => {
  return (
    <>
      <motion.img
        initial={{ opacity: 0, rotate: 180 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        className={cn(
          styles.hero_decoration,
          '-top-[20%] -left-[16%] mobile:-left-[40%]'
        )}
        src="/images/hero/react.svg"
        alt="React"
      />

      <motion.img
        initial={{ opacity: 0, y: 20, x: 40 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: 2.3, duration: 0.5 }}
        className={cn(styles.hero_decoration, '-bottom-[70%] left-[8%]')}
        src="/images/hero/tailwind.svg"
        alt="Tailwind"
      />

      <motion.img
        initial={{ opacity: 0, rotate: 240, y: -30 }}
        animate={{ opacity: 1, rotate: 0, y: 0 }}
        transition={{ delay: 2.2, duration: 0.5 }}
        className={cn(styles.hero_decoration, 'left-1/2 -top-[85%]')}
        src="/images/hero/redux.svg"
        alt="Redux"
      />

      <motion.img
        initial={{ opacity: 0, rotate: 140, x: 70 }}
        animate={{ opacity: 1, rotate: 0, x: 0 }}
        transition={{ delay: 2.2, duration: 0.5 }}
        className={cn(styles.hero_decoration, 'left-[70%] -bottom-[65%]')}
        src="/images/hero/typescript.svg"
        alt="Typescript"
      />

      <motion.img
        initial={{ opacity: 0, x: 40, rotate: 60 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        className={cn(
          styles.hero_decoration,
          '-right-[22%] mobile:-right-[40%] '
        )}
        src="/images/hero/sass.svg"
        alt="Sass"
      />
    </>
  )
}
