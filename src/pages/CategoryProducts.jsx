import React from "react";
import { useParams } from "react-router-dom";
import products from "../asset/data/product"; // adjust path if needed
import ProductCard from "../components/UI/ProductCard"; // ✅ import your card

const CategoryProducts = () => {
  const { categoryName } = useParams();

  // Format category name for comparison (e.g., sofa to "sofa")
  const formattedCategory = categoryName.replace(/-/g, " ").toLowerCase();

  // Filter products by category
  const filteredProducts = products.filter(
    (item) => item.category.toLowerCase() === formattedCategory
  );

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-capitalize">{formattedCategory} Products</h2>

      {filteredProducts.length > 0 ? (
        <div className="row">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} item={product} />
          ))}
        </div>
      ) : (
        <p>No products found in this category.</p>
      )}
    </div>
  );
};

export default CategoryProducts;
