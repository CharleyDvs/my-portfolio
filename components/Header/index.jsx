import Image from 'next/image'

import { motion } from 'framer-motion'
import { animationVariants } from '../../animations/animationVariants'

const Header = ({ scroll }) => {
  return (
    <header id="home">
      <div className="bg-container"></div>
      <div className="txt-container" style={{ opacity: `${1 - scroll / 400}` }}>
        <motion.div
          variants={animationVariants}
          initial="hiddenFront"
          animate="show"
          transition={animationVariants.ease(0.3)}
          className="secondary-color"
        >
          <h1>Jaime</h1>
        </motion.div>
        <motion.div
          variants={animationVariants}
          initial="hiddenFront"
          animate="show"
          transition={animationVariants.ease(0.6)}
        >
          <h1>Yerena</h1>
        </motion.div>
        <div className="title-container">
          <motion.div
            variants={animationVariants}
            initial="hiddenLeft"
            animate="show"
            transition={animationVariants.ease(0.9)}
            className="title-one"
          >
            <span>Web Developer</span>
          </motion.div>
          <motion.div
            variants={animationVariants}
            style={{ skewX: 15 }}
            transition={animationVariants.ease(1.2)}
            className="title-separator secondary-color"
          >
            <span>|</span>
          </motion.div>
          <motion.div
            variants={animationVariants}
            initial="hiddenRight"
            animate="show"
            transition={animationVariants.ease(1.5)}
            className="title-Two"
          >
            <span>Mechanical Engineer</span>
          </motion.div>
        </div>
      </div>
      <div
        className="img-container"
        style={{ right: `${30 + scroll * 0.025}%` }}
      >
        <Image src="/images/hawk-1.png" width="400px" height="400px" alt="" />
      </div>
    </header>
  )
}

export default Header
