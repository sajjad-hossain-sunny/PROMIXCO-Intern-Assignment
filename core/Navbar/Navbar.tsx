import Link from 'next/link'
import React, { FC } from 'react'

interface IProps { }

const Navbar: FC<IProps> = () => {
  return (
    <>
      <nav className="w-full">
        <Link
          className="text-32 font-extrabold text-primary-900 tracking-[0.3px] font-jost"
          href="/sunny"
        >FoodDelivery</Link>

        <Link href="#">Sign in</Link>
      </nav>
    </>
  )
}

export default Navbar