
import Link from 'next/link';
import { ReactNode } from 'react';
import Image from 'next/image';

const Footer = () => {
   return (
      <footer className='space-y-4 sm:space-y-9 relative'>
         <nav className='container'>
            <section className='flex max-xs:flex-col items-center max-lg:justify-between gap-2 lg:gap-40'>
               <Link
                  className="text-32 font-extrabold text-primary-900 tracking-0.3 select-none"
                  href="/"
               >FoodDelivery</Link>
               <ul className='flex items-center gap-5 md:gap-11 font-semibold text-sm sm:text-lg'>
                  <li
                     className='cursor-pointer'
                  >Partners
                  </li>
                  <li
                     className='cursor-pointer'
                  >About Us
                  </li>
                  <li
                     className='cursor-pointer'
                  >Privacy Policy
                  </li>
                  <li
                     className='cursor-pointer'
                  >Contact us
                  </li>
               </ul>
            </section>
         </nav>
         <section className='bg-[#F8F9FA]'>
            <div className='container'>
               <div className='flex max-lg:justify-between gap-5 lg:gap-56 py-8 sm:py-11 relative'>
                  <ul>
                     <li className='text-xs xs:text-sm'>
                        123 Lorem Ipsum Street Tangerang, Banten
                     </li>
                     <li className='text-xs xs:text-sm mt-5'>
                        +10 - 234 - 5678
                     </li>
                  </ul>
                  <div className='flex flex-wrap gap-3 sm:gap-10'>
                     <ul>
                        <li className='text-xs xs:text-sm'>
                           All Restaurant
                        </li>
                        <li className='text-xs xs:text-sm mt-2'>
                           Best Sellers
                        </li>
                        <li className='text-xs xs:text-sm mt-2'>
                           Top Rated
                        </li>
                        <li className='text-xs xs:text-sm mt-2'>
                           Newcomers
                        </li>
                     </ul>
                     <ul>
                        <li className='text-xs xs:text-sm'>
                           FAQ
                        </li>
                        <li className='text-xs xs:text-sm mt-2'>
                           Join our program
                        </li>
                        <li className='text-xs xs:text-sm mt-2'>
                           Be our partners
                        </li>
                        <li className='text-xs xs:text-sm mt-2'>
                           Terms & Condition
                        </li>
                     </ul>
                     <ul>
                        <li className='text-xs xs:text-sm'>
                           Our Parent Company
                        </li>
                        <li className='text-xs xs:text-sm mt-2'>
                           Make an investment
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className=' hidden lg:block absolute bottom-0 right-0 '>
               <Image
                  src={'/footerShape.png'}
                  alt='shape'
                  width={0}
                  height={0}
                  unoptimized
                  className='lg:w-[400px] xl:w-full xl:max-w-screen-xs h-full'
               />
            </div>
         </section>
      </footer>
   );
};

export default Footer;