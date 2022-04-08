import React from "react";

import MainLayout from "../layouts/MainLayout";
import PresaleHero from "../partials/PresaleHero";
import Roadmap from "../partials/Roadmap";

const NFTPresale2 = () => {
  return (
    <MainLayout rootClassName="nft-presales" titleComp={<PresaleHero />}>
      <div className="section donkey-nfts">
        <div className="page-container">
          <div className="text-center">
            <h2>Morachain NFTS’</h2>
            <p className="mt-5 text-light-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen a book.
            </p>

            <div className="show-case mt-5">
              <div className="container-fluid px-0">
                <div className="row g-4 justify-content-center">
                  {[
                    {
                      src: "./assets/imgs/nft-donkey-1.png",
                    },
                    {
                      src: "./assets/imgs/nft-donkey-2.png",
                    },
                    {
                      src: "./assets/imgs/nft-donkey-3.png",
                    },
                    {
                      src: "./assets/imgs/nft-donkey-4.png",
                    },
                    {
                      src: "./assets/imgs/nft-donkey-1.png",
                    },
                    {
                      src: "./assets/imgs/nft-donkey-2.png",
                    },
                    {
                      src: "./assets/imgs/nft-donkey-3.png",
                    },
                    {
                      src: "./assets/imgs/nft-donkey-4.png",
                    },
                  ].map((el, idx) => {
                    const { src } = el;

                    return (
                      <div
                        className="col-lg-3 col-md-4 col-sm-6"
                        key={"showcase" + idx}
                      >
                        <img src={src} alt="nft" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <button className="btn btn-gradient mt-5">PRE SALE ENDED</button>
          </div>
        </div>
      </div>

      <div className="tam-wrap">
        <div className="section tam">
          <div className="page-container text-center">
            <h1>Meet the MOR TAM</h1>
            <p className="mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen a book.
            </p>

            <div className="container-fluid px-0 mt-5">
              <div className="row gy-4 justify-content-center">
                {[
                  {
                    img: "./assets/imgs/team-mem-1.png",
                  },
                  {
                    img: "./assets/imgs/team-mem-2.png",
                  },
                  {
                    img: "./assets/imgs/team-mem-3.png",
                  },
                  {
                    img: "./assets/imgs/team-mem-3.png",
                  },
                ].map((el, idx) => {
                  const { img } = el;

                  return (
                    <div
                      className="col-lg-3 col-md-4 col-sm-6"
                      key={"team-mem" + idx}
                    >
                      <img src={img} alt="team-member" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <button className="btn btn-gradient grad-2 mt-5">VIEW MORE</button>
          </div>
        </div>
      </div>

      <Roadmap />
    </MainLayout>
  );
};

export default NFTPresale2;
