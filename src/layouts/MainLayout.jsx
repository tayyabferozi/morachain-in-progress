import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import clsx from "clsx";
import Dropdown from "../components/Dropdown";

const MainLayout = ({
  title,
  titleComp,
  children,
  rootClassName,
  bodyClassName,
  connectWalletHandler,
}) => {
  const [isSideNavActive, setisSideNavActive] = useState(false);

  const toggleSideNav = () => {
    setisSideNavActive((prevState) => !prevState);
  };

  return (
    <>
      <div
        onClick={toggleSideNav}
        className={clsx({ close: !isSideNavActive }, "dark-overlay")}
      ></div>
      <div className={clsx({ close: !isSideNavActive }, "sidenav")}>
        <div onClick={toggleSideNav} className="close">
          &times;
        </div>

        <Link to="/">
          <img width={100} src="./assets/imgs/logo.png" alt="logo" />
        </Link>

        <NavLink to="/">Home</NavLink>
        <NavLink to="/discover">Discover</NavLink>
        <NavLink to="/staking">Staking</NavLink>
        <NavLink to="/nfts">NFTs</NavLink>
        <NavLink to="/login">login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
        <Dropdown
          connectWalletHandler={connectWalletHandler}
          btn
          dropdownItems={["Metamask"]}
        >
          Connect
        </Dropdown>
      </div>

      <div className={clsx("main-layout", rootClassName)}>
        <div className="header">
          <div className="section navbar">
            <div className="page-container">
              <Link className="logo" to="/">
                <img src="./assets/imgs/logo.png" alt="logo" />
              </Link>
              <div className="nav hide-md">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/discover">Discover</NavLink>
                <NavLink to="/staking">Staking</NavLink>
                <NavLink to="/nfts">NFTs</NavLink>
                <NavLink to="/NFTPresale">NTS's Presale</NavLink>
                {/* <NavLink to="">Staking</NavLink> */}
              </div>
              <div className="account hide-md">
                <NavLink to="/login">login</NavLink>
                <NavLink to="/signup">Signup</NavLink>
                <Dropdown
                  connectWalletHandler={connectWalletHandler}
                  btn
                  dropdownItems={["Metamask"]}
                >
                  Connect
                </Dropdown>
              </div>
              <div className="menu show-md" onClick={toggleSideNav}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>

        <div className="section hero">
          <div className="bg"></div>
          <div className="page-container">{titleComp || <h1>{title}</h1>}</div>
        </div>

        <div className={clsx("main-layout-body", bodyClassName)}>
          {children}
        </div>

        <div className="section footer">
          <div className="bg"></div>
          <div className="page-container">
            <div className="footer-main">
              <div className="item">
                <img src="./assets/imgs/phone.png" alt="phone" />

                <h3>CONTACT NUMBER</h3>

                <p>012-345-6789-0000</p>
              </div>
              <div className="item">
                <img src="./assets/imgs/mail.png" alt="mail" />

                <h3>EMAIL ADDRESS</h3>

                <p>info@company.com</p>
              </div>
              <div className="item">
                <img src="./assets/imgs/phone.png" alt="phone" />

                <h3>OUR ADDRESS</h3>

                <p>
                  213 Street Lorem Ipsum state <br /> United state of Ameriac
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="section copyright">
          <div className="page-container">
            <p>Morachain © copyrights.2022 All Right Reserved</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
