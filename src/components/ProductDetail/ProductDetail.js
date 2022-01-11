import React, { useEffect } from "react";
import './ProductDetail.css';
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../../redux/actions/ProductActions.js";
import Header from "../Header/Header.js";
const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div >
      {Object.keys(product).length === 0 ? (
        <div className="text-center p-5 m-5">...Loading</div>
      ) : (
        <div>
          <Header></Header>
          <div className="detail">
            <div className="detail-image">
              <img src={image} alt="" />
            </div>
            <div className="detail-description">
              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                      <h6 className="card-title">{category}</h6>
                      <p className="card-text">{description}</p>
                      <h4 className="card-title">{price}</h4>
                      <a href="/" className="btn btn-primary">Add to Card</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;