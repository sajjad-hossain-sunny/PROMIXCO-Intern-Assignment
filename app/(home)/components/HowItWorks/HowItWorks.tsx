import React, { FC } from 'react'
import WorksCard from './WorksCard'

type Props = {}

const HowItWorks: FC<Props> = () => {
   return (
      <section className='container py-40'>
         <main className='max-w-4xl mx-auto text-center'>
            <h2 className='text-5xl mb-12'>How it works</h2>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center gap-8 overflow-b-hidden'>
               <WorksCard title="Order via App" source="/howItWorksIcons/app.png" />
               <WorksCard title="Choose your food" source="/howItWorksIcons/food.png" />
               <WorksCard title="Enjoy!" source="/howItWorksIcons/enjoy.png" />
            </div>
         </main>
      </section>
   )
}

export default HowItWorks