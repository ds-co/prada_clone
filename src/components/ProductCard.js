import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showProduct = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div>
      <div className="card mt-5" onClick={() => showProduct(item.id)}>
        <img src={item?.img} />
        <div>{item?.title}</div>
        <div>₩{item?.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
