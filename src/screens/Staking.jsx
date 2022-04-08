import React from "react";

import MainLayout from "../layouts/MainLayout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StakeCard from "../components/StakeCard";

const Staking = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      // {
      //   breakpoint: 1200,
      //   settings: {
      //     slidesToShow: 4,
      //     slidesToScroll: 1,

      //   }
      // },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <MainLayout rootClassName="staking" title="STAKING">
      <div className="section stake-container">
        <div className="page-container">
          <div className="container-fluid px-0">
            <div className="main-row row gy-4">
              <Slider ref={(slider) => slider} {...settings}>
                {[
                  {
                    title: "STAKE-MOR",
                    coinImg: "./assets/imgs/coin-md.png",
                    apy: 0,
                    stroke: 0.0,
                    staked: false,
                    period: "1 Year",
                  },
                  {
                    title: "STAKE - MOR - LP (MATIC)",
                    coinImg: "./assets/imgs/coin-2.png",
                    apy: 0,
                    stroke: 0.0,
                    staked: false,
                    period: "1 Year",
                  },
                  {
                    title: "STAKE-MOR",
                    coinImg: "./assets/imgs/coin-md.png",
                    apy: 0,
                    stroke: 0.0,
                    staked: false,
                    period: "(Expired)",
                  },
                  {
                    title: "STAKE - MOR - LP (MATIC)",
                    coinImg: "./assets/imgs/coin-2.png",
                    apy: 0,
                    stroke: 0.0,
                    staked: false,
                    period: "(Expired)",
                  },
                  {
                    title: "STAKE - MOR - LP (MATIC)",
                    coinImg: "./assets/imgs/coin-2.png",
                    apy: 0,
                    stroke: 0.0,
                    staked: false,
                    period: "(Expired)",
                  },

                  {
                    title: "STAKE - MOR - LP (MATIC)",
                    coinImg: "./assets/imgs/coin-2.png",
                    apy: 0,
                    stroke: 0.0,
                    staked: false,
                    period: "(Expired)",
                  },
                ].map((el) => {
                  const {
                    title,
                    coinImg,
                    // apy, stroke, staked, period
                  } = el;

                  return (
                    <StakeCard key={title} title={title} coinImg={coinImg} />
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>

      <div className="section text-section sec-1">
        <div className="page-container">
          <div className="row">
            <div className="col-lg-6">
              <img
                style={{ maxWidth: 690 }}
                className="section-vector"
                src="./assets/imgs/text-section-1.png"
                alt=""
              />
            </div>
            <div className="col-lg-6">
              <p className="text-light-1 mt-4">
                Real estate couldn't escape from blockchain disturbance just
                like a number of other industries. Previously, executing
                high-value transaction resources, for example, land solely
                through computerized channels has never been the norm. Real
                estate transactions are usually directed offline including
                on-person meetings or personal commitments with different
                entities. Block chain, in any case, explored ways of evolving
                this. The introduction of smart contracts in blockchain
                platforms lets assets like real estate be tokenized and traded
                like cryptocurrencies like ether and bitcoin.
              </p>
              <p className="text-light-1 mt-4">
                On our Platform, the users will be enabled to stake the native
                utility token of the platform $XYZ as well as the property share
                token that addresses the partial offer in the property.
              </p>
              <p className="text-light-1 mt-4">
                The Property is a digital asset that is printed into an NFT and
                the property is divided into square feet, so 1 Square foot is 1
                share in the property. This share is a fraction part of the
                Property NFT, which is additionally called the Property Share
                token.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section text-section sec-2">
        <div className="page-container">
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-6">
              <h3>Staking of Property Share Token</h3>
              <p className="text-light-1 mt-4">
                Once the crowd sale of the property is completed, the Property
                Share token can be asserted from the dashboard of the clients
                and it will be accessible in the metamask wallet. This token now
                can be Staked on the Platform and acquire Rewards in XYZ at a
                similar rate at which this property procures presently.
              </p>
              <h3 className="mt-4">Example:</h3>
              <p className="text-light-1 mt-4">
                If the Return of Investment on the property is 6% per annum, the
                staking reward will likewise be 6% per Annum.
              </p>
            </div>
            <div className="col-lg-6 d-flex justify-content-end">
              <img
                style={{ maxWidth: 410 }}
                className="section-vector"
                src="./assets/imgs/text-section-2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="section calculation">
        <div className="bg"></div>
        <div className="page-container">
          <div className="container-fluid px-0">
            <h2 className="text-center">
              How is the Price calculated for the Property Share Token
            </h2>

            <div className="calc">
              <h3>Property Share Token </h3>
              <h1 className="mx-4">=</h1>

              <div className="div">
                <h3>Property Valuation In (U.S.D)</h3>
                <h3>Property Area In Square Feet</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section text-section sec-3">
        <div className="page-container">
          <div className="row">
            <div className="col-lg-6">
              <img
                style={{ maxWidth: 690 }}
                className="section-vector"
                src="./assets/imgs/text-section-3.png"
                alt=""
              />
            </div>
            <div className="col-lg-6">
              <p className="text-light-1 mt-4">
                Real estate technology has customarily been a fundamental
                concern about listings and associating vendors and buyers.
                However, blockchain purposes new ways to trade property and can
                empower trading stages and online markets to help real estate
                transactions more extensively. By tokenizing real estate
                property, resources can then be traded similar to stocks on an
                exchange and transactions are accessible online.
              </p>
              <p className="text-light-1 mt-4">
                Blockchain innovation has affected the real estate business in
                numerous ways, including offering another means for purchasers
                and dealers to interface with each other. It can be utilized to
                remove intermediaries of the land transaction process while
                being cost-effective. This technology could likewise assist with
                arranging and codifying the practice of fragmentary ownership
                for real estate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Staking;
