import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col lg-4
                                 text-center p-5"
                    >
                      <h4 className="text-capitalize">
                        This item was added to your cart!
                      </h4>
                      <img src={img} className="img-fluid mb-2" alt="product" />
                      <h5>{title}</h5>
                      <p className="text-muted">Price: ${price}</p>
                      <Link to="/">
                        <button
                          className="btn btn-danger m-2"
                          onClick={() => closeModal()}
                        >
                          Store
                        </button>
                      </Link>
                      <Link to="/cart">
                        <button
                          className="btn btn-warning m-2"
                          cart
                          onClick={() => closeModal()}
                        >
                          Go to Cart
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 20px;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-item: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
