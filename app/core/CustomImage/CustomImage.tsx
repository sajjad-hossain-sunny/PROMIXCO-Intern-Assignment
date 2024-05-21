import React, { FC } from 'react'
import Image from 'next/image';

interface IProps {
   source: string,
   alt: string,
   className?: string,
}

const CustomImage: FC<IProps> = ({ source, alt, className }) => {
   return (
      <>
         <Image
            src={source}
            alt={alt}
            quality={100}
            className={className}
            width={600}
            height={600}
         />
      </>
   )
}

export default CustomImage