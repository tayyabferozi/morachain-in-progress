import React, { useCallback, useEffect, useState } from "react";

import MainLayout from "../layouts/MainLayout";
import MoraChainHero from "../partials/MoraChainHero";
import Input from "../components/Input";
import { ethers } from "ethers";

const Landing = () => {
  const [
    // errorMessage,
    setErrorMessage,
  ] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [
    // userBalance,
    setUserBalance,
  ] = useState(null);
  const [connButtonText, setConnButtonText] = useState("");
  const [provider, setProvider] = useState(null);

  const connectWalletHandler = useCallback(
    (click) => {
      if (window.ethereum && defaultAccount == null) {
        // set ethers provider
        setProvider(new ethers.providers.Web3Provider(window.ethereum));

        // connect to metamask
        window.ethereum
          .request({ method: "eth_requestAccounts" })
          .then((result) => {
            if (click) {
              localStorage.setItem("mask", "login");
            }

            setDefaultAccount(result[0]);
            setConnButtonText(
              `${result[0].slice(0, 6)}...${result[0].substring(
                result[0].length - 4
              )}`
            );
          })
          .catch((error) => {
            setErrorMessage(error.message);
          });
      } else if (!window.ethereum) {
        window.open("https://metamask.io/", "_blank");
        setErrorMessage(
          "Please install MetaMask browser extension to interact"
        );
      }
    },
    [defaultAccount, setErrorMessage]
  );

  useEffect(() => {
    const checkMask = localStorage.getItem("mask");

    if (defaultAccount) {
      provider.getBalance(defaultAccount).then((balanceResult) => {
        setUserBalance(ethers.utils.formatEther(balanceResult));
      });
    }

    if (checkMask === "login") {
      connectWalletHandler();
    }
  }, [provider, setUserBalance, connectWalletHandler, defaultAccount]);

  return (
    <MainLayout
      connectWalletHandler={connectWalletHandler}
      rootClassName="landing"
      titleComp={<MoraChainHero />}
    >
      <div className="section stats px-4">
        <div className="page-container">
          <div className="hero-bottom-displaced">
            <div className="container-fluid px-0">
              <div className="top d-flex justify-content-between align-items-center">
                <div className="">
                  <img
                    className="logo-dark"
                    src="./assets/imgs/logo-dark.png"
                    alt="logo"
                  />
                </div>
                <div className="">
                  <h4>Morachain</h4>
                  <strong>123.000</strong>
                </div>
                <div className="">
                  <h4>Total token supply:</h4>
                  <strong>99,805,267.06</strong>
                </div>
                <div className="">
                  <h4>Circulating Supply:</h4>
                  <strong>2,332,159.15</strong>
                </div>
                <div className="">
                  <h4>Fully diluted Market Cap:</h4>
                  <strong>$3,728,376.74</strong>
                </div>
                <div className="">
                  <h4>Market Cap:</h4>
                  <strong>$87,121.33</strong>
                </div>
              </div>

              <div className="bottom d-flex justify-content-between align-items-center mt-5">
                <div className="">
                  <Input
                    rootClassName="mt-0"
                    rightIcon="./assets/imgs/copy.png"
                    fancyLabel="Mor Address"
                    value={connButtonText}
                  />
                </div>
                <div className="">
                  <Input
                    rootClassName="mt-0"
                    rightIcon="./assets/imgs/copy.png"
                    fancyLabel="Pair Address"
                    value={connButtonText}
                  />
                </div>
                <div className="">
                  <Input
                    rootClassName="mt-0"
                    rightIcon="./assets/imgs/copy.png"
                    fancyLabel="Burn Address"
                    value={connButtonText}
                  />
                </div>
                <div className="flex-shrink-0">
                  <button className="btn btn-gradient fs-18">
                    Buy Morhain
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section listed text-center">
        <div className="page-container">
          <h2>
            <span className="text-grad">Morachain</span> Token <br />
            is now listed on:
          </h2>

          {/* <p className="mt-5 text-light-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p> */}

          <div className="mt-4">
            <div className="listing-cards">
              <div className="container-fluid px-0">
                <div className="row gy-5">
                  <div className="col-lg-3 col-sm-6">
                    <div className="card">
                      <img src="./assets/imgs/listing-1.png" alt="listing" />
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="card">
                      <img src="./assets/imgs/listing-2.png" alt="listing" />
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="card">
                      <img src="./assets/imgs/listing-3.png" alt="listing" />
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="card">
                      <img src="./assets/imgs/listing-4.png" alt="listing" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ox-hidden">
        <div className="section real-estate">
          <div className="bg"></div>
          <div className="page-container">
            <div className="container-fluid px-0">
              <div className="row flex-lg-row flex-column-reverse">
                <div className="col-lg-8">
                  <h2>
                    World’s First Decentralized Real Estate NFT Marketplace with
                    Metaverse
                  </h2>

                  <p className="mt-3">
                    Morachain is the trailblazer in Fractionalizing the NFT of
                    real estate assets. We have likewise changed this by making
                    a computerized resource of this real-world property asset.
                    We at Morachain have zeroed in on giving a consistent
                    experience with transactions in a digital format by
                    canceling out all middlemen through this platform.
                  </p>

                  <p className="mt-3">
                    We let sellers tokenize resources, basically dealing with it
                    like a stock sale, and liquidating that resource through a
                    token deal utilizing the platform. The gathered tokens can
                    be traded for fiat money, with purchasers possessing a
                    percentage stake of the property.
                  </p>
                </div>

                <div className="col-lg-4">
                  <img
                    style={{ maxWidth: 410 }}
                    className="side-vector"
                    src="./assets/imgs/morachain-vector-1.png"
                    alt="morachain-vector-1.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section tokenization">
        <div className="page-container">
          <div className="container-fluid px-0">
            <div className="row">
              <div className="col-lg-6">
                <img
                  style={{ maxWidth: 662 }}
                  src="./assets/imgs/morachain-vector-2.png"
                  alt="morachain-vector-2"
                  className="side-vector"
                />
              </div>
              <div className="col-lg-6">
                <div className="text">
                  <h2>
                    <span className="text-grad">Tokenization</span> Platform
                  </h2>

                  <p className="mt-3 text-light-2">
                    Morachain has a platform that tokenizes property resources
                    in the real worth of real estate metrics that is Sq. ft. A
                    minimum share in the property is 1 sq. ft. that can be
                    bought. With properties going from reasonable housing to
                    ultra-luxury - the tokenization platform, Morachain, was
                    launched in the year XYZ exclusively.
                  </p>

                  <p className="mt-3 text-light-2">
                    After realizing that through blockchain technology, it is
                    possible that more individuals can access the real estate
                    market we introduced our platform. We observed that the
                    exchanges and transactions can be made more straightforward,
                    safe, and equitable. Real estate transactions may ultimately
                    turn out to be really a peer-to-peer practice with
                    blockchain-powered platforms doing the most of the work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section metaverse">
        <div className="bg"></div>
        <div className="page-container">
          <div className="container-fluid px-0">
            <div className="row flex-lg-row flex-column-reverse">
              <div className="col-lg-6">
                <h1>Metaverse</h1>

                <p className="mt-3">
                  Morachain is the virtual Metaverse of our platform. Purchasing
                  a property in whole or in portions will make the client
                  eligible to ensure and claim a similar region in the virtual
                  land. The land on our platform must be claimed by buying a
                  listed property at Morachain. It is an independent NFT that
                  purchasers will guarantee with the gamified utility of the
                  platform.
                </p>
              </div>

              <div className="col-lg-6">
                <img
                  style={{ maxWidth: 395 }}
                  className="side-vector"
                  src="./assets/imgs/morachain-vector-3.png"
                  alt="morachain-vector-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section p-2-e">
        <div className="page-container text-center">
          <h2>
            Play 2 Earn <span className="text-grad">(P2E)</span>
          </h2>
          <p className="text-light-2 mt-5">
            The virtual land on the Morachain platform once claimed gives the
            client a choice to assemble, create and populate the land with
            resources and commercial monetization. The platform is a free NFT
            that can be sold on NFT markets or brought into the gaming metaverse
            of any accomplice land exploration games. The game available at the
            Morachain platform has its own resources that can be bought with the
            tokens.
          </p>
        </div>
      </div>

      <div className="section showcase">
        <div className="page-container">
          <div className="container-fluid px-0">
            <div className="row gy-4">
              <div className="col-xxl-6 col-md-7"></div>
              <div className="col-xxl-6 col-md-5">
                <div className="row main-row">
                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-main">
                        <img src="./assets/imgs/nft-showcase-1.png" alt="nft" />

                        <h6>NFT</h6>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-main">
                        <img src="./assets/imgs/nft-showcase-2.png" alt="nft" />

                        <h6>METAVERSE</h6>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-main">
                        <img src="./assets/imgs/nft-showcase-3.png" alt="nft" />

                        <h6>FRACTIONALIZATION</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section why-us">
        <div className="page-container">
          <div className="text">
            <h2>
              Why <span className="text-grad">Morachain</span>
            </h2>

            <p className="mt-4 text-light-2">
              Morachain offers a unique way for opening and unlocking NFT
              liquidity and gives local community admittance to possessing
              portions of notable and valuable Real Estate NFTs.
            </p>
          </div>

          <div className="cards mt-5">
            <div className="container-fluid px-0">
              <div className="row gy-4">
                <div className="col-lg-3">
                  <div className="card">
                    <img src="./assets/imgs/why-us-1.png" alt="why-us" />
                    <img
                      className="bg-card"
                      src="./assets/imgs/bg-card-1.png"
                      alt="bg-card"
                    />

                    <div className="text">
                      <h3>ACCESSIBILITY</h3>

                      <p className="text-light-2">
                        Get admittance to the best real estate deals that were
                        simply accessible to institutional investors. Invest in
                        land in fractions and gain profits with capital
                        appreciation.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card">
                    <img src="./assets/imgs/why-us-2.png" alt="why-us" />
                    <img
                      className="bg-card"
                      src="./assets/imgs/bg-card-2.png"
                      alt="bg-card"
                    />

                    <div className="text">
                      <h3>FREEDOM</h3>

                      <p className="text-light-2">
                        No lock-in period on investments and no barrier to
                        selective deals delivered on the tokenization stage.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card">
                    <img src="./assets/imgs/why-us-3.png" alt="why-us" />
                    <img
                      className="bg-card"
                      src="./assets/imgs/bg-card-3.png"
                      alt="bg-card"
                    />

                    <div className="text">
                      <h3>DIVERSITY</h3>

                      <p className="text-light-2">
                        Get deals of investments from affordable housing to
                        extravagance and ultra-private properties in fractions.
                        Admittance to worldwide properties and other resource
                        classes like business, retail, and hospitality.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card">
                    <img src="./assets/imgs/why-us-4.png" alt="why-us" />
                    <img
                      className="bg-card"
                      src="./assets/imgs/bg-card-4.png"
                      alt="bg-card"
                    />

                    <div className="text">
                      <h3>CREATIVITY</h3>

                      <p className="text-light-2">
                        With the P2E opportunity accessible the users have
                        unlimited possibilities in the mind of what can be
                        created and adapted.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section fractional-ownership">
        <div className="bg"></div>
        <div className="page-container">
          <div className="container-fluid px-0">
            <div className="row">
              <div className="col-lg-5">
                <img
                  style={{ maxWidth: 720 }}
                  src="./assets/imgs/morachain-vector-4.png"
                  alt="morachain-vector-4.png"
                  className="side-vector"
                />
              </div>
              <div className="col-lg-7">
                <div className="text">
                  <h2>What is Fractional Ownership</h2>

                  <p className="mt-3">
                    Fractional ownership is a technique where a few random
                    entities or parties can partake, mitigate the risk, or own a
                    worthy tangible resource, like a yacht, jet, or piece of the
                    resort property. It tends to be completed for strict
                    monetary results, however, typically there is some measure
                    of individual access included.
                  </p>

                  <p className="mt-3">
                    In fractional ownership, you own a share of the actual land,
                    and you are given a deed for the property, not a period that
                    you can utilize the home. This keeps the costs lower than
                    the entire possession, however, you actually approach the
                    home in case if you are happy with the sharing model.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="section token-utility">
        <div className="page-container">
          <div className="text text-center">
            <h2>
              <span className="text-grad">Morchain</span> Token Utility
            </h2>

            <p className="text-light-2 mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="container-fluid px-0">
            <div className="row gx-5 gy-4">
              <div className="col-lg-6 d-flex align-items-center justify-content-center">
                <img
                  className="w-100"
                  src="./assets/imgs/coin.png"
                  alt="coin"
                />
              </div>
              <div className="col-lg-6">
                <div className="right">
                  <ul>
                    <li>Lorem Ipsum is simply dummy tex</li>
                    <li>Lorem Ipsum is simply dummy tex</li>
                    <li>Lorem Ipsum is simply dummy tex</li>
                    <li>Lorem Ipsum is simply dummy tex</li>
                    <li>Lorem Ipsum is simply dummy tex</li>
                    <li>Lorem Ipsum is simply dummy tex</li>
                    <li>Lorem Ipsum is simply dummy tex</li>
                    <li>Lorem Ipsum is simply dummy tex</li>
                    <li>Lorem Ipsum is simply dummy tex</li>
                    <li>Lorem Ipsum is simply dummy tex</li>
                    <li>Lorem Ipsum is simply dummy tex</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Landing;
