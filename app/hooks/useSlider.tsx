'use client';
import { RefObject, useCallback, useRef } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const useSlider = () => {
   const settings: Settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2500,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
   };
   const sliderRef: RefObject<Slider> = useRef<Slider>(null);
   const scrollNext = useCallback(() => {
      if (sliderRef.current) {
         sliderRef.current.slickNext();
      }
   }, [sliderRef]);
   const scrollPrev = useCallback(() => {
      if (sliderRef.current) {
         sliderRef.current.slickPrev();
      }
   }, [sliderRef]);
   return { sliderRef, scrollNext, scrollPrev, settings, Slider };
};

export default useSlider;