import React, { useState, useEffect } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "react-bootstrap";
import "../style/shop.css";
import staticProducts from "../asset/data/product"; // Static product data
import ProductsList from "../components/UI/ProductList";
import useGetData from "../custom-hooks/useGetData"; // Firestore hook

const Shop = () => {
  const { data: firebaseProducts, loading, error } = useGetData("products"); // Fetch Firestore data
  const [productData, setProductData] = useState([]);
  const [originalData, setOriginalData] = useState([]); // Store original data

  // Combine Firebase and static data when Firebase data is loaded
  useEffect(() => {
    const combinedData = [...staticProducts, ...firebaseProducts];
    setProductData(combinedData);
    setOriginalData(combinedData); // Store the original data for filtering & sorting
  }, [firebaseProducts]);

  // Optimized Filter Function
  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "all") {
      setProductData(originalData); // Reset to original data
    } else {
      const filteredProducts = originalData.filter(
        (item) => item.category?.toLowerCase() === filterValue.toLowerCase()
      );
      setProductData(filteredProducts);
    }
  };

  // Search Function
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const searchedProducts = originalData.filter(
      (item) =>
        item.productName?.toLowerCase().includes(searchTerm) || 
        item.category?.toLowerCase().includes(searchTerm)
    );
    setProductData(searchedProducts);
  };

  // Sort Function (A-Z & Z-A Sorting by productName)
  const handleSort = (e) => {
    const sortValue = e.target.value;

    if (sortValue === "Sort By") {
      setProductData(originalData); // Reset to original data when "Sort By" is selected
      return;
    }

    const sortedProducts = [...productData].sort((a, b) => {
      const nameA = a.productName?.trim().toLowerCase() || "";
      const nameB = b.productName?.trim().toLowerCase() || "";

      return sortValue === "ascending"
        ? nameA.localeCompare(nameB) // A-Z
        : nameB.localeCompare(nameA); // Z-A
    });

    setProductData(sortedProducts);
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
                  <option value="all">All Categories</option>
                  <option value="sofa">Sofa</option>
                  <option value="chair">Chair</option>
                  <option value="table">Table</option>
                  <option value="cabinet">Cabinet</option>
                  <option value="bench">Bench</option>
                  <option value="mattress">Mattress</option>
                  <option value="study table">Study Table</option>
                  <option value="laptop table">Laptop Table</option>
                  <option value="single door cupboard">Single Door Cupboard</option>
                  <option value="double door cupboard">Double Door Cupboard</option>
                  <option value="single sized bed">Single Sized Bed</option>
                  <option value="double sized bed">Double Sized Bed</option>
                </select>
              </div>
            </Col>

            <Col lg="3" md="3" sm="12" className="ms-auto">
              <div className="filter__widget">
                <select onChange={handleSort}>
                  <option value="Sort By">Sort By</option>
                  <option value="ascending">A-Z</option>
                  <option value="descending">Z-A</option>
                </select>
              </div>
            </Col>

            <Col lg="6" md="12" sm="12" className="mt-3 mt-lg-0">
              <div className="search__box">
                <input type="text" placeholder="Search..." onChange={handleSearch} />
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
            {loading ? (
              <h1 className="text-center fs-4">Loading...</h1>
            ) : error ? (
              <h1 className="text-center fs-4 text-danger">Error: {error}</h1>
            ) : productData.length === 0 ? (
              <h1 className="text-center fs-4">No Products Found!</h1>
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
