import { AnimatedGradientBg, Grid, Stick } from '@/components/ui'

export const BackgroundDecorations = () => {
  return (
    <>
      <Grid className="left-[2%]">
        <Stick className="left-[342px]" />
        <Stick
          direction="down"
          className="left-[437px]"
        />
      </Grid>

      <Grid className="-right-[15%] -bottom-[50%] laptop:hidden">
        <Stick
          direction="down"
          className="left-[342px]"
        />
        <Stick className="left-[530px]" />
      </Grid>

      <AnimatedGradientBg />
    </>
  )
}
