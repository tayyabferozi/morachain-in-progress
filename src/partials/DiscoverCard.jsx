import React from "react";
import { useTimer } from "react-timer-hook";

const DiscoverCard = ({
  id,
  date,
  img,
  location,
  address,
  tokenName,
  shares,
  price,
  grossYield,
  roi,
}) => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: date,
  });

  return (
    <div key={id} className="col-sm-6 col-lg-4">
      <div className="product-item">
        <div className="img">
          <img src={img} alt={location} />

          <div className="timer">
            <div>
              <strong>DAYS</strong>
              <small className="d-block text-light-1">{days}</small>
            </div>
            <div>
              <strong>HOURS</strong>
              <small className="d-block text-light-1">{hours}</small>
            </div>
            <div>
              <strong>MIN</strong>
              <small className="d-block text-light-1">{minutes}</small>
            </div>
            <div>
              <strong>SEC</strong>
              <small className="d-block text-light-1">{seconds}</small>
            </div>
          </div>
        </div>

        <div className="text">
          <div className="progress">
            <img src="./assets/imgs/progress-round.png" alt="progress" />
            <div className="fw-600 fs-14">50%</div>
          </div>
          <strong className="d-block">{location}</strong>
          <small className="text-light-1">{address}</small>

          <ul>
            <li>
              <strong>Token Name:{tokenName}</strong>
            </li>
            <li>
              <strong>Token Shares:{shares}</strong>
            </li>
            <li>
              <strong>Per Share Price:{price}</strong>
            </li>
            <li>
              <strong>Gross Yield:{grossYield}</strong>
            </li>
            <li>
              <strong>Guarenteed Annual ROI:{roi}</strong>
            </li>
          </ul>

          <button className="btn btn-gradient w-100 mt-3">
            View More Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverCard;
