import React from 'react'

const Welcome2: React.FC = () => {
  return (
    <section className="bg-center bg-cover bg-no-repeat bg-gray-700 bg-blend-overlay" style={{ backgroundImage: "url('./chantal.jpg')"}}>
    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="hover:transform hover:scale-110 transition duration-500 ease-in-out font-mono mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Welcome to Paintings By Chantal Webpage!</h1>
        <p className="hover:transform hover:scale-110 transition duration-500 ease-in-out font-mono mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">I'm an artist and entrepreneur.</p>
    </div>
</section>
  )
}

export default Welcome2;