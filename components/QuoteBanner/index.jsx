import React from 'react'
import Image from 'next/image'

import EnterWhenVisible from '../../hoc/EnterWhenVisible'

const QuoteBanner = () => {
  return (
    <div className="banner">
      <div className="bg-container"></div>
      <div className="img-container">
        <Image src="/images/hawk-2.png" width="250px" height="150px" />
      </div>
      <div className="txt-container">
        <EnterWhenVisible>
          <p>
            I'm always striving to get better at web technologies specially with
            front-end technologies, always trying to learn the most recent
            trends to eventually achieve mastery to forge epic experiences
          </p>
        </EnterWhenVisible>
      </div>
    </div>
  )
}

export default QuoteBanner
