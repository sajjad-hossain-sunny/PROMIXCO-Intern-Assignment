import { CustomImage } from '@/app/core'
import React, { FC } from 'react'


type Props = {}

const GetApp: FC<Props> = () => {
   return (
      <>
         <section className='pt-124 pb-125'>
            <div className="container grid grid-cols-12 gap-4">
               <div className="col-span-7 relative flex justify-center">
                  <CustomImage source="/Ornament-1.png" alt="Ornament-1.png" className="w-580" />
                  <CustomImage source="/Ornament.png" alt="Ornament.png" className="w-439 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  <CustomImage source="/Ornament-2.png" alt="Ornament-2.png" className="w-[360px] absolute bottom-2 right-20" />
               </div>

               <div className="col-span-4 font-jost tracking-0.3 flex flex-col justify-center">
                  <h3 className="text-5xl leading-[64px] tracking-0.3">Take a taste, come join us. Life is so endlessly delicious</h3>
                  <p className="text-base leading-6 mt-31 mb-34">In the artist&apos;s own experience, of course, art is fundamentally indefinable, unsayable; there is something sacred about its demands upon the soul, something inherently mysterious in the forms it takes</p>
                  <button className='text-21 font-semibold text-white border border-solid border-primary-900 py-4 px-25 bg-primary-900 rounded-40 duration-300 hover:bg-white hover:text-primary-900' type="button">Download our App</button>
               </div>
            </div>
         </section>
      </>
   )
}

export default GetApp