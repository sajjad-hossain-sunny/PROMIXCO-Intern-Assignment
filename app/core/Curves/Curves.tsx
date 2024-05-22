import React, { SVGProps } from 'react';
interface IProps extends SVGProps<SVGSVGElement> {
   variant: 'default' | 'outline';
}
const Curves = (props: IProps) => {
   return props.variant === 'default' ? (
      <svg
         {...props}
         viewBox='0 0 652 341'
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
      >
         <path
            fillRule='evenodd'
            clipRule='evenodd'
            className='fill-[#FF487F] dark:fill-primary-300'
            d='M828.6 406.512C790.37 235.651 630.168 62.7061 516.303 254.32C488.733 300.713 439.718 330.455 385.758 333.619C277.64 339.959 163.007 287.344 106.069 468.013C73.7764 968.744 888.561 985.957 828.6 406.512Z'
         />
      </svg>
   ) : (
      <svg
         {...props}
         width='553'
         height='360'
         viewBox='0 0 553 360'
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
      >
         <g className='mix-blend-multiply dark:mix-blend-normal'>
            <path
               fillRule='evenodd'
               clipRule='evenodd'
               className='stroke-[#FF6A90] dark:stroke-primary-300'
               d='M-145.67 72.4004C-113.455 216.445 21.5792 362.238 117.579 200.686C140.824 161.571 182.145 136.493 227.633 133.821C318.774 128.469 415.404 172.818 463.415 20.4972C490.674 -401.655 -196.173 -416.106 -145.67 72.4004Z'
            />
         </g>
      </svg>
   );
};

export default Curves;