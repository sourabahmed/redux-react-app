import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import './Product.css';

const Product = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <Link to={`/product/${id}`}>
                <div class="col">
                    <div class="card">
                        <img src={image} class="card-img-top image text-center p-3" alt="..." />
                            <div class="card-body">
                                <h6 class="card-title">{title.slice(0, 30)}</h6>
                                <p class="card-text">{price}</p>
                            </div>
                    </div>
                </div>
            </Link>
        );
    });
    return <>{renderList}</>;
};

export default Product;