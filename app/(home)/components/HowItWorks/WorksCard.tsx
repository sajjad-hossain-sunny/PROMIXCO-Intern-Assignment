import React, { FC } from 'react';
import Image from 'next/image';

interface IProps {
   source: string,
   title: string,
}

const WorksCard: FC<IProps> = ({ source, title }) => {
   return (
      <div className='px-7 py-10 max-w-72 w-full rounded-32 cursor-pointer worksCardCss'>
         <Image src={source} width={600} height={600} alt='icon' className="w-24 mx-auto" />
         <h2 className='font-semibold text-lg text-primary-900 mt-5 mb-4'>
            {title}
         </h2>
         <p className='text-sm'>In the artist&apos;s own experience, of course, art is fundamentally indefinable, unsayable; there is something sacred about its demands</p>
      </div>
   )
}

export default WorksCard