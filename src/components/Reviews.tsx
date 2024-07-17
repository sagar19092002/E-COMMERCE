import React, { FC } from 'react';

interface ReviewProps {
  props: { [key: string]: number };
}

export const Reviews: FC<ReviewProps> = ({ props }) => {
  return (
    <div>
      <div>
        <h1>Reviews</h1>
        <div className='text-black flex'>&#9733; &#9733;&#9733;&#9733;&#9733;</div>
      </div>
      {Object.entries(props).map(([key, value]) => (
        <div key={key} className='flex '>
          <div className='ml-2'>{key}:{value}</div>
        </div>
      ))}
    </div>
  );
}

