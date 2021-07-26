import React from "react";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <div className="container mt-3 mb-5">
      <div className="row">
        <div className="col-12 mx-auto text-center text-title m-5">
          <h1>your cart is currently empty</h1>
        </div>
        <div className="col-12 mx-auto text-center text-title mb-5">
          <Link to="/">
            <button
              type="button"
              className="btn btn-outline-danger text-capitalize"
            >
              Go Back to Shop
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
