import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <h1 className="text-white">Shrinath Furnitures</h1>
            </div>
            <p className="footer__text md-4">
              High-quality, handcrafted wooden furniture at affordable prices.
              Crafted with excellence to provide durability and elegance.
            </p>
          </Col>

          <Col lg="2">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top Categories</h4>
              <ListGroup>
                {["Laptop Table", "Bench", "Sofa", "Study Table"].map((category, index) => (
                  <ListGroupItem key={index} className="ps-0 border-0">
                    <Link to={`/category/${category.toLowerCase().replace(/\s/g, "-")}`}>
                      {category}
                    </Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="2">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Useful Links</h4>
              <ListGroup>
                {["Shop", "Cart", "Login", "Privacy Policy"].map((link, index) => (
                  <ListGroupItem key={index} className="ps-0 border-0">
                    <Link to={`/${link.toLowerCase().replace(/\s/g, "-")}`}>{link}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="2">
            <div className="footer__quick-links">
              <h4 className="quick__links-title ps-0">Contact Us</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  <p className="mb-0 address-text">
                    Dharavi, 90-Feet Road, Mumbai - 400017
                  </p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-phone-line"></i>
                  </span>
                  <p className="mb-0">+91 8812345677</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  <p className="mb-0">shrinathfurnitures@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="12" className="text-center mt-3">
            <p className="footer_copyright">
              &copy; {year} Developed by Shraddha & SelvaPriya. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
