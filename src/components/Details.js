import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart,
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* title*/}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-main my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end title */}
              {/* product info */}
              <div className="row">
                <div
                  className="col-10 mx-auto col-md-6 my-3 
                            text-capitalize"
                >
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                {/* product text */}
                <div
                  className="col-10 mx-auto col-md-6 my-3 
                            text-capitalize"
                >
                  <h3>model : {title}</h3>
                  <h4 className="text-title text-capitalize text-muted">
                    made by : <span className="text-capitalize">{company}</span>
                  </h4>
                  <h5 className="text-main">
                    <strong>
                      price : <span>$</span>
                      {price}
                    </strong>
                  </h5>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info about the product
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* buttons */}
                  <div>
                    <Link to="/">
                      <button className="btn btn-danger m-2 text-capitalize">
                        back to products
                      </button>
                    </Link>
                    <button
                      className="btn btn-warning m-2 text-capitalize"
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "inCart" : "add to cart"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
