import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/ProductActions";
import Product from "../Product/Product";
import Header from "../Header/Header";

const Products = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);
  return (
    <div>
       {Object.keys(products).length === 0 ? (
        <div className="text-center p-5 m-5">...Loading</div>
      ) : (
      <div>
        <Header></Header>
        <div class="row row-cols-1 row-cols-md-5 g-4 m-1 m-md-5">
          <Product></Product>
        </div>
      </div>
      )}
    </div>
  );
};

export default Products;