import React, { useEffect } from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

import EnterWhenVisible from '../../hoc/EnterWhenVisible'

const QuoteBanner = ({ scroll }) => {
  const [ref, inView] = useInView()
  return (
    <div className="banner">
      <div className="bg-container"></div>
      <div ref={ref} className={`img-container ${inView ? 'move' : ''}`}>
        <Image src="/images/hawk-2.png" width="250px" height="150px" />
      </div>
      <div className="txt-container">
        <EnterWhenVisible>
          <p>
            I'm always striving to get better at web develoment specially with
            front-end technologies, always trying to learn the most recent
            trends to eventually achieve mastery in order{' '}
            <b>to forge epic experiences</b>
          </p>
        </EnterWhenVisible>
      </div>
    </div>
  )
}

export default QuoteBanner
