import React, { FC } from 'react'
import { GrLocation } from "react-icons/gr";

interface IProps { }

const Banner: FC<IProps> = () => {

   return (
      <>
         <section className='flex bg-bannerImg bg-no-repeat bg-center bg-cover px-2.5 pt-145 pb-188 flex-col items-center'>
            <h1 className="w-full text-white text-4xl md:text-56 tracking-0.4 mb-11 text-center">Your favorite food, delivered to you</h1>
            <form className='w-full lg:w-815 bg-white rounded-30 overflow-hidden flex text-sm md:text-lg font-semibold tracking-0.3'>

               <label htmlFor="input" className="flex items-center px-1.5 py-2.5 md:pt-18 md:pr-3.5 md:pb-3.5 md:pl-22 relative before:absolute before:contents-['*'] before:w-1 before:h-10 before:right-0 before:top-1/2 before:-translate-y-1/2 before:bg-[#C5CBD1]">
                  <span className="text-lg md:text-2xl text-primary-900"><GrLocation /></span>
                  <span className="ml-2 md:ml-2.5 w-16 md:w-102">New York</span>
               </label>

               <input
                  className='w-full focus:outline-0 px-2 font-medium'
                  id='input'
                  type="text"
               />
               <button
                  className='bg-primary-900 md:pl-10 px-2.5 md:pr-38 text-white'
                  type="button"
               >Search</button>
            </form>
         </section>
      </>
   )
}

export default Banner