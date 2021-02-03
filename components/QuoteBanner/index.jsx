import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

import { scrubHorizontal, scrubVertical } from '../../animations'

const QuoteBanner = () => {
  let hawkImg2 = useRef(null)
  let textBlock = useRef(null)
  useEffect(() => {
    scrubHorizontal(hawkImg2, 3, -500)
    scrubVertical(textBlock, 4, -200)
  }, [])
  return (
    <div className="banner">
      <div className="bg-container"></div>
      <div ref={(node) => (hawkImg2 = node)} className="img-container">
        <Image src="/images/hawk-2.png" width="250px" height="150px" />
      </div>
      <div ref={(node) => (textBlock = node)} className="txt-container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          libero illum exercitationem, vero nihil quisquam enim beatae nam
          deleniti, consequatur nemo molestiae tempora impedit optio est fugit.
          Voluptas, ad delectus?
        </p>
      </div>
    </div>
  )
}

export default QuoteBanner
