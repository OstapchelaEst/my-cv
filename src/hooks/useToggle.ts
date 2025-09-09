import { useState } from 'react'

export const useToggle = (initialValue = false): [boolean, () => void] => {
  const [isOpen, setIsOpen] = useState(initialValue)

  const toggle = () => setIsOpen((prev) => !prev)

  return [isOpen, toggle]
}
