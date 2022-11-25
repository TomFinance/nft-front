import React from 'react';
import gradient from '../../img/gradient.jpg';
import gradient_dark from '../../img/gradient_dark.jpg';
import { TopCreatorMain } from '../../components/TopCreatorMain';
import { CreateAndSell } from '../../components/CreateAndSellMain';
import { Partners } from '../../components/Partners';
import { FeaturedCollection } from '../../components/FeaturedCollection/FeaturedCollection';
import { BgSwiper } from '../../components/BgSwiper';
import { Link } from 'react-router-dom';
import DemoState from "../../stores/DemoState";
import {proxy, useSnapshot} from "valtio";
import axios from 'axios';
import useIndexQuery from "../../hooks/query/useIndexQuery";
import {GridNFT} from "../../components/GridNFT";
import item_5 from "../../img/products/item_5.jpg";
import item_4 from "../../img/products/item_4.jpg";
import item_7 from "../../img/products/item_7.jpg";
import item_6 from "../../img/products/item_6.jpg";
import item_8 from "../../img/products/item_8.jpg";
import item_9 from "../../img/products/item_9.jpg";
import item_10 from "../../img/products/item_10.jpg";
import item_11 from "../../img/products/item_11.gif";
import gradient_light from "../../img/gradient_light.jpg";
import {SwiperSlide} from "swiper/react";
import {SlideElement} from "../../components/BgSwiper/SlideElement";
import {useQuery} from "react-query";
import {UserNavigation} from "../../components/UserNavigation";
import {UserFilters} from "../../components/UserFilters";
import {Activity} from "../../components/Activity";
//import useMarketSalesListQuery from "../../hooks/query/useMarketSalesListQuery";
import AppState from "../../AppState";

function usePosts() {
  return useQuery(["posts"], async () => {
    const { data } = await axios.get(
      "https://api.skyhall.io/api/v1/market/sale/list"
    );
    return data;
  });
}

const NFTListPage = () => {
  const state = proxy(AppState);
  // const { indexData: indexData } = useMarketSalesListQuery();
  // console.log(`indexData = ${JSON.stringify(indexData)}`)
  const { status, data, error, isFetching } = usePosts();
  state.nftListData = data;
  //console.log('aaa= ' + JSON.stringify(data));

  return (
    <main>
      <section className='relative py-24 pt-20'>
        <picture className='pointer-events-none absolute inset-0 -z-10 dark:hidden'>
          <img src={gradient_light} alt='gradient' className='h-full w-full' />
        </picture>

        <div className='container'>
          {(
            <div className='grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4'>
              {
                (status === "loading" || status === 'error') ? "Loading..." : (
                  state.nftListData.items.map(({id, collectionAsset}) =>
                  <GridNFT
                      id={id}
                      url={`https://resource.skyhall.io/assets/${collectionAsset.imageUrl}`}
                      name={collectionAsset.description}
                      price='1 KLAY'
                  />))
              }
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export { NFTListPage };

{/*
      <FeaturedCollection
        data={(indexData && indexData.nftFeaturedCollections) ? indexData.nftFeaturedCollections : []}/>
      <Partners />
*/}
