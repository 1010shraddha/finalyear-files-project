import React, { useState, useRef } from 'react';
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import "../style/product_detail.css";
import products from '../asset/data/product';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { motion } from "framer-motion";
import ProductsList from '../components/UI/ProductList';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/slices/cartSlice';
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

    setReviews(prevReviews => [...prevReviews, newReview]);
    reviewUser.current.value = '';
    reviewMsg.current.value = '';
    setRating(null);
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: imgUrl,
        productName,
        price,
      })
    );
    toast.success("Product added successfully");
  };

  const relatedProducts = products.filter(item => item.category === category);

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
                  <p className='product__price'>Price: ₹{new Intl.NumberFormat().format(price)}</p>
                  <p>Category: {category}</p>
                </div>
                <p className="mt-3">Short Description: {shortDesc}</p>
                {/* Separate Add to Cart button */}
                <motion.button 
                  whileTap={{ scale: 1.2 }} 
                  className="buy__btn" 
                  onClick={addToCart}
                >
                  Add to Cart
                </motion.button>
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
                <h6 className={`${tab === 'rev' ? 'active__tab' : ''}`} onClick={() => setTab('rev')}>
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
                          <input type="text" placeholder="Enter Name" ref={reviewUser} />
                        </div>
                        <div className='form__group d-flex align-items-center gap-3'>
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span
                              key={star}
                              onClick={() => setRating(star)}
                              className={rating >= star ? "ri-star-fill" : "ri-star-line"}
                            >
                              {star}
                            </span>
                          ))}
                        </div>
                        <div className='form__group'>
                          <textarea ref={reviewMsg} rows={4} type="text" placeholder="Review Message ...." />
                        </div>
                        <button type="submit" className="buy__btn">Submit</button>
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
