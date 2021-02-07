import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { animationVariants } from '../../animations/animationVariants'

function EnterWhenVisible({
  children,
  animationValue = 'hiddenFront',
  delay = 0,
}) {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('show')
    } else {
      controls.start(`${animationValue}`)
    }
  }, [controls, inView])
  return (
    <motion.div
      ref={ref}
      variants={animationVariants}
      initial={`${animationValue}`}
      animate={controls}
      transition={animationVariants.ease(delay)}
    >
      {children}
    </motion.div>
  )
}

export default EnterWhenVisible
