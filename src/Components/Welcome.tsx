import React from "react";

const Welcome: React.FC = () => {
  return (
    <div
      className="bg-center md:h-screen bg-blend-multiply"
      style={{
        backgroundImage: "url('../../chantal-pic.jpg')",
        backgroundSize: "50%",
      }}
    >
      <div className="flex flex-col items-center justify-center h-full bg-gray-900 bg-opacity-50">
        <h1 className="hover:transform hover:scale-110 transition duration-500 ease-in-out font-mono text-6xl font-bold mb-4 text-white text-center">
          Welcome to Paintings By Chantal Webpage!
        </h1>
        <p className="hover:transform hover:scale-110 transition duration-500 ease-in-out font-mono text-4xlg text-gray-300 text-center">
          I'm an artist and entrepreneur.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
