import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import orderConfirm from "../imgs/order-confirmed.avif";

export const Checkout = ({
  showAllModal,
  setshowModal,
  handleModalClose,
  products,
  cartItems,
  totalAmount,
  checkout,
}) => {
  const [userName, setuserName] = useState();
  const [password, setpassword] = useState();
  const [error, seterror] = useState(false);
  const [showCheckoutModal, setshowCheckoutModal] = useState(false);
  const handleCheckoutModalClose = () => setshowCheckoutModal(false);
  const loginAsGuest = () => {
    setshowModal(false);
    setshowCheckoutModal(true);
  };

  const [showLogin, setshowLogin] = useState(false);
  const loginAsUser = () => {
    setshowLogin(true);
  };

  const login = (e) => {
    e.preventDefault();
    if (userName == "test" && password == "test@123") {
      setshowModal(false);
      setshowCheckoutModal(true);
      seterror(false);
    } else {
      seterror(true);
    }
  };

  const [showdoneModal, setshowdoneModal] = useState(false);
  const handleDoneModalClose = () => setshowdoneModal(false);
  const onPlaceOrder = (e) => {
    e.preventDefault();
    setshowCheckoutModal(false);
    setshowdoneModal(true);
  };

  return (
    <div>
      <Modal
        show={showAllModal}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header>
          <div className="col-lg-11">
            <h3 className="modal-title text-center">Login</h3>
          </div>
          <div className="col-lg-1">
            <svg
              onClick={handleModalClose}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="col-lg-12 text-center py-3  ">
              {showLogin ? (
                <Form
                  onSubmit={(e) => {
                    login(e);
                  }}
                >
                  <div className="container">
                    <div className="row col-lg-12">
                      <div className="col-lg-6 py-2">
                        <input
                          value={userName}
                          type="text"
                          className="form-control"
                          placeholder="User Name"
                          onChange={(e) => setuserName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="col-lg-6 py-2">
                        <input
                          value={password}
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          onChange={(e) => setpassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      value="submit"
                      className="btn btn-secondary btn-lg"
                    >
                      Login and Continue
                    </button>
                    {error && <h5 style={{ color: "red" }}>Invalid User</h5>}
                  </div>
                </Form>
              ) : (
                <>
                  <button
                    type="button"
                    className="btn btn-secondary btn-lg"
                    onClick={() => loginAsGuest("true")}
                  >
                    Login as Guest
                  </button>{" "}
                  &emsp;
                  <button
                    type="button"
                    className="btn btn-secondary btn-lg"
                    onClick={() => loginAsUser("true")}
                  >
                    Login as User
                  </button>
                </>
              )}
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={showCheckoutModal}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header>
          <div className="col-lg-11">
            <h3 className="modal-title text-center">Address</h3>
          </div>
          <div className="col-lg-1">
            <svg
              onClick={handleCheckoutModalClose}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              checkout();
              onPlaceOrder(e);
            }}
          >
            <div className="container">
              <div className="row col-lg-12">
                <div className="col-lg-6 py-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="col-lg-6 py-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    required
                  />
                </div>
                <div className="col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="State"
                    required
                  />
                </div>
                <div className="col-lg-6">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Zip Code"
                    required
                  />
                </div>

                <h3 className="py-3 col-lg-12">Item</h3>
                <br />
                <div className="col-lg-12">
                  <table className="table">
                    <tr>
                      <th>Item Name</th>
                      <th>Price </th>
                      <th>Qty</th>
                      <th>Total</th>
                    </tr>
                    <tbody>
                      {products.map((product) => {
                        if (cartItems[product.id] !== 0) {
                          const list = (
                            <tr key={product}>
                              <td>{product.productName}</td>
                              <td>{product.price}</td>
                              <td>{cartItems[product.id]}</td>
                              <td>{product.price * cartItems[product.id]}</td>
                            </tr>
                          );
                          return list;
                        }
                        return null;
                      })}
                    </tbody>
                  </table>
                  <div className="row col-lg-12">
                    <div className="col-lg-9 ">
                      <h5>Grand Total : {totalAmount}</h5>
                    </div>
                    <div className="col-lg-3 ">
                      <button
                        type="submit"
                        value="submit"
                        className="btn btn-secondary btn-lg"
                      >
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      <Modal
        show={showdoneModal}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Body>
          <img className="fullscrn" src={orderConfirm} />
          <div className="col-lg-12 text-center py-3  ">
            <Link to="/">Continue Shopping</Link>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
