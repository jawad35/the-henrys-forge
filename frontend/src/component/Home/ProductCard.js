import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img style={{objectFit:'cover', boxShadow:"5px 1px 10px gray", borderRadius:'10px 10px 0px 0px'}} src={product.images[0].url} alt={product.name} />
      <p style={{textTransform:'capitalize'}}>{product.name.length > 75 ?product.name.slice(0,50) +"...read more" :product.name}</p>
      <div>
        <Rating {...options} />
        <p className="productCardSpan">
          ({product.numOfReviews} Reviews)
        </p>
      </div>
      <span className="pro-price">{`$${product.price}`}</span>
    </Link>
  );
};

export default ProductCard;
