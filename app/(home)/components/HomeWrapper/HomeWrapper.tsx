import React, { FC } from 'react'
import { Banner, CTA, GetApp, HowItWorks, PopularAreas, Testimonial } from '../../components';
import Footer from '@/app/core/Footer/Footer';

interface Props { }

const HomeWrapper: FC<Props> = () => {
  return (
    <>
      <Banner />
      <GetApp />
      <PopularAreas />
      <HowItWorks />
      <CTA />
      <Testimonial />
    </>
  )
}

export default HomeWrapper