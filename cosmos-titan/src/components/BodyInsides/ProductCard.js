import React from 'react'
import Card from '../UI/Card'
import mattress from '../../assets/ProductPhotos/mattress.jpg'
const ProductCard = () => {
  return (
    <div>
        <Card className='ProductCard'>
            <Card className='ProductPhoto'> <img src={mattress} alt='#'></img></Card>
            <Card>
                Price:2000Rs
                Add to Cart
            </Card>
        </Card>    
    </div>
  );
}

export default ProductCard