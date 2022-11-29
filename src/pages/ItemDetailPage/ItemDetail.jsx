import React, { useState } from 'react';
import gradient_light from '../../img/gradient_light.jpg';
import item_single_large from '../../img/products/item_single_large.jpg';
import {Link, useParams} from 'react-router-dom';
import avatar_1 from '../../img/avatars/avatar_1.jpg';
import avatar_7 from '../../img/avatars/avatar_7.jpg';
import TOM from '../../img/chains/TOM.png';
import { ItemTabs } from '../../components/ItemTabs';
import { Offers } from '../../components/ItemTabs/Offers';
import { Properties } from '../../components/ItemTabs/Properties/Properties';
import { Details } from '../../components/ItemTabs/Details';
import { Activity } from '../../components/ItemTabs/Activity';
import { PriceHistory } from '../../components/ItemTabs/PriceHistory';
import { SmSwiper } from '../../components/SmSwiper';
import item_1 from '../../img/products/item_1.jpg';
import item_2 from '../../img/products/item_2.jpg';
import item_6 from '../../img/products/item_6.jpg';
import item_4 from '../../img/products/item_4.jpg';
import item_3 from '../../img/products/item_3.gif';
import item_5 from '../../img/products/item_5.jpg';
import { Modal } from '../../components/Modal';
import { ModalBodyBuy } from '../../components/ModalBodyBuy';
import { ItemDropMenu } from '../../components/ItemDropMenu';
import {proxy} from "valtio";
import AppState from "../../AppState";
import {GridNFT} from "../../components/GridNFT";

const ItemDetail = () => {
  const state = proxy(AppState);
  const { itemId } = useParams();

  const [activeTab, setActiveTab] = useState('offers');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const nftDatas = state.nftListData.items.filter(x => x.id === parseInt(itemId));
  const nftData = nftDatas[0];
  console.log(JSON.stringify(nftData))
  const {collectionAsset} = nftData;

  // alert(collectionAsset.collectionAccountId)

/*  (({id, collectionAsset}) =>
      <GridNFT
          id={id}
          url={`https://resource.skyhall.io/assets/${collectionAsset.imageUrl}`}
          name={collectionAsset.description}
          price='From 8.49 ETH'
          quantity='2/8'
      />))*/

  return (
    <main className='mt-24'>
      {modalIsOpen && (
        <Modal
          setModalIsOpen={setModalIsOpen}
          title='Buy'
          btnTitle='Buy now'
          childrenBody={<ModalBodyBuy />}
          styledWrapper='modal-dialog max-w-2xl'
        />
      )}
      <section className='relative pt-12 pb-24 lg:py-24'>
        <picture className='pointer-events-none absolute inset-0 -z-10 dark:hidden'>
          <img src={gradient_light} alt='gradient' className='h-full' />
        </picture>
        <div className='container'>
          <div className='md:flex md:flex-wrap'>
            <figure className='mb-8 md:w-2/5 md:flex-shrink-0 md:flex-grow-0 md:basis-auto lg:w-1/2'>
              <img
                src={`https://resource.skyhall.io/assets/${collectionAsset.imageUrl}`}
                alt='item'
                className='cursor-pointer rounded-2.5xl'
                data-bs-toggle='modal'
                data-bs-target='#imageModal'
              />
            </figure>
            <div className='md:w-3/5 md:basis-auto md:pl-8 lg:w-1/2 lg:pl-[3.75rem]'>
              <div className='mb-3 flex'>
                <h1 className='mb-0 font-display text-4xl font-semibold text-jacarta-700 dark:text-white'>
                  {collectionAsset.name}
                </h1>
                <div className='ml-auto flex space-x-2'>
                  <div
                    className='flex items-center space-x-1 rounded-xl border border-jacarta-100 bg-white py-2 px-4 
									dark:border-jacarta-600 dark:bg-jacarta-700'>
                    <span
                      className='js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-cover 
											before:bg-center before:bg-no-repeat before:opacity-0'
                      data-tippy-content='Favorite'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        width='24'
                        height='24'
                        className='h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red'>
                        <path fill='none' d='M0 0H24V24H0z'></path>
                        <path
                          d='M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 
												8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 
												1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 
												1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z'></path>
                      </svg>
                    </span>
                    <span className='text-sm dark:text-jacarta-200'>188</span>
                  </div>
                  <div
                    className='dropdown relative rounded-xl border border-jacarta-100 bg-white hover:bg-jacarta-100 
									dark:border-jacarta-600 dark:bg-jacarta-700 dark:hover:bg-jacarta-600'>
                    <Link
                      onClick={() => setMenuIsOpen((prev) => !prev)}
                      to='#'
                      className='dropdown-toggle inline-flex h-10 w-10 items-center justify-center text-sm'
                      role='button'
                      id='collectionActions'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'>
                      <svg
                        width='16'
                        height='4'
                        viewBox='0 0 16 4'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='fill-jacarta-500 dark:fill-jacarta-200'>
                        <circle cx='2' cy='2' r='2'></circle>
                        <circle cx='8' cy='2' r='2'></circle>
                        <circle cx='14' cy='2' r='2'></circle>
                      </svg>
                    </Link>
                    {menuIsOpen && <ItemDropMenu />}
                  </div>
                </div>
              </div>

              <p className='mb-10 dark:text-jacarta-300'>
                {collectionAsset.description}
              </p>
              <div className='mb-8 flex flex-wrap'>
                <div className='mr-8 mb-4 flex'>
                  <figure className='mr-4 shrink-0'>
                    <Link to='/user' className='relative block'>
                      <img src={avatar_7} alt='avatar 7' className='rounded-2lg' loading='lazy' />
                      <div
                        className='absolute -right-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 
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
                    </Link>
                  </figure>
                  <div className='flex flex-col justify-center'>
                    <span className='block text-sm text-jacarta-400 dark:text-white'>
                      Creator <strong>x% royalties</strong>
                    </span>
                    <Link to='user.html' className='block text-accent'>
                      <span className='text-sm font-bold'>@-</span>
                    </Link>
                  </div>
                </div>
                <div className='mb-4 flex'>
                  <figure className='mr-4 shrink-0'>
                    <a href='user.html' className='relative block'>
                      <img src={avatar_1} alt='avatar 1' className='rounded-2lg' loading='lazy' />
                      <div
                        className='absolute -right-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 
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
                    </a>
                  </figure>
                  <div className='flex flex-col justify-center'>
                    <span className='block text-sm text-jacarta-400 dark:text-white'>
                      Owned by
                    </span>
                    <a href='user.html' className='block text-accent'>
                      <span className='text-sm font-bold'>{nftData.sellerAccount.name}</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className='rounded-2lg border border-jacarta-100 bg-white p-8 dark:border-jacarta-600 dark:bg-jacarta-700'>
                <div className='mb-8 sm:flex sm:flex-wrap'>
                  <div className=''>
                    <div className='block overflow-hidden text-ellipsis whitespace-nowrap'>
                      <span lass='text-accent text-sm font-bold'>Current price</span>
                    </div>
                    <div className='mt-3 flex'>
                      <div>
                        <div className='flex items-center whitespace-nowrap'>
                          <span className='-ml-1' data-tippy-content='ETH'>
                            <img src={TOM} alt='TOM' className='mr-2 h-10 w-10 rounded-full' />
                          </span>
                          <span className='text-4xl font-medium leading-tight tracking-tight text-green'>
                            {"1"} TOM
                          </span>
                          <span className='ml-2 text-lg text-jacarta-400 dark:text-jacarta-300'>
                            {/*($200.21)*/}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  onClick={() => setModalIsOpen(true)}
                  to='#'
                  data-bs-toggle='modal'
                  data-bs-target='#placeBidModal'
                  className='inline-block w-full rounded-full bg-accent py-3 px-8 text-center font-semibold text-white 
									shadow-accent-volume transition-all hover:bg-accent-dark'>
                  Buy now
                </Link>
              </div>
            </div>
          </div>

          <div className='scrollbar-custom mt-14 overflow-x-auto rounded-lg'>
            <div className='min-w-fit'>
              <ItemTabs setActiveTab={setActiveTab} />
              <div className='tab-content'>
                {activeTab === 'offers' && <Offers />}
                {activeTab === 'properties' && <Properties />}
                {activeTab === 'details' && <Details />}
                {activeTab === 'activity' && <Activity />}
                {activeTab === 'priceHistory' && <PriceHistory />}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-light-base py-24 dark:bg-jacarta-800'>
        <div className='container'>
          <h2 className='mb-8 text-center font-display text-3xl text-jacarta-700 dark:text-white'>
            More from this items
          </h2>
          <SmSwiper data={data} />
        </div>
      </section>
    </main>
  );
};

// nftData.price

const data = [
  {
    url: item_1,
    alt: 'item',
    title: 'ETH Me Outside',
    likes: '159',
    countComment: '10',
    currentBid: '1.3 TOM',
  },
  {
    url: item_2,
    alt: 'item',
    title: 'ETH Me Outside',
    likes: '159',
    countComment: '10',
    currentBid: '1.3 TOM',
  },
  {
    url: item_6,
    alt: 'item',
    title: 'ETH Me Outside',
    likes: '159',
    countComment: '10',
    currentBid: '1.3 TOM',
  },
  {
    url: item_4,
    alt: 'item',
    title: 'ETH Me Outside',
    likes: '159',
    countComment: '10',
    currentBid: '1.3 TOM',
  },
  {
    url: item_3,
    alt: 'item',
    title: 'ETH Me Outside',
    likes: '159',
    countComment: '10',
    currentBid: '1.3 TOM',
  },
  {
    url: item_5,
    alt: 'item',
    title: 'ETH Me Outside',
    likes: '159',
    countComment: '10',
    currentBid: '1.3 TOM',
  },
];

export { ItemDetail };
