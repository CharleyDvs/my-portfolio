import React from 'react'
import { motion } from 'framer-motion'

const EnterFromRight = ({ children, delayValue }) => (
  <motion.div
    initial={{
      x: 200,
      opacity: 0,
      scale: 1.5,
    }}
    animate={{
      x: 0,
      opacity: 1,
      scale: 1,
    }}
    transition={{
      delay: delayValue,
    }}
    exit={{
      x: 200,
      opacity: 0,
      scale: 1.5,
    }}
  >
    {children}
  </motion.div>
)

export default EnterFromRight
