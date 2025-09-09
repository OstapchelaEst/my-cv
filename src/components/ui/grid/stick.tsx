import clsx from 'clsx'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

type Direction = 'up' | 'down'

interface Props {
  className?: string
  direction?: Direction
}

const animationDirectionProps: Record<
  Direction,
  { animateTop: [string, string]; initialPosition: string; icon: string }
> = {
  up: {
    animateTop: ['100%', '0%'],
    initialPosition: '100%',
    icon: '/images/icons/up-stick.svg',
  },
  down: {
    animateTop: ['0%', '100%'],
    initialPosition: '0%',
    icon: '/images/icons/down-stick.svg',
  },
}

export const Stick = ({ className, direction = 'up' }: Props) => {
  const controls = useAnimation()

  const { animateTop, initialPosition, icon } =
    animationDirectionProps[direction]

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null

    const runAnimation = async () => {
      const initialDelay = Math.random() * 10000
      await new Promise((res) => {
        timeoutId = setTimeout(res, initialDelay)
      })

      while (true) {
        await controls.start({
          opacity: [0, 0.3, 1, 0.3, 0],
          top: animateTop,
          transition: { duration: 4, ease: 'easeInOut' },
        })

        const randomDelay = 1000 + Math.random() * 6000
        await new Promise((res) => {
          timeoutId = setTimeout(res, randomDelay)
        })
      }
    }

    runAnimation()

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [controls])

  return (
    <motion.div
      initial={{ opacity: 0, top: initialPosition }}
      animate={controls}
      className={clsx('absolute', className)}
    >
      <img
        src={icon}
        alt="decoration"
      />
    </motion.div>
  )
}
