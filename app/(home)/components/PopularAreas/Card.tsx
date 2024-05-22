import Image from 'next/image'
import React, { FC } from 'react'
import { FaRegClock } from "react-icons/fa";

type IProps = {
   importantClass: string,
   className: string,
   title: string,
   fee: string,
   source: string,
   min: number,
   max: number,
};

const Card: FC<IProps> = ({ ...props }) => {
   const {
      importantClass,
      className,
      title,
      fee,
      source,
      min,
      max
   } = props;
   return (
      <section className={`h-fit row-span-2 grid-span-1 ${importantClass}`}>
         <Image
            src={source}
            alt='card image'
            className={`size-full object-cover rounded-xl sm:rounded-4xl mb-4 ${className}`}
            width={600}
            height={600}
         />
         <h3 className='text-2xl '>{title}</h3>
         <div className='flex items-center justify-between text-sm md:text-lg'>
            <span className='inline-flex items-center gap-2'>
               <svg
                  width='16'
                  height='14'
                  viewBox='0 0 16 14'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
               >
                  <path
                     fillRule='evenodd'
                     clipRule='evenodd'
                     d='M10.25 0.25H7.25V1.75H8V2.5C6.311 2.5 4.8155 3.3145 3.836 4.75H2V6.25H4.68275L4.8995 5.87575C5.59925 4.666 6.70025 4 8 4H9.5C11.5677 4 13.25 5.68225 13.25 7.75V9.25H2V10.75H14.75V7.75C14.75 4.85575 12.395 2.5 9.5 2.5V1.75H10.25V0.25ZM1.25 12.25H15.5V13.75H1.25V12.25ZM0.5 7H7.25V8.5H0.5V7Z'
                     fill='currentColor'
                  />
               </svg>$ {fee} Delivery Fee
            </span>
            <span className='inline-flex items-center gap-2'>
               <FaRegClock />{min} - {max} mins
            </span>
         </div>
      </section>
   )
}

export default Card