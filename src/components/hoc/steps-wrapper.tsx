import { useStepsCss } from '@/hooks/useStepsCss'
import { Children, type PropsWithChildren } from 'react'

export const StepsWrapper = ({ children }: PropsWithChildren) => {
  const count = Children.count(children)

  useStepsCss({ maxSteps: count })

  return (
    <div
      style={{
        perspective: '2500px',
      }}
      className="fixed top-0 left-0 inset-0"
    >
      {children}
    </div>
  )
}
