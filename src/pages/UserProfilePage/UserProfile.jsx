import React, {useEffect, useState} from 'react';
import banner from '../../img/user/banner.jpg';
import user_avatar from '../../img/user/user_avatar.gif';
import gradient_light from '../../img/gradient_light.jpg';
import { PageTitle } from '../../components/PageTitle';
import { GridNFT } from '../../components/GridNFT';
import item_5 from '../../img/products/item_5.jpg';
import item_4 from '../../img/products/item_4.jpg';
import item_7 from '../../img/products/item_7.jpg';
import item_6 from '../../img/products/item_6.jpg';
import item_8 from '../../img/products/item_8.jpg';
import item_9 from '../../img/products/item_9.jpg';
import item_10 from '../../img/products/item_10.jpg';
import item_11 from '../../img/products/item_11.gif';
import { UserNavigation } from '../../components/UserNavigation';
import { CopyLink } from '../../components/CopyLink';
import { Activity } from '../../components/Activity';
import { UserFilters } from '../../components/UserFilters';
import { UserMenu } from '../../components/UserMenu';
import {useQuery} from "react-query";
import axios from "axios";
import {proxy, useSnapshot} from "valtio";
import DemoState from "../../stores/DemoState";
import AppState from "../../AppState";
import {Modal} from "../../components/Modal";
import {HeaderModal} from "../../components/HeaderModal";
import apiClient from "../../apiClient";


/*function useUserProfile() {
  return useQuery(["getUserProfile"], async () => {
    const accessToken = localStorage.getItem(`accessToken`);
    const { data } = await axios.get(
        "https://api.skyhall.io/api/v1/user/profile", {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
    );
    return data;
  });
}*/


const UserProfile = () => {
  const state = proxy(AppState)
  const snap = useSnapshot(state);
  // console.log(`UserProfile = ${JSON.stringify(state)}`);
  // const snap = useSnapshot(state)
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // const { status, data: userProfileData, error, isFetching } = useUserProfile();
  // console.log(`UserProfile data = ${JSON.stringify(userProfileData)}`);

/*
  if(!error) {
    state.profile = userProfileData.profile;
    console.log(`UserProfile data = ${JSON.stringify(userProfileData)}`);
  }
*/
  useEffect(() => {
    (async () => {
      const {data} = await apiClient('/user/profile');
      //alert(JSON.stringify(data));
      const {statusCode} = data;
      if(data && data.result === 'ok') {
        state.profile = data.profile;
        console.log(`state.profile = ${JSON.stringify(state.profile)}`);
      }
    })();
  }, []);

  // "https://resource.skyhall.io/assets/" + state.profile.profileFilePath

  const [activeWindow, setActiveWindow] = useState('onSale');
  return (
    <main className='pt-[5.5rem] lg:pt-24'>
      <div className='relative'>
        <img src={banner} className='h-[18.75rem] object-cover' alt='banner' />
      </div>


      {modalIsOpen && (
          <Modal
              onClick={async () => {
                //await openMetamask();
                //setModalIsOpen(false);
              }}
              styledWrapper='modal-dialog max-w-lg'
              setModalIsOpen={setModalIsOpen}
              title='Connect your wallet'
              btnTitle='Get Metamask'
              childrenBody={<HeaderModal />}
          />
      )}

      <section className='relative bg-light-base pb-12 pt-28 dark:bg-jacarta-800'>
        <div className='absolute left-1/2 top-0 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center'>
          <figure className='relative'>
            {
              snap.profile && state.profile.profileFilePath ? <img
                      src={state.profile && ("https://resource.skyhall.io/assets/" + state.profile.profileFilePath)}
                      alt='collection avatar'
                      className='rounded-xl border-[5px] border-white dark:border-jacarta-600'
                      width="160" height="160"
                  />
                  : <img src={user_avatar} alt="collection avatar"
                         className="dark:border-jacarta-600 rounded-xl border-[5px] border-white"/>
            }
            <div
              className='absolute -right-3 bottom-0 flex h-6 w-6 items-center justify-center rounded-full border-2 
							border-white bg-green dark:border-jacarta-600'
              data-tippy-content='Verified Collection'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                width='24'
                height='24'
                className='h-[.875rem] w-[.875rem] fill-white'>
                <path fill='none' d='M0 0h24v24H0z'></path>
                <path d='M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z'></path>
              </svg>
            </div>
          </figure>
        </div>

        <div className='container'>
          <div className='text-center'>
            <PageTitle title={snap.profile.username} />
            <CopyLink walletAddress={snap.profile.address}/>
            <p className='mx-auto mb-2 max-w-xl text-lg dark:text-jacarta-300'>
              {snap.profile.bio}
            </p>
            {/*<span className='text-jacarta-400'>Joined December 2019</span>*/}
          </div>
        </div>
        <UserMenu />
      </section>


      {
        snap.profile.address &&
        <section className='relative py-24 pt-20'>
          <picture className='pointer-events-none absolute inset-0 -z-10 dark:hidden'>
            <img src={gradient_light} alt='gradient' className='h-full w-full' />
          </picture>

          <div className='container'>
            <UserNavigation setActiveWindow={setActiveWindow} />
            {activeWindow === 'onSale' && <UserFilters />}
            {activeWindow === 'onSale' && (
                <div className='grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4'>
                  <GridNFT
                      url={item_5}
                      name='Flourishing Cat#180'
                      price='From 8.49 ETH'
                      quantity='2/8'
                  />
                  <GridNFT url={item_4} name='Amazing NFT art' price='From 5.9 ETH' quantity='1/7' />
                  <GridNFT url={item_7} name='SwagFox#133' price='0.078 ETH' quantity='1/3' />
                  <GridNFT url={item_6} name='Splendid Girl' price='10 ETH' quantity='2/3' />
                  <GridNFT url={item_8} name='Monkeyme#155' price='From 5 FLOW' quantity='1/1' />
                  <GridNFT url={item_9} name='Jedidia#149' price='0.16 ETH' quantity='1/1' />
                  <GridNFT url={item_10} name='Artof Eve' price='0.13 FLOW' quantity='1/1' />
                  <GridNFT url={item_11} name='Asuna #1649' price='0.8 ETH' quantity='1/1' />
                </div>
            )}
            {activeWindow === 'owned' && <UserFilters />}
            {activeWindow === 'owned' && (
                <div className='grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4'>
                  <GridNFT url={item_8} name='Monkeyme#155' price='From 5 FLOW' quantity='1/1' />
                  <GridNFT url={item_10} name='Artof Eve' price='0.13 FLOW' quantity='1/1' />
                  <GridNFT url={item_6} name='Splendid Girl' price='10 ETH' quantity='2/3' />
                  <GridNFT
                      url={item_5}
                      name='Flourishing Cat#180'
                      price='From 8.49 ETH'
                      quantity='2/8'
                  />
                  <GridNFT url={item_4} name='Amazing NFT art' price='From 5.9 ETH' quantity='1/7' />
                  <GridNFT url={item_11} name='Asuna #1649' price='0.8 ETH' quantity='1/1' />
                  <GridNFT url={item_7} name='SwagFox#133' price='0.078 ETH' quantity='1/3' />
                  <GridNFT url={item_9} name='Jedidia#149' price='0.16 ETH' quantity='1/1' />
                </div>
            )}
            {activeWindow === 'created' && <UserFilters />}
            {activeWindow === 'created' && (
                <div className='grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4'>
                  <GridNFT url={item_7} name='SwagFox#133' price='0.078 ETH' quantity='1/3' />
                  <GridNFT
                      url={item_5}
                      name='Flourishing Cat#180'
                      price='From 8.49 ETH'
                      quantity='2/8'
                  />
                  <GridNFT url={item_6} name='Splendid Girl' price='10 ETH' quantity='2/3' />
                  <GridNFT url={item_11} name='Asuna #1649' price='0.8 ETH' quantity='1/1' />
                  <GridNFT url={item_9} name='Jedidia#149' price='0.16 ETH' quantity='1/1' />
                  <GridNFT url={item_10} name='Artof Eve' price='0.13 FLOW' quantity='1/1' />
                  <GridNFT url={item_8} name='Monkeyme#155' price='From 5 FLOW' quantity='1/1' />
                  <GridNFT url={item_4} name='Amazing NFT art' price='From 5.9 ETH' quantity='1/7' />
                </div>
            )}
            {activeWindow === 'activity' && <Activity />}
          </div>
        </section>
      }

    </main>
  );
};

export { UserProfile };
