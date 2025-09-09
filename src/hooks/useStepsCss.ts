import { throttleOnFirstCall } from '@/utils/throttle-on-first-call '
import { useEffect } from 'react'

export const CSS_STEP_VARIABLE = '--current-step'
const DEFAULT_STEP = 1
const SCROLL_THROTTLE = 500

type StepDirection = 'down' | 'up'

const setStep = (step: number) =>
  document.documentElement.style.setProperty(CSS_STEP_VARIABLE, String(step))

const getStep = (): number =>
  Number(
    getComputedStyle(document.documentElement).getPropertyValue(
      CSS_STEP_VARIABLE
    )
  ) || DEFAULT_STEP

const setDefaultStep = () => setStep(DEFAULT_STEP)

const updateStep = (direction: StepDirection, maxSteps: number) => {
  let step = getStep()

  if (direction === 'down' && step < maxSteps) step += 1
  if (direction === 'up' && step > 1) step -= 1

  setStep(step)
  updateActiveStep()
}

export const updateActiveStep = () => {
  const currentStep = String(getStep())
  document.querySelectorAll<HTMLElement>('[data-step]').forEach((el) => {
    el.classList.toggle('active', el.getAttribute('data-step') === currentStep)
  })
}

export const useStepsCss = ({ maxSteps }: { maxSteps: number }) => {
  useEffect(() => {
    let touchStart = 0

    const handleDirection = (direction: StepDirection) => {
      updateStep(direction, maxSteps)
    }

    const handleWheel = throttleOnFirstCall((e: WheelEvent) => {
      handleDirection(e.deltaY > 0 ? 'down' : 'up')
    }, SCROLL_THROTTLE)

    const handleTouchStart = (e: TouchEvent) => {
      e.preventDefault()
      touchStart = e.changedTouches[0].clientY
    }

    const handleTouchEnd = (e: TouchEvent) => {
      e.preventDefault()
      const touchEnd = e.changedTouches[0].clientY
      const deltaY = touchEnd - touchStart

      if (Math.abs(deltaY) < 100) return

      const direction: StepDirection = deltaY < 0 ? 'down' : 'up'
      handleDirection(direction)
    }

    const handleTouchMove = (e: TouchEvent) => e.preventDefault()

    setDefaultStep()
    updateActiveStep()

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchstart', handleTouchStart, { passive: false })
    window.addEventListener('touchstart', handleTouchMove, { passive: false })
    window.addEventListener('touchend', handleTouchEnd, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchstart', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [maxSteps])
}
