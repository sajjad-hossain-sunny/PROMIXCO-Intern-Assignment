import Image from 'next/image'
import React, { FC } from 'react'
import SliderCard from './SliderCard'

type Props = {}

const Testimonial: FC<Props> = () => {
   return (
      <section className="pb-[187px] pt-102">
         <div className='container'>
            <main className='px-5 w-full max-w-[927px] mx-auto text-center mb-10'>
               <h2 className='text-3.5xl md:text-5xl mb-5'>
                  What our food lovers said
               </h2>
               <p className='mb-14'>
                  In the artist&apos;s own experience, of course, art is
                  fundamentally indefinable, unsayable; there is something
                  sacred about its demands upon the soul, something inherently
                  mysterious in the forms it takes
               </p>
               <SliderCard />
            </main>
            <div className='flex flex-wrap items-center justify-center gap-5 md:gap-10'>
               <Image
                  className="w-[108px]"
                  src="/partners/logo1.png"
                  alt='food image'
                  width={600}
                  height={600}
               />
               <Image
                  className="w-[108px]"
                  src="/partners/logo 2.png"
                  alt='food image'
                  width={600}
                  height={600}
               />
               <Image
                  className="w-[108px]"
                  src="/partners/logo 3.png"
                  alt='food image'
                  width={600}
                  height={600}
               />
               <Image
                  className="w-[108px]"
                  src="/partners/logo 4.png"
                  alt='food image'
                  width={600}
                  height={600}
               />
               <Image
                  className="w-[108px]"
                  src="/partners/logo 5.png"
                  alt='food image'
                  width={600}
                  height={600}
               />
            </div>
         </div>
      </section>
   )
}

export default Testimonial