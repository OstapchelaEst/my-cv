export const useDebounce = <T,>(delay: number) => {
  const debounce = (fn: (args: T) => void) => {
    let timer: ReturnType<typeof setTimeout> | null = null

    return (args: T) => {
      if (timer !== null) {
        return
      }

      timer = setTimeout(() => {
        console.log('debounce', timer)
        timer = null
      }, delay)

      console.log('CALL', timer, args)
      fn(args)
    }
  }
  return debounce
}
