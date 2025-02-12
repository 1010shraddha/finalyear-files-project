import React, { useState } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "react-bootstrap";
import "../style/shop.css";
import product from "../asset/data/product";
import ProductsList from "../components/UI/ProductList";

const Shop = () => {
  const [productData, setProductData] = useState(product);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "Cabinet") {
      const filteredProducts = product.filter((item) => item.category === "Cabinet");
      setProductData(filteredProducts);
    }
    if (filterValue === "Chair") {
      const filteredProducts = product.filter((item) => item.category === "Chair");
      setProductData(filteredProducts);
    }
    if (filterValue === "Sofa") {
      const filteredProducts = product.filter((item) => item.category === "Sofa");
      setProductData(filteredProducts);
    }
    if (filterValue === "Bench") {
      const filteredProducts = product.filter((item) => item.category === "Bench");
      setProductData(filteredProducts);
    }
    if (filterValue === "Matress") {
      const filteredProducts = product.filter((item) => item.category === "Matress");
      setProductData(filteredProducts);
    }
    if (filterValue === "Study Table") {
      const filteredProducts = product.filter((item) => item.category === "Study Table");
      setProductData(filteredProducts);
    }
    if (filterValue === "Laptop Table") {
      const filteredProducts = product.filter((item) => item.category === "Laptop Table");
      setProductData(filteredProducts);
    }

    if (filterValue === "Single Door Cupboard") {
      const filteredProducts = product.filter((item) => item.category === "Single Door Cupboard");
      setProductData(filteredProducts);
    }
    if (filterValue === "Double Door Cupboard") {
      const filteredProducts = product.filter((item) => item.category === "Double Door Cupboard");
      setProductData(filteredProducts);
    }


    
    if (filterValue === "Single Sized Bed") {
      const filteredProducts = product.filter((item) => item.category === "Single Sized Bed");
      setProductData(filteredProducts);
    }

    if (filterValue === "Double Sized Bed") {
      const filteredProducts = product.filter((item) => item.category === "Double Sized Bed");
      setProductData(filteredProducts);
    }

    // More product filters can be added here
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedProducts = product.filter(
      (item) =>
        item.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductData(searchedProducts);
  };

  const handleSort = (e) => {
    const sortValue = e.target.value;
    if (sortValue === "ascending") {
      const sortedProducts = [...productData].sort((a, b) =>
        a.productName.localeCompare(b.productName)
      );
      setProductData(sortedProducts);
    }
    if (sortValue === "descending") {
      const sortedProducts = [...productData].sort((a, b) =>
        b.productName.localeCompare(a.productName)
      );
      setProductData(sortedProducts);
    }
  };

  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />

      <section>
        <Container>
          <Row className="gy-3">
            <Col lg="3" md="6" sm="12">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="Sofa">Sofa</option>
                  {/* <option value="Bed">Bed</option>
                  <option value="Wardrobe">Wardrobe</option> */}
                  <option value="Chair">Chair</option>
                  <option value="Table">Table</option>
                  <option value="Cabinet">Cabinet</option>
                  <option value="Bench">Bench</option>
                  <option value="Matress">Matress</option>
                  <option value="Study Table">Study Table</option>
                  <option value="Laptop Table">Laptop Table</option>
                  <option value="Single Door Cupboard">Single Door Cupboard</option>
                  <option value="Double Door Cupboard">Double Door Cupboard</option>
                  <option value="Single Sized Bed">Single Sized Bed</option>
                  <option value="Double Sized Bed">Double Sized Bed</option>
                </select>
              </div>
            </Col>

            <Col lg="3" md="3" sm="20" className="ms-auto">
              <div className="filter__widget">
                <select onChange={handleSort}>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>

            <Col lg="6" md="12" sm="12" className="mt-3 mt-lg-0">
              <div className="search__box">
                <input type="text" placeholder="Search........" onChange={handleSearch} />
                <span>
                  <i className="ri-search-2-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {productData.length === 0 ? (
              <h1 className="text-center fs-4">No Products are Found!</h1>
            ) : (
              <ProductsList data={productData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
