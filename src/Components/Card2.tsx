import React, {useEffect, useState} from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';



const Card2: React.FC = (props) => {

  const [ width, setWidth] = useState(window.innerWidth);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      url: './IMG-4597.jpg',
    },
    {
      url: './IMG-0175.jpg',
    },
    {
      url: './IMG-8148.jpg',
    },
    {
      url: './IMG-6937.jpg',
    },
    {
      url: './IMG-8228.jpg',
    },
    {
      url: './IMG-6453.jpg',
    },
    {
      url: './IMG-2891.jpg',
    },
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const largeScreen = (
    <div>
      <h2 className="hover:transform hover:scale-110 transition duration-500 ease-in-out font-mono text-2xl font-bold mt-20 mb-10 text-center">Pencil Sketches</h2>
      <div className='max-w-[700px] h-[960px] w-full m-auto py-16 px-4 relative group'>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})`, backgroundSize: '100%' }}
          className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        ></div>
        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer'
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
  
  const smallScreen = (
    <div>
      <h2 className="hover:transform hover:scale-110 transition duration-500 ease-in-out font-mono text-2xl font-bold mt-20 mb-10 text-center">Pencil Sketches</h2>
      <div className="grid gap-4">
          <div>
              <img className="h-auto max-w-full rounded-lg" src="./IMG-8469.jpg" alt=""/>
          </div>
          <div className="grid grid-cols-5 gap-4">
              <div>
                  <img className="h-auto max-w-full rounded-lg" src='./IMG-6937.jpg' alt=""/>
              </div>
              <div>
                  <img className="h-auto max-w-full rounded-lg" src='./IMG-4597.jpg' alt=""/>
              </div>
              <div>
                  <img className="h-auto max-w-full rounded-lg" src='./IMG-9378.jpg' alt=""/>
              </div>
              <div>
                  <img className="h-auto max-w-full rounded-lg" src='./IMG-8228.jpg' alt=""/>
              </div>
              <div>
                  <img className="h-auto max-w-full rounded-lg" src='./IMG-8148.jpg' alt=""/>
              </div>
          </div>
      </div>
    </div>
  )


  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  }, [width]);
  
  return (
    <div>
      {width < 640 ? smallScreen : largeScreen }
    </div>
  )
}

export default Card2
