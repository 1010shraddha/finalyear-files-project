import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import "../style/product_detail.css";
import localProducts from '../asset/data/product';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { motion } from "framer-motion";
import ProductsList from '../components/UI/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';  // ✅ Fixed import
import { addToWishlist, removeFromWishlist } from '../redux/slices/wishlistSlice';
import { toast } from 'react-toastify';
import useGetData from '../custom-hooks/useGetData';

const ProductDetail = () => {
  const [tab, setTab] = useState('desc');
  const reviewUser = useRef('');
  const reviewMsg = useRef('');
  const dispatch = useDispatch();
  const [rating, setRating] = useState(null);
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  const { data: firebaseProducts, loading } = useGetData("products");
  const wishlistItems = useSelector(state => state.wishlist.items);

  const allProducts = [...localProducts, ...firebaseProducts];
  const product = allProducts.find(item => item.id === id);

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem(`reviews-${id}`));
    if (storedReviews) {
      setReviews(storedReviews);
    }
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) return <p>Loading product...</p>;
  if (!product) return <p>Product not found.</p>;

  const { imgUrl, productName, price, avgRating, description, shortDesc, category } = product;
  const isInWishlist = wishlistItems.some(item => item.id === id);

  const addToCart = () => {
    dispatch(addItem({ id, imgUrl, productName, price }));  // ✅ Corrected dispatch
    toast.success("Product added successfully");
  };

  const toggleWishlistHandler = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(id));
      toast.success("Product removed from wishlist!");
    } else {
      dispatch(addToWishlist({ id, imgUrl, productName, price }));
      toast.success("Product added to wishlist!");
    }
  };

  const relatedProducts = allProducts.filter(item => item.category === category && item.id !== id);

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
                  <span>{avgRating} ratings</span>
                </div>
                <p className='product__price'>Price: ₹{new Intl.NumberFormat('en-IN').format(price)}</p>
                <p>Category: {category}</p>
                <p className="mt-3">Short Description: {shortDesc}</p>
                <div className="product__actions d-flex align-items-center gap-3">
                  <motion.button whileTap={{ scale: 1.2 }} className="buy__btn" onClick={addToCart}>
                    Add to Cart
                  </motion.button>
                  <motion.i
                    whileTap={{ scale: 1.2 }}
                    className={`ri-heart-${isInWishlist ? 'fill' : 'line'} wishlist__icon`}
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
                <h6 className={`${tab === 'rev' ? 'active__tab' : ''}`} onClick={() => setTab('rev')}>Reviews ({reviews.length})</h6>
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
