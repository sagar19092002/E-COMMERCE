import React from 'react';

const HomePage = () => {
  return (
    <div>
      <div className="w-full h-[20%] bg-red-800 flex">
        <div className="w-1/2 h-full bg-red-800 flex items-center justify-center">
          Shop Men's
        </div>
        <div className="w-1/2 flex items-center">
          Revamp your style with the latest designer trends in men's clothing or achieve a perfectly curated wardrobe thanks to our line-up of timeless pieces.
        </div>
      </div>
      <div className="flex w-full h-full">
        <div className="w-[25%] bg-blue-600 flex flex-col">
          <div>First div</div>
          <div>Second div</div>
          <div>Third div</div>
          <div>Fourth div</div>
        </div>
        <div className="w-[75%] bg-green-500">
          Second div
        </div>
      </div>
    </div>
  )
}

export default HomePage;
