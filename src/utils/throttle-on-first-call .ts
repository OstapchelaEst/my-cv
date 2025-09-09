export const throttleOnFirstCall = <T>(
  fn: (args: T) => void,
  delay: number
) => {
  let timer: ReturnType<typeof setTimeout> | null = null

  return (args: T) => {
    if (timer !== null) {
      return
    }

    timer = setTimeout(() => {
      timer = null
    }, delay)

    fn(args)
  }
}
