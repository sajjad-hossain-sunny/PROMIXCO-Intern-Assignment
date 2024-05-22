'use client';
import React from 'react';
import Image from 'next/image';
import useSlider from '@/app/hooks/useSlider';
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const SliderCard = () => {
   const { scrollNext, scrollPrev, settings, sliderRef, Slider } = useSlider();
   return (
      <div className="w-max mx-auto relative">
         <div className='size-full max-w-[38rem] max-h-[21.5rem] mx-auto rounded-32 overflow-hidden'>
            <Slider
               ref={sliderRef}
               {...settings}
               className='h-80 rounded-4xl overflow-clip'
            >
               <div
                  className='relative after:absolute after:inset-0 after:bg-black/50 -z-10'
               >
                  <Image
                     src='/slider.png'
                     alt='testimonial-image'
                     className='w-full object-cover block'
                     width={600}
                     height={600}
                  />
                  <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-full max-w-sm px-3'>
                     <div className="w-20 h-20 rounded-full bg-slate-300 mx-auto overflow-hidden">
                        <Image
                           src='/slider.png'
                           alt='testimonial-image'
                           className='h-full object-cover block'
                           width={600}
                           height={600}
                        />
                     </div>
                     <h2 className='text-2xl font-semibold text-gray-50 my-4'>
                        In the artist&apos;s own experience, of course, art is fundamentally indefinable, unsayable
                     </h2>
                     <p className='text-primary-900 text-lg font-bold'>
                        Tim Oliver, ordered Burger Extracheese
                     </p>
                  </div>
               </div>
               <div
                  className='relative after:absolute after:inset-0 after:bg-black/50 -z-10'
               >
                  <Image
                     src='/slider.png'
                     alt='testimonial-image'
                     className='w-full object-cover block'
                     width={600}
                     height={600}
                  />
                  <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-full max-w-sm px-3'>
                     <div className="w-20 h-20 rounded-full bg-slate-300 mx-auto overflow-hidden">
                        <Image
                           src='/slider.png'
                           alt='testimonial-image'
                           className='h-full object-cover block'
                           width={600}
                           height={600}
                        />
                     </div>
                     <h2 className='text-2xl font-semibold text-gray-50 my-4'>
                        In the artist&apos;s own experience, of course, art is fundamentally indefinable, unsayable
                     </h2>
                     <p className='text-primary-900 text-lg font-bold'>
                        Tim Oliver, ordered Burger Extracheese
                     </p>
                  </div>
               </div>
               <div
                  className='relative after:absolute after:inset-0 after:bg-black/50 -z-10'
               >
                  <Image
                     src='/slider.png'
                     alt='testimonial-image'
                     className='w-full object-cover block'
                     width={600}
                     height={600}
                  />
                  <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-full max-w-sm px-3'>
                     <div className="w-20 h-20 rounded-full bg-slate-300 mx-auto overflow-hidden">
                        <Image
                           src='/slider.png'
                           alt='testimonial-image'
                           className='h-full object-cover block'
                           width={600}
                           height={600}
                        />
                     </div>
                     <h2 className='text-2xl font-semibold text-gray-50 my-4'>
                        In the artist&apos;s own experience, of course, art is fundamentally indefinable, unsayable
                     </h2>
                     <p className='text-primary-900 text-lg font-bold'>
                        Tim Oliver, ordered Burger Extracheese
                     </p>
                  </div>
               </div>
            </Slider>
         </div>
         <button
            className='p-4 hidden md:block absolute top-1/2 -left-12 -translate-y-1/2  cursor-pointer'
            onClick={scrollPrev}
            aria-label='Scroll to previous'
         >
            <MdNavigateBefore className='text-xl' />
         </button>
         <button
            className='p-4 hidden md:block absolute top-1/2 -translate-y-1/2 -right-12 rotate-180 cursor-pointer'
            onClick={scrollNext}
            aria-label='Scroll to next'
         >
            <MdNavigateBefore className='text-xl' />
         </button>
      </div>
   );
};

export default SliderCard;