import React from "react";

const PresaleHero = () => {
  return (
    <div className="container-fluid px-0 presale-hero">
      <div className="row">
        <div className="col-xxl-6 col-lg-5">
          <img
            className="w-100"
            src="./assets/imgs/presale-hero.png"
            alt="coin"
          />
        </div>
        <div className="col-xxl-6 col-lg-7 d-flex align-items-center text-center text-lg-start justify-content-center justify-content-lg-start">
          <div className="right">
            <h2>$Mor NFT Pre Sale Pricing</h2>
            <h6 className="text-white fw-500 mt-3">$100000,10 USD Raised</h6>

            <h2 className="mt-5">$Mor NFT Listing date</h2>
            <h6 className="text-white fw-500 mt-3">Wil Be Announced Soon</h6>

            <div className="d-flex justify-content-between mt-4 btns flex-sm-row flex-column gap-4 gap-sm-0">
              <button className="btn btn-gradient bordered">MOR ADDRESS</button>
              <button className="btn btn-gradient bordered">
                MOR NFT ADDRESS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresaleHero;
