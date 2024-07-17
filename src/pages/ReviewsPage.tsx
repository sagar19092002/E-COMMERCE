import React,{FC} from 'react'
import NavBar from '../components/NavBar';

const ReviewsPage = () => {
  return (
    <div>
      <NavBar/>
      <div>
        <div className='w-[70%] h-full'>
            <div>
                <div>Reviews</div>
                <div>&#9733; &#9733; &#9733; &#9733; &#9733;</div>
                <div>5 reviews</div>
                <div>
                    <div>5 Stars </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewsPage;
