import React from "react";

import MainLayout from "../layouts/MainLayout";
import Select from "../components/select/select";
import Option from "../components/select/option";
import Input from "../components/Input";
import NFTCard from "../partials/NFTCard";
import Roadmap from "../partials/Roadmap";

const NFTPresale = () => {
  return (
    <MainLayout rootClassName="nfts" title="NFT'S">
      <div className="section filter-container">
        <div className="page-container">
          <div className="hero-bottom-displaced">
            <div className="inputs">
              <Select
                rootClassName="flex-shrink-0"
                placeholder="Select Collection"
              >
                <Option value="Collection 1">Collection 1</Option>
                <Option value="Collection 2">Collection 2</Option>
                <Option value="Collection 3">Collection 3</Option>
              </Select>

              <Input id="search" placeholder="Search nft's" />

              <div className="range-container">
                <Input id="min" type="number" placeholder="Min Price" />
                <div className="to">To</div>
                <Input id="max" type="number" placeholder="Max Price" />
              </div>

              <button className="btn btn-gradient">Search</button>
              <button className="btn btn-grey d-flex justify-content-center align-items-center">
                <img src="./assets/imgs/cart.png" alt="cart" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="section products">
        <div className="page-container">
          <div className="container-fluid px-0">
            <div className="cards-sm">
              <div className="main-row row gy-5">
                {[
                  {
                    id: 1,
                    img: "./assets/imgs/product-1.png",
                    name: "NFT Name Goes Here",
                    avail: 300,
                    price: 134.52,
                  },
                  {
                    id: 2,
                    img: "./assets/imgs/product-2.png",
                    name: "NFT Name Goes Here",
                    avail: 300,
                    price: 134.52,
                  },
                  {
                    id: 3,
                    img: "./assets/imgs/product-3.png",
                    name: "NFT Name Goes Here",
                    avail: 300,
                    price: 134.52,
                  },
                  {
                    id: 4,
                    img: "./assets/imgs/product-3.png",
                    name: "NFT Name Goes Here",
                    avail: 300,
                    price: 134.52,
                  },
                  {
                    id: 5,
                    half: true,
                    img: "./assets/imgs/product-4.png",
                    name: "NFT Name Goes Here",
                    avail: 300,
                    price: 134.52,
                  },
                  {
                    id: 6,
                    half: true,
                    img: "./assets/imgs/product-4.png",
                    name: "NFT Name Goes Here",
                    avail: 300,
                    price: 134.52,
                  },
                ].map((el, idx) => {
                  return <NFTCard key={el.id} {...el} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section availability">
        <div className="bg"></div>
        <div className="page-container">
          <h2 className="text-center">Limited Membership Availablility</h2>

          <div className="container-fluid px-0 mt-4 list-container">
            <div className="row">
              <div className="col-md-6">
                <ul>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section benefits">
        <div className="page-container">
          <h2>Benefits of Membership</h2>

          <div className="container-fluid px-0 mt-4 list-container">
            <div className="row">
              <div className="col-md-6">
                <ul className="styled-list-2">
                  <li>
                    Get access to the best real estate deals that were only
                    available to institutional investors.
                  </li>
                  <li>
                    No lock-in period on investments and no entry barrier to
                    exclusive deals offered on the tokenization platform.
                  </li>
                  <li>
                    Get investment deals from affordable housing to luxury and
                    ultra-luxury residential properties in fractions
                  </li>
                  <li>
                    With the P2E opportunity accessible the users have unlimited
                    possibilities in the mind of what can be created and
                    adapted.
                  </li>
                  <li>
                    Get admittance to the best real estate deals that were
                    simply accessible to institutional investors. Invest in land
                    in fractions and gain profits with capital appreciation.
                  </li>
                  <li>Invest in properties as low as USD XYZ.</li>
                  <li>
                    Access to global properties and other asset classes like
                    commercial, retail, and hospitality.
                  </li>
                  <li>An opportunity to reap higher profits and dividends.</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="styled-list-2">
                  <li>
                    Providing an ecosystem where investment in real estate is as
                    easy as investing in shares on the stock market.
                  </li>
                  <li>
                    Unique tokens - ownership of each property is distributed
                    across a finite number of representative tokens.
                  </li>
                  <li>
                    Assists asset or fund owners to raise capital more
                    efficiently.
                  </li>
                  <li>
                    It merits investors’ unprecedented access to private real
                    estate investments, transparency, and liquidity.
                  </li>
                  <li>
                    ‘Smart contracts’, the programmable actions on the
                    blockchain facilitate the automation of various processes.
                  </li>
                  <li>
                    As tokens can be swapped in real-time - it opens up new
                    possibilities for ambitious and creative real estate
                    ventures.
                  </li>
                  <li>It is one of the ways to securitize real assets.</li>
                  <li>
                    Get deals of investments from affordable housing to
                    extravagance and ultra-private properties in fractions.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section membership">
        <div className="bg"></div>

        <div className="page-container">
          <div className="text-center">
            <h2>DAO Membership Opens</h2>

            <h6 className="mt-5">
              March 4, 2022 - 8:00 AM Mountain Standard Time (MST) (Denver,
              Colorado, USA)
            </h6>

            <div className="timer-lg mt-5">
              <div>
                <div className="txt">03 Day</div>
              </div>
              <div>
                <div className="txt">03 Hrs</div>
              </div>
              <div className="active">
                <div className="txt">03 Min</div>
              </div>
              <div>
                <div className="txt">03 Sec</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Roadmap />
    </MainLayout>
  );
};

export default NFTPresale;
