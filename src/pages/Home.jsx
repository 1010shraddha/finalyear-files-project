import React from "react";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";
import  m1 from '../image/h2.png';
import Helmet from '../components/Helmet/Helmet';
import '../style/home.css';
import { Container,Row,Col} from "reactstrap";
const Home = () => {

    const year=new Date().getFullYear()
    return <Helmet title={'Home'}>
        <section className="hero_section"></section>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                <div className="hero_content">
                    <h1 className="hero_subtitle">Trending Now in {year}</h1>
                    <h2>Make your Interior More Unique and Comfy </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, sapiente illum at veniam modi labore aliquid optio. Nemo, vel nulla?lo</p>
                    <motion.button whileTap={{scale:1.2}}className='buy_btn'><Link to='/shop'>SHOP NOW
                    </Link></motion.button>               
                     </div>
                </Col>
                <Col lg='6' md='6'></Col>
                <div className="hero_img">
                    <img src={m1} alt=""/>
                </div>
            </Row>
        </Container>
    </Helmet>;
};

export default Home;