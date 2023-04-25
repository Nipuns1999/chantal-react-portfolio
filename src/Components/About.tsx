import React from 'react'

const About: React.FC = () => {
  return (
    <div className="bg-white py-8">
    <div className="container mx-auto px-4 flex flex-col items-center">
      <h2 className="hover:transform hover:scale-110 transition duration-500 ease-in-out font-mono text-3xl font-bold mb-2">About Myself</h2>
      <img className="hover:transform hover:scale-110 transition duration-500 ease-in-out rounded-full h-60 my-8" src="./pro_pic.jpg"/>
      <p className="hover:transform hover:scale-110 transition duration-500 ease-in-out font-normal hover:font-semibold text-center font-mono">I started drawing when I was about three years old and over the years, I have learnt various styles and worked with different mediums. I started my Instagram page ‘Paintings by Chantal’ in 2017, and it has been an amazing journey. Celebrating 5 years as an entrepreneur was truly a milestone. So far, I have done over 300 pencil portraits and almost 50 oil paintings.</p>
    </div>
  </div>
  )
}

export default About
