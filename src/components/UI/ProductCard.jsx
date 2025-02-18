import React from 'react';
import { motion } from 'framer-motion';
import '../../style/productcart.css';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slices/cartSlice';
import { addToWishlist } from '../../redux/slices/wishlistSlice'; // Correct import

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id: item.id,
      productName: item.productName,
      price: item.price,
      imgUrl: item.imgUrl,
    }));
    toast.success("Product added to cart successfully");
  };

  const addToWishlistHandler = () => {
    dispatch(addToWishlist({ // Use addToWishlist directly
      id: item.id,
      productName: item.productName,
      price: item.price,
      imgUrl: item.imgUrl,
    }));
    toast.success("Product added to wishlist");
  };

  return (
    <Col lg='3' md='4' className="mb-2"> 
      <div className="product_item">
        <div className="product_img">
          <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
        </div>
        <div className='p-2 product__info'>
          <h3 className="product__name">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span>{item.category}</span>
        </div>
        <div className="product_card-bottom d-flex align-items-center justify-content-between p-2">
          <span className='Price'>₹{Number(item.price).toLocaleString('en-IN')}</span>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <motion.span 
              whileTap={{ scale: 1.1 }} 
              style={{ display: 'inline-flex', alignItems: 'center', marginRight: '10px' }} 
              onClick={addToCart}>
              <i className="ri-add-line"></i>
            </motion.span>
            <motion.span 
              whileTap={{ scale: 1.1 }} 
              style={{ display: 'inline-flex', alignItems: 'center' }} 
              onClick={addToWishlistHandler}>
              <i className="ri-heart-line"></i>
            </motion.span>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
