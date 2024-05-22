import Curves from '@/app/core/Curves/Curves'
import Link from 'next/link'
import React, { FC } from 'react'

type Props = {}

const CTA: FC<Props> = () => {
   return (
      <section className='container'>
         <main className='relative bg-primary-300 rounded-2xl overflow-hidden px-5 sm:px-24 py-14 dark:bg-pink-900'>
            <div className='absolute top-0 left-0'>
               <Curves variant='outline' className='w-8/12 sm:size-full' />
            </div>
            <div className='absolute bottom-0 right-0'>
               <Curves variant='default' className='size-full sm:h-96' />
            </div>
            <h2 className='mb-5 lg:mb-9 font-light text-4xl sm:text-5xl md:max-w-2xl md:text-balance text-white'>
               Food Delivery helps you bring food to your front door
            </h2>
            <div className='relative z-50 flex items-center  xs:gap-7'>
               <button className='text-lg md:text-21 font-semibold text-white py-2 md:py-4 px-25 bg-black rounded-40 duration-300 hover:bg-white hover:text-primary-900' type="button">Download our App</button>

               <Link
                  href={'#'}
                  className='font-semibold text-sm text-white p-4'
               >
                  Browse food
               </Link>
            </div>
         </main>
      </section>
   )
}

export default CTA