import React from 'react'
//import productimg from "../../asset/image/chair1.jpg";
import {motion} from 'framer-motion';
import '../../style/productcart.css';
//src\style\productcart.css
import {Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import {  toast } from 'react-toastify';

import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slices/cartSlice';
const ProductCard = ({item}) => {
const dispatch = useDispatch()
const addToCart =()=>{
  dispatch(cartActions.addItem({
    id: item.id,
    productName: item.productName,
    price: item.price,
    imgUrl: item.imgUrl

  })
);
toast.success("product added successfully");
};
  return (
 <Col lg='3' md='4' className="mb-2"> 
 <div className="product_item">
 <div className="product_img">
     <motion.img whileHover={{scale:0.9}}src={item.imgUrl} alt=""/>
 </div>
 <div className='p-2 product__info'>
    <h3 className="product__name">
      <Link to={`/shop/${item.id}`}>{item.productName}</Link>
    </h3>
 <span>{item.category}</span>
 </div>
 <div className="product_card-bottom d-flex align-items-center justify-content-between p-2">
     <span className='Price'>₹{item.price}</span>
     <motion.span 
  whileTap={{ scale: 1.1 }} 
  style={{ display: 'inline-flex', alignItems: 'center' }} onClick={addToCart}>
  <i className="ri-add-line"></i>
</motion.span>


 </div>
</div>
</Col>
  )
}

export default ProductCard