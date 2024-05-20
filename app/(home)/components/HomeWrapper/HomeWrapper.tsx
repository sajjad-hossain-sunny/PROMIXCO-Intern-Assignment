import Navbar from '@/core/Navbar/Navbar'
import Link from 'next/link'
import React, { FC } from 'react'

interface IProps { }

const HomeWrapper: FC<IProps> = () => {
  return (
    <>
      <header className='pt-6 pb-7'>
        <div className="container flex justify-between items-center">
          <Link
            className="text-32 font-extrabold text-primary-900 tracking-[0.3px] font-jost select-none"
            href="/"
          >FoodDelivery</Link>

          <Link
            className="text-lg font-semibold tracking-[0.3px] font-jost"
            href="/sign-in"
          >sign in</Link>
        </div>
      </header>

      <section className='bg-bannerImg backgroundImg pt-145 pb-188 flex flex-col items-center'>
        <h1 className="">Your favorite food, delivered to you</h1>
        <form>
          <input type="text" placeholder='Enter your location' />
          <button>Search</button>
        </form>
      </section>
    </>
  )
}

export default HomeWrapper