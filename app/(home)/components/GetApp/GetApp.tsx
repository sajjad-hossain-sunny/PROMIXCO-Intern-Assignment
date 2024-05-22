import { CustomImage } from '@/app/core'
import React, { FC } from 'react'


type Props = {}

const GetApp: FC<Props> = () => {
   return (
      <>
         <section className='py-16 md:pt-124 md:pb-125'>
            <div className="container grid grid-cols-12 gap-4">
               <div className="col-span-12 lg:col-span-7 flex justify-center">
                  <CustomImage source="/Images.png" alt="Images.png" className="w-full md:w-580" />
               </div>

               <div className="col-span-12 lg:col-span-4 tracking-0.3 flex flex-col justify-center items-center lg:items-start">
                  <h3 className="text-4xl md:text-5xl leading-[55px] md:leading-[64px] tracking-0.3">Take a taste, come join us. Life is so endlessly delicious</h3>
                  <p className="text-base leading-6 mt-31 mb-34">In the artist&apos;s own experience, of course, art is fundamentally indefinable, unsayable; there is something sacred about its demands upon the soul, something inherently mysterious in the forms it takes</p>
                  <button className='text-lg md:text-21 font-semibold text-white border border-solid border-primary-900 py-2 md:py-4 px-25 bg-primary-900 rounded-40 duration-300 hover:bg-white hover:text-primary-900' type="button">Download our App</button>
               </div>
            </div>
         </section>
      </>
   )
}

export default GetApp