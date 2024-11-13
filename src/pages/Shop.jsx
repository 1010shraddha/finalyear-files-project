import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col  } from "react-bootstrap";

const Shop = () => {
    return ( <Helmet title="Shop">
        <CommonSection title="Products"/>



        <section>
            <Container>
                <Row>
                    <Col lg='3' md='3'>
                    <div className="filter__widget">
                    <select>
                        <option>Filter By Category</option>
                        <option value="sofa">Sofa</option>
                        <option value="bed">Bed</option>
                        <option value="wardrobe">Wardrobe</option>
                        <option value="chair">Chair</option>
                        <option value="table">Table</option>
                    </select>   
                    </div>
                    </Col>
                    <Col lg='3' md='3'>
                    <div className="filter__widget">
                    <select>
                        <option>Sort By</option>
                        <option value="ascendong">Ascending</option>
                        <option value="descending">Descending</option>
                    </select>   
                    </div>
                    </Col>
                    <Col lg='6' md='6'></Col>
                    <div className="search__box"></div>
                    <input type="text" placeholder="Search........"/>
                </Row>
            </Container>
        </section>
    </Helmet>
    );
};

export default Shop;