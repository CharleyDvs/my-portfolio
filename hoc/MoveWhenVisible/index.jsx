import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { animationVariants } from '../../animations/animationVariants'

function MoveWhenVisible({ children, delay = 0, duration = 0 }) {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('moveToLeft')
    } else {
      controls.start('show')
    }
  }, [controls, inView])
  return (
    <motion.div
      ref={ref}
      variants={animationVariants}
      initial="show"
      animate={controls}
      transition={animationVariants.ease(delay, duration)}
    >
      {children}
    </motion.div>
  )
}

export default MoveWhenVisible
