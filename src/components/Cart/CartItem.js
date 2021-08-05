import React from "react";
import "../../App.css";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="product-image col-12 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
          alt="product"
        />
      </div>
      <div className="product-title col-12 mx-auto col-lg-2">
        <span className="d-lg-none">product:</span> {title}
      </div>
      <div className="product-price col-12 mx-auto col-lg-2">
        <span className="d-lg-none">price:</span> ${price}
      </div>
      <div className="col-12 mx-10 col-lg-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div className="quantity-buttons justify-content-center">
            <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span className="btn btn-black mx-1" onClick={() => increment(id)}>
              +
            </span>
          </div>
        </div>
      </div>
      {/* */}
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash"></i>
        </div>
      </div>

      <div className="item-total col-10 mx-auto col-lg-2">
        <strong>item total: ${total}</strong>
      </div>
    </div>
  );
}
