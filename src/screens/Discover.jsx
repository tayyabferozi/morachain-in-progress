import React from "react";

import Input from "../components/Input";
import MainLayout from "../layouts/MainLayout";
import DiscoverCard from "../partials/DiscoverCard";

const productsData = [
  {
    id: 1,
    date: new Date(2022, 3, 3, 5, 20, 30, 0),
    img: "./assets/imgs/product-1.jpg",
    location: "Location Name Goes Here",
    address: "Location Address Goes Here",
    tokenName: "TN123",
    shares: 1234.0,
    price: 123.0,
    grossYield: 123.0,
    roi: 5.0,
  },
  {
    id: 2,
    date: new Date(2022, 3, 9, 5, 20, 30, 0),
    img: "./assets/imgs/product-2.jpg",
    location: "Location Name Goes Here",
    address: "Location Address Goes Here",
    tokenName: "TN123",
    shares: 1234.0,
    price: 123.0,
    grossYield: 123.0,
    roi: 5.0,
  },
  {
    id: 3,
    date: new Date(2022, 3, 5, 5, 20, 30, 0),
    img: "./assets/imgs/product-3.jpg",
    location: "Location Name Goes Here",
    address: "Location Address Goes Here",
    tokenName: "TN123",
    shares: 1234.0,
    price: 123.0,
    grossYield: 123.0,
    roi: 5.0,
  },
  {
    id: 4,
    date: new Date(2022, 3, 3, 5, 20, 30, 0),
    img: "./assets/imgs/product-4.jpg",
    location: "Location Name Goes Here",
    address: "Location Address Goes Here",
    tokenName: "TN123",
    shares: 1234.0,
    price: 123.0,
    grossYield: 123.0,
    roi: 5.0,
  },
  {
    id: 5,
    date: new Date(2022, 3, 3, 5, 20, 30, 0),
    img: "./assets/imgs/product-5.jpg",
    location: "Location Name Goes Here",
    address: "Location Address Goes Here",
    tokenName: "TN123",
    shares: 1234.0,
    price: 123.0,
    grossYield: 123.0,
    roi: 5.0,
  },
  {
    id: 6,
    date: new Date(2022, 3, 4, 5, 20, 30, 0),
    img: "./assets/imgs/product-6.jpg",
    location: "Location Name Goes Here",
    address: "Location Address Goes Here",
    tokenName: "TN123",
    shares: 1234.0,
    price: 123.0,
    grossYield: 123.0,
    roi: 5.0,
  },
  {
    id: 7,
    date: new Date(2022, 3, 6, 5, 20, 30, 0),
    img: "./assets/imgs/product-7.jpg",
    location: "Location Name Goes Here",
    address: "Location Address Goes Here",
    tokenName: "TN123",
    shares: 1234.0,
    price: 123.0,
    grossYield: 123.0,
    roi: 5.0,
  },
  {
    id: 8,
    date: new Date(2022, 3, 7, 5, 20, 30, 0),
    img: "./assets/imgs/product-8.jpg",
    location: "Location Name Goes Here",
    address: "Location Address Goes Here",
    tokenName: "TN123",
    shares: 1234.0,
    price: 123.0,
    grossYield: 123.0,
    roi: 5.0,
  },
  {
    id: 9,
    date: new Date(2022, 3, 3, 5, 20, 30, 0),
    img: "./assets/imgs/product-9.jpg",
    location: "Location Name Goes Here",
    address: "Location Address Goes Here",
    tokenName: "TN123",
    shares: 1234.0,
    price: 123.0,
    grossYield: 123.0,
    roi: 5.0,
  },
];

const Discover = () => {
  return (
    <MainLayout rootClassName="discover" title="DISCOVER">
      <div className="section search-container ">
        <Input
          rootClassName="hero-bottom-displaced"
          id="search"
          icon="./assets/imgs/input-icon-search.png"
          placeholder="Search your Property Here"
          btn="Search Here"
        />
      </div>

      <div className="section products">
        <div className="page-container">
          <div className="container-fluid px-0">
            <div className="row gy-5">
              {productsData.map((el, idx) => {
                return <DiscoverCard key={el.id} {...el} />;
              })}
            </div>
          </div>
        </div>

        <div className="pagination">
          <button>
            <img src="./assets/imgs/arrow-left.png" alt="prev" />
          </button>
          <button className="num">
            <div className="fw-600">3</div>
          </button>
          <button>
            <img src="./assets/imgs/arrow-right.png" alt="prev" />
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Discover;
