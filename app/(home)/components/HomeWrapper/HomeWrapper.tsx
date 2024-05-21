import React, { FC } from 'react'
import { Banner, GetApp } from '../../components';
import { CustomImage, Navbar } from '@/core';

interface Props { }

const HomeWrapper: FC<Props> = () => {
  return (
    <>
      <Banner latitude={null} longitude={null} />
      <GetApp />
    </>
  )
}

export default HomeWrapper