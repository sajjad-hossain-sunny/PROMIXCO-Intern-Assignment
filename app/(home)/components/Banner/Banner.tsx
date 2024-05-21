"use client";
import React, { FC, useEffect, useState } from 'react'

interface Location {
   latitude: number | null;
   longitude: number | null;
}

const Banner: FC<Location> = () => {

   const [location, setLocation] = useState<Location>({ latitude: null, longitude: null });
   const [city, setCity] = useState<string>('');

   useEffect(() => {
      if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(
            (position) => {
               setLocation({
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
               });
            },
            (error) => {
               console.error("Error getting location: ", error);
            }
         );
      } else {
         console.error("Geolocation is not supported by this browser.");
      }
   }, []);

   useEffect(() => {
      if (location.latitude !== null && location.longitude !== null) {
         fetchCity(location.latitude, location.longitude);
      }
   }, [location]);

   const fetchCity = async (latitude: number, longitude: number) => {
      try {
         const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
         const data = await response.json();
         if (data.address && (data.address.city || data.address.town || data.address.village)) {
            setCity(data.address.city || data.address.town || data.address.village);
         } else {
            console.error("City name not found in the response");
         }
      } catch (error) {
         console.error("Error fetching city: ", error);
      }
   };

   return (
      <>
         <section className='bg-bannerImg bg-no-repeat bg-center bg-cover pt-145 pb-188 flex flex-col items-center'>
            <h1 className="text-white text-56 tracking-0.4 mb-11">Your favorite food, delivered to you</h1>
            <form className='w-815 bg-white rounded-30 overflow-hidden flex text-lg font-semibold tracking-0.3 font-jost'>

               <label htmlFor="input" className="flex items-center pt-18 pr-3.5 pb-3.5 pl-22 relative before:absolute before:contents-['*'] before:w-1 before:h-10 before:right-0 before:top-1/2 before:-translate-y-1/2 before:bg-[#C5CBD1]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fillRule="evenodd" clipRule="evenodd" d="M12 22.17C11.232 22.17 10.464 21.878 9.87901 21.293L5.63601 17.05C3.72901 15.143 2.78301 12.508 3.04101 9.81999C3.30001 7.13299 4.75301 4.71099 7.02901 3.17599C10.003 1.17099 13.998 1.17099 16.971 3.17599C19.247 4.71199 20.7 7.13299 20.959 9.81999C21.217 12.508 20.271 15.143 18.364 17.05L14.121 21.293C13.536 21.878 12.768 22.17 12 22.17ZM12 3.66799C10.65 3.66799 9.3 4.05599 8.14701 4.83399C6.36901 6.03399 5.23301 7.92099 5.03201 10.012C4.83101 12.103 5.56601 14.153 7.05 15.637L11.293 19.88C11.671 20.257 12.329 20.257 12.707 19.88L16.95 15.637C18.433 14.154 19.169 12.103 18.968 10.012C18.767 7.92199 17.632 6.03399 15.853 4.83399C14.7 4.05699 13.35 3.66799 12 3.66799ZM12 14C9.79401 14 8.00001 12.206 8.00001 9.99999C8.00001 7.79399 9.79401 5.99999 12 5.99999C14.206 5.99999 16 7.79399 16 9.99999C16 12.206 14.206 14 12 14ZM12 7.99999C10.897 7.99999 10 8.89699 10 9.99999C10 11.103 10.897 12 12 12C13.103 12 14 11.103 14 9.99999C14 8.89699 13.103 7.99999 12 7.99999Z" fill="#FF6A90" />
                  </svg>
                  <span className="ml-2.5 w-102">{city ? <p>{city}</p> : <p>Loading...</p>}</span>
               </label>

               <input
                  className='w-full focus:outline-0 px-2 font-medium'
                  id='input'
                  type="text"
               />
               <button
                  className='bg-primary-900 pl-10 pr-38 text-white'
                  type="button"
               >Search</button>
            </form>
         </section>
      </>
   )
}

export default Banner