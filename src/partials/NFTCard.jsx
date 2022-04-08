import React from "react";
import clsx from "clsx";

const NFTCard = ({ img, half, name, avail, price }) => {
  return (
    <div className={clsx({ "col-lg-3": !half }, { "col-md-6": half })}>
      <div className="card">
        <img className="product-img" src={img} alt="product" />

        <div className="text">
          <div className="top-row">
            <h6 className="flex-shrin-0">{name}</h6>
            <div className="d-flex align-items-center justify-content-between flex-grow-1">
              <small className="text-light-1">Available: {avail}</small>
              <div className="price">
                <img src="./assets/imgs/coin-sm.png" alt="coin" />
                {price}
              </div>
            </div>
          </div>
          <div className="bottom-row">
            <div className="amount-container">
              <button className="btn btn-grey">-</button>
              {/* <div className="amount fw-600">1</div> */}
              <input type="number" name="amount" value={1} />
              <button className="btn btn-grey">+</button>
            </div>

            <button className="btn btn-grey">
              <img width={15} src="./assets/imgs/cart.png" alt="cart" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
