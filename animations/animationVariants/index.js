export const animationVariants = {
  hiddenLeft: {
    opacity: 0,
    x: -200,
  },
  hiddenRight: {
    opacity: 0,
    x: 200,
  },
  hiddenFront: {
    scale: 2,
    opacity: 0,
  },
  moveToLeft: {
    x: '-100vw',
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
  },
  ease: (delay = 0, duration = 0.5) => ({
    duration,
    delay,
  }),
}
