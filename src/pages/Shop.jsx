import React,{useState} from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col  } from "react-bootstrap";
import "../style/shop.css";
import product from "../asset/data/product";
import ProductsList from "../components/UI/ProductList";
const Shop = () => {

const[productData,setProductData]=useState(product)

const handleFilter = e =>{

    const filterValue= e.target.value
    if(filterValue==="Chair"){
        const filterproducts=product.filter(item=>item.category==="Chair");

setProductData(filterproducts);
    }
    if(filterValue==="Sofa"){
        const filterproducts=product.filter(item=>item.category==="Sofa");

setProductData(filterproducts);
    }
    //more products will come here 
}

const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchedProducts = product.filter(
      (item) =>
        item.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
        //search from productName and category
    );

    setProductData(searchedProducts);
  }
  const handleSort = (e) => {
    const sortValue = e.target.value;
  
    if (sortValue === "ascending") {
      const sortedProducts = [...productData].sort((a, b) => a.productName.localeCompare(b.productName));
      setProductData(sortedProducts);
    }
    
    if (sortValue === "descending") {
      const sortedProducts = [...productData].sort((a, b) => b.productName.localeCompare(a.productName));
      setProductData(sortedProducts);
    }
  };
  


    return ( <Helmet title="Shop">
        <CommonSection title="Products"/>



        <section>
            <Container>
                <Row>
                    <Col lg='3' md='3'>
                    <div className="filter__widget">
                    <select onChange={handleFilter}>
                    <option >Filter By Category</option>
                        <option value="Sofa">Sofa</option>
                        <option value="Bed">Bed</option>
                        <option value="Wardrobe">Wardrobe</option>
                        <option value="Chair">Chair</option>
                        <option value="Table">Table</option>
                    </select>   
                    </div>
                    </Col>
                    <Col lg='3' md='3'>
                    <div className="filter__widget">
                    <select onChange={handleSort}>
                    <option >Sort By</option>
                        <option value="ascending">Ascending</option>
                        <option value="descending">Descending</option>
                    </select>   
                    </div>
                    </Col>
                    <Col lg='6' md='6'>
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
                    {
                       productData.length === 0 ? (<h1 className="text-center fs-4">No Products are Found!</h1>)
                       :(
                       <ProductsList data={productData}/>
                       )
                    }
                </Row>
            </Container>
        </section>
    </Helmet>
    );
};

export default Shop;