import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import m1 from '../asset/image/h2.png';
import Helmet from '../components/Helmet/Helmet';
import '../style/home.css';
import product from '../asset/data/product'; 
import { Container, Row, Col } from "reactstrap";
import Services from "../services/Services";

import ProductsList from "../components/UI/ProductList";
import Clock from "../components/UI/Clock";
import counterImg from "../asset/image/counch.jpeg";


const Home = () => {
    const [trendingProducts, setTrendingProducts] = useState([]); // State to hold filtered products
    const [bestSalesProducts, setBestSalesProducts] = useState([]);
    const[newProducts,setNewProducts]=useState([])
    const[new1Products,setNew1Products]=useState([])
    


    const year = new Date().getFullYear();

    useEffect(() => {
        const filteredTrendingProduct = product.filter(item => item.category === "Rocking Chair");

        const filteredBestProduct = product.filter(item => 
            ["Chair", "Couch"].includes(item.category) 
        );
        const filteredNewProduct = product.filter(item => item.category === "Rocking Chair");
        const filteredNew1Product = product.filter(item => item.category === "Rocking Chair");


        setTrendingProducts(filteredTrendingProduct);
        setBestSalesProducts(filteredBestProduct);
        setNewProducts(filteredNewProduct);
        setNew1Products(filteredNew1Product)

        
    }, []);

    return (
        <Helmet title={'Home'}>
            <section className="hero_section">
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className="hero_content">
                                <h1 className="hero_subtitle">Trending Now in {year}</h1>
                                <h2>Make your Interior More Unique and Comfy</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, sapiente illum at veniam modi labore aliquid optio. Nemo, vel nulla?</p>
                                <motion.button whileTap={{ scale: 1.2 }} className='buy_btn'>
                                    <Link to='/shop'>SHOP NOW</Link>
                                </motion.button>
                            </div>
                        </Col>
                        <Col lg='6' md='6'>
                            <div className="hero_img">
                                <img src={m1} alt="Stylish furniture in a modern living room" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Services />

            <section className="trending_products">
                <Container>
                    <Row>
                        <Col lg='12' className="text-center">
                            <h2 className="selection_title">Currently Trending Products</h2>
                        </Col>
                        <ProductsList data={trendingProducts} /> 
                    </Row>
                </Container>
            </section>
            <section className="best__sales">
                <Container>
                <Row>
                        <Col lg='12' className="text-center">
                            <h2 className="selection_title">Best Sales</h2>
                        </Col>
                      
                      <ProductsList data={bestSalesProducts}/>
                    </Row>
                </Container>
            </section>
<section className="timer__count">
    <Container>
        <Row>
            <Col lg="6" md="6">
            <div className="Clock_top-content">
                <h4 >Limited Offer</h4>
                <h3 >Quality Couch</h3>
            </div>
            <Clock />
           <motion.button 
           whileTap={{scale:1.2}}
           className="buy__btn store_btn">
            <Link to="/shop">Visit Store</Link>
           </motion.button>

         
            </Col>
        </Row>
    </Container>
    <div className="timer__image-container">
        <img src={counterImg} alt="" className="timer__img" />
    </div>
    
</section>


<section className="new__arrivals">
    <Container>
        <Row>
        <Col lg='12' className="text-center">
                            <h2 className="selection_title">New Arrivals</h2>
                        </Col>
<ProductsList data={newProducts} />
<ProductsList data={new1Products} />

        </Row>
    </Container>
</section>
<section className="popular_category">
<Container>
        <Row>
        <Col lg='12' className="text-center">
                            <h2 className="selection_title">Popular in Category</h2>
                        </Col>
<ProductsList data={newProducts} />
<ProductsList data={new1Products} />

        </Row>
    </Container>
</section>

        </Helmet>
    );
};

export default Home;
