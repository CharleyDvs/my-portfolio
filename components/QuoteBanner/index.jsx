import React from 'react'
import Image from 'next/image'

import EnterWhenVisible from '../../hoc/EnterWhenVisible'
import MoveWhenVisible from '../../hoc/MoveWhenVisible'

const QuoteBanner = () => {
  return (
    <div className="banner">
      <div className="bg-container"></div>
      <div className="img-container">
        <MoveWhenVisible>
          <Image src="/images/hawk-2.png" width="250px" height="150px" />
        </MoveWhenVisible>
      </div>
      <div className="txt-container">
        <EnterWhenVisible>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            libero illum exercitationem, vero nihil quisquam enim beatae nam
            deleniti, consequatur nemo molestiae tempora impedit optio est
            fugit. Voluptas, ad delectus?
          </p>
        </EnterWhenVisible>
      </div>
    </div>
  )
}

export default QuoteBanner
