import React from 'react'
import Image from 'next/image'

const QuoteBanner = () => {
  return (
    <div className="banner">
      <div className="bg-container"></div>
      <div className="img-container">
        <Image src="/images/hawk-2.png" width="250px" height="150px" />
      </div>
      <div className="txt-container">
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
