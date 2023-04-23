import React, { useEffect } from 'react'
import Swiper from 'swiper'
import 'swiper/swiper.min.css'

const Card2: React.FC = () => {
  useEffect (() => {
    new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
  });
},[]);
  return (
    <div className="swiper-container mx-auto px-4 py-2">
      <div className="swiper-wrapper">
        <div className="swiper-slide rounded-lg overflow-hidden">
          <img className="w-full" src="../../color-7.jpg" alt="Slide 1" />
          <h2 className="text-lg font-bold text-white bg-blue-500 bg-opacity-75 p-2 absolute bottom-0 left-0 w-full">Slide 1</h2>
        </div>
        <div className="swiper-slide rounded-lg overflow-hidden">
          <img className="w-full" src="../../color-7.jpg" alt="Slide 2" />
          <h2 className="text-lg font-bold text-white bg-blue-500 bg-opacity-75 p-2 absolute bottom-0 left-0 w-full">Slide 2</h2>
        </div>
        <div className="swiper-slide rounded-lg overflow-hidden">
          <img className="w-full" src="../../color-7.jpg" alt="Slide 3" />
          <h2 className="text-lg font-bold text-white bg-blue-500 bg-opacity-75 p-2 absolute bottom-0 left-0 w-full">Slide 3</h2>
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </div>
  )
}

export default Card2
