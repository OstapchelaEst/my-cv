import { useState } from 'react'
import { CSS_STEP_VARIABLE, updateActiveStep } from './useStepsCss'

export const useNavigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen((prev) => !prev)

  const handleNavigationClick = (step: number) => () => {
    document.documentElement.style.setProperty(CSS_STEP_VARIABLE, String(step))

    updateActiveStep()
    toggle()
  }

  return {
    isOpen,
    toggleOpen: toggle,
    handleNavigationClick,
  }
}
