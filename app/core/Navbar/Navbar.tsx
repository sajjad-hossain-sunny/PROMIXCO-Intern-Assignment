import Link from 'next/link'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
   return (
      <>
         <nav className='pt-6 pb-7'>
            <div className="container flex justify-between items-center">
               <Link
                  className="text-32 font-extrabold text-primary-900 tracking-0.3 select-none"
                  href="/"
               >FoodDelivery</Link>

               <Link
                  className="text-lg font-semibold tracking-0.3 capitalize"
                  href="/sign-in"
               >sign in</Link>
            </div>
         </nav>
      </>
   )
}

export default Navbar