export const calcCssValues = (value, defaultZSpacing) => {
  const transform = `translateZ(${value}px)`;
  const opacity = value < Math.abs(defaultZSpacing) / 30 ? 1 : 0;
  const visibility = value < Math.abs(defaultZSpacing) / 30 ? 'visible' : 'hidden';
  const pointerEvents =
    value < Math.abs(defaultZSpacing) / 30 ? (value <= -500 ? 'none' : 'all') : 'none';

  return { transform, opacity, visibility, pointerEvents };
};
