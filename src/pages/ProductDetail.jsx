import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import "../style/product_detail.css";
import products from '../asset/data/product';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { motion } from "framer-motion";
import ProductsList from '../components/UI/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../redux/slices/cartSlice';
import { addToWishlist, removeFromWishlist } from '../redux/slices/wishlistSlice';
import { toast } from 'react-toastify';

const ProductDetail = () => {
  const [tab, setTab] = useState('desc');
  const reviewUser = useRef('');
  const reviewMsg = useRef('');
  const dispatch = useDispatch();
  const [rating, setRating] = useState(null);
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  const product = products.find(item => item.id === id);
  const { imgUrl, productName, price, avgRating, description, shortDesc, category } = product;

  const wishlistItems = useSelector(state => state.wishlist.items);

  useEffect(() => {
    // Load reviews from local storage if available
    const storedReviews = JSON.parse(localStorage.getItem(`reviews-${id}`));
    if (storedReviews) {
      setReviews(storedReviews);
    }
  }, [id]);

  const submitHandler = (e) => {
    e.preventDefault();
    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    if (!reviewUserName || !reviewUserMsg || !rating) {
      alert("Please fill all fields and provide a rating.");
      return;
    }

    const newReview = {
      name: reviewUserName,
      rating,
      text: reviewUserMsg,
    };

    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    localStorage.setItem(`reviews-${id}`, JSON.stringify(updatedReviews)); // Save to local storage

    reviewUser.current.value = '';
    reviewMsg.current.value = '';
    setRating(null);
    toast.success('Review Submitted');
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        imgUrl,
        productName,
        price,
      })
    );
    toast.success("Product added successfully");
  };

  const toggleWishlistHandler = () => {
    const productExists = wishlistItems.find(item => item.id === id);
    if (productExists) {
      dispatch(removeFromWishlist(id)); // Remove from wishlist
      toast.success("Product removed from wishlist!");
    } else {
      dispatch(addToWishlist({
        id,
        imgUrl,
        productName,
        price,
      }));
      toast.success("Product added to wishlist!");
    }
  };

  const relatedProducts = products.filter(item => item.category === category);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  const isInWishlist = wishlistItems.some(item => item.id === id); // Check if product is in wishlist

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt={productName} className="img-fluid" />
            </Col>
            <Col lg="6">
              <div className="product__details">
                <h2>{productName}</h2>
                <div className='product__rating'>
                  <div>
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-half-fill"></i></span>
                  </div>
                  <span>{avgRating} ratings</span>
                </div>
                <div>
                  <p className='product__price'>Price: ₹{new Intl.NumberFormat('en-IN').format(price)}</p>
                  <p>Category: {category}</p>
                </div>
                <p className="mt-3">Short Description: {shortDesc}</p>

                {/* Action buttons container */}
                <div className="product__actions d-flex align-items-center gap-3">
                  <motion.button 
                    whileTap={{ scale: 1.2 }} 
                    className="buy__btn" 
                    onClick={addToCart}
                  >
                    Add to Cart
                  </motion.button>

                  {/* Wishlist Icon */}
                  <motion.i
                    whileTap={{ scale: 1.2 }}
                    className={`ri-heart-${isInWishlist ? 'fill' : 'line'} wishlist__icon ${isInWishlist ? 'liked' : ''}`}
                    onClick={toggleWishlistHandler}
                    style={{ cursor: 'pointer', fontSize: '24px' }}
                  ></motion.i>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h6 className={`${tab === 'desc' ? 'active__tab' : ''}`} onClick={() => setTab('desc')}>Description</h6>
                <h6 className={`${tab === 'rev' ? 'active__tab' : ''}`} onClick={() => setTab('rev')} >
                  Reviews ({reviews.length})
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tab__content mt-2">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product__review mt-2">
                  <div className='review__wrapper'>
                    <ul>
                      {reviews.map((item, index) => (
                        <li key={index} className='mb-4'>
                          <h6>{item.name}</h6>
                          <span>{item.rating} stars</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>

                    <div className="review__form">
                      <h4>Comment your Experience</h4>
                      <form onSubmit={submitHandler}>
                        <div className='form__group'>
                          <input type="text" placeholder="Enter Name" ref={reviewUser} required />
                        </div>
                        <div className='form__group d-flex align-items-center gap-3 rating__group'>
                          <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(1)}>1<i className="ri-star-s-fill"></i></motion.span>
                          <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(2)}>2<i className="ri-star-s-fill"></i></motion.span>
                          <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(3)}>3<i className="ri-star-s-fill"></i></motion.span>
                          <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(4)}>4<i className="ri-star-s-fill"></i></motion.span>
                          <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(5)}>5<i className="ri-star-s-fill"></i></motion.span>
                        </div>

                        <div className='form__group'>
                          <textarea ref={reviewMsg} rows={4} placeholder="Review Message ...." required />
                        </div>
                        <motion.button whileTap={{ scale: 1.2 }} type="submit" className="buy__btn">Submit</motion.button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>
            <Col lg='12' className='mt-5'>
              <h2 className='related__title'>You would also like</h2>
            </Col>
            <ProductsList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetail;
