import React, { useState, useEffect } from "react";
import gradient from "../../img/gradient.jpg";
import gradient_dark from "../../img/gradient_dark.jpg";
import { TopCreatorMain } from "../../components/TopCreatorMain";
import { CreateAndSell } from "../../components/CreateAndSellMain";
import { Partners } from "../../components/Partners";
import { FeaturedCollection } from "../../components/FeaturedCollection/FeaturedCollection";
import { BgSwiper } from "../../components/BgSwiper";
import { Link } from "react-router-dom";
//import DemoState from "../../stores/DemoState";
import DemoStateMerge from "../../stores/DemoStateMerge";
import { proxy, useSnapshot } from "valtio";
import useIndexQuery from "../../hooks/query/useIndexQuery";
import { Modal } from "../../components/Modal/Modal";

const MainPage = () => {
  //const state = proxy(DemoState);
  //const { indexData: indexData } = useIndexQuery();

  //console.log(`indexData = ${JSON.stringify(indexData)}`)
  const [modalIsOpen, setModalIsOpen] = useState(true);

  return (
    <main>
      <section className="hero relative py-20 md:pt-32">
        <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">
          <img src={gradient} alt="gradient" />
        </picture>
        <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block">
          <img src={gradient_dark} alt="gradient dark" />
        </picture>
        <div className="container">
          <div className="py-24 text-center">
            <h1 className="mb-6 font-display text-5xl text-jacarta-700 dark:text-white lg:text-6xl xl:text-7xl">
              Collect Digital Art.
            </h1>
            <p className="mb-8 text-lg dark:text-jacarta-200">
              Multi-chain based DeFi and NFT platform
            </p>
            <div className="inline-flex space-x-4">
              <Link
                to="/create"
                className="w-36 rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all
								hover:bg-accent-dark"
              >
                Create
              </Link>
              <Link
                to="/collections"
                className="w-36 rounded-full bg-white py-3 px-8 text-center font-semibold text-accent shadow-white-volume transition-all
								hover:bg-accent-dark hover:text-white hover:shadow-accent-volume"
              >
                Item
              </Link>
            </div>
          </div>

          <BgSwiper
            data={JSON.parse(
              DemoStateMerge.nftRandom(10)
            )} /*state.nftRepresentatives}*/
            /*data={(indexData && indexData.nftRepresentatives) ? indexData.nftRepresentatives : []}*/
          />
        </div>
      </section>
      {/*<TopCreatorMain
        data={(indexData && indexData.nftTopCreators) ? indexData.nftTopCreators : []}/>
  <CreateAndSell />*/}
      {/*<FeaturedCollection
        data={(indexData && indexData.nftFeaturedCollections) ? indexData.nftFeaturedCollections : []}/>
<Partners />*/}
      <FeaturedCollection data={JSON.parse(DemoStateMerge.nftRandom(10))} />
      <Partners />
      {modalIsOpen && (
        <Modal
          setModalIsOpen={setModalIsOpen}
          title="Member purchase/Discount ticket purchase"
          btnTitle="Copy"
          styledWrapper="modal-dialog max-w-lg"
          childrenBody={
            <div className="modal-body p-6">
              <p className="mb-8 dark:text-jacarta-300">
                Send to below wallet address and send TXID to <br />
                foundation email address(
                <a href="mailto:tom@tom.finance">tom@tom.finance</a>)
              </p>
              <p>0x72b30CF8FfE8e6735eF8c670aE897EE8486B1ec0</p>
            </div>
          }
          onClick={async function () {
            await window.navigator.clipboard.writeText(
              "0x72b30CF8FfE8e6735eF8c670aE897EE8486B1ec0"
            );
            alert("Copied!");
            setModalIsOpen(false);
          }}
        ></Modal>
      )}
    </main>
  );
};

export { MainPage };
