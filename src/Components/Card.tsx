import React from 'react'

const Card: React.FC = () => {
  return (

<div>
    <h2 className="hover:transform hover:scale-110 transition duration-500 ease-in-out font-mono text-2xl font-bold mt-20 mb-10 text-center">Oil Paintings Gallery</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
            <div>
                <img className="h-auto max-w-full rounded-lg" src="./IMG-6350.JPG" alt=""/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src="./IMG-5390.jpg" alt=""/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src="./color-6.JPEG" alt=""/>
            </div>
        </div>
        <div className="grid gap-4">
            <div>
                <img className="h-auto max-w-full rounded-lg" src="./color-10.jpg" alt=""/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src="./color-4.jpg" alt=""/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src="./color-5.jpg" alt=""/>
            </div>
        </div>
        <div className="grid gap-4">
            <div>
                <img className="h-auto max-w-full rounded-lg" src="./color-8.JPEG" alt=""/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src="./IMG-5268.jpg" alt=""/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src="./IMG-20190202.JPEG" alt=""/>
            </div>
        </div>
        <div className="grid gap-4">
            <div>
                <img className="h-auto max-w-full rounded-lg" src="./color-7.jpg" alt=""/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src="./IMG-3911.jpg" alt=""/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src="./IMG-1522.jpg" alt=""/>
            </div>
        </div>
    </div>
</div>

  )
}
export default Card