import React,{FC} from 'react';
import SideIcon from '../../public/Side.svg';
import HeartIcon from '../../public/Heart.svg';
import Image from 'next/image';
import Quantity from '@/components/Quantity';
import Button from '../components/Button';


import Image1 from '../../public/image copy.png';
import Image2 from '../../public/image copy 2.png';
import Image3 from '../../public/image copy 3.png';
import Image4 from '../../public/image copy 4.png';



const individualProduct=()=>{
    return (
    <div>
        <div>
          <div>
              {/* grid */}
          </div>
        </div>
        <div>
            <div>
                <div><h1>Men's Winter Jacket</h1></div>
                <div><Image src={HeartIcon} alt="Error"/></div>
                <div><Image src={SideIcon} alt="Error"/></div>
            </div>
            <div>
                <div></div>
                <div></div>
            </div>
            <div>
                Revamp your style with the latest designer trends in men's clothing or achieve a perfectly curated wardrobe thanks to our line-up of timeless pieces.
            </div>
            <div>
                {/* {color pcker} */}
            </div>
            <div>
                {/* {size picker} */}
            </div>
            <div>Size and Fit Guide</div>
            <div>Height of model: 189 cm./6'2" Size 41</div>
            <div>Quantity</div>
            <div>
                {/* {Button and quantity} */}
                <Button buttonName="Add to Cart-$250" className="w-350px h-50px" />
                <Quantity/>

            </div>
            <div>
                <div>
                    Free standard and shipping
                </div>
                <div>
                    Free Returns
                </div>
            </div>
        </div>
    </div>
    )
}

export default individualProduct;
