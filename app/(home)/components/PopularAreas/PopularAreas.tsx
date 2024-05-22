import Link from 'next/link'
import React, { FC } from 'react'
import { Card } from '.'
import { FaArrowRight } from "react-icons/fa";

interface IProps { }

const PopularAreas: FC<IProps> = () => {
   return (
      <section className='container'>
         <div className='flex items-center justify-between mb-4 sm:mb-7'>
            <span className='text-2xl xs:text-3xl sm:text-3.5xl'>
               Popular on New York area
            </span>
            <Link
               href='#'
               className='inline-flex items-center gap-1 font-semibold text-xs xs:text-sm sm:text-lg'
            >
               View all
               <FaArrowRight className='size-4 xs:size-5' />
            </Link>
         </div>
         <main className='size-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-x-6 gap-y-7 sm:gap-y-10'>
            <Card importantClass="" className="" title="Restaurant Name" fee="9.99" source="/PopularAreas/Photo.png" min={10} max={15} />
            <Card importantClass="!row-span-1" className="!max-h-[240px]" title="Restaurant Name" fee="9.99" source="/PopularAreas/Photo-1.png" min={10} max={15} />
            <Card importantClass="!row-span-1" className="!max-h-[240px]" title="Restaurant Name" fee="9.99" source="/PopularAreas/Photo-2.png" min={10} max={15} />
            <Card importantClass="!row-span-1" className="!max-h-[240px]" title="Restaurant Name" fee="9.99" source="/PopularAreas/Photo-3.png" min={10} max={15} />
            <Card importantClass="!row-span-1" className="!max-h-[240px]" title="Restaurant Name" fee="9.99" source="/PopularAreas/Photo-4.png" min={10} max={15} />
         </main>
      </section>
   )
}

export default PopularAreas