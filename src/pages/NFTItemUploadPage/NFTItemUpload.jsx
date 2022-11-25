import React, { useState } from 'react';
import gradient_light from '../../img/gradient_light.jpg';
import a1a from '../../img/chains/a1a.png';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Modal } from '../../components/Modal';
import { AddProperties } from '../../components/CreateModal/AddProperties';
import { AddLevels } from '../../components/CreateModal/AddLevels';
import { CreateBlockchainMenu } from '../../components/CreateMenuLists/CreateBlockchainMenu';
import { CreateCollectionMenu } from '../../components/CreateMenuLists/CreateCollectionMenu/CreateCollectionMenu';
import {useMutation} from "react-query";
import axios from "axios";
import {useMetaMask} from "metamask-react";
import { ethers } from 'ethers';
import Loading from 'react-fullscreen-loading';
import saleAbi from "../../blockchain/saleAbi";
import currencies from "../../blockchain/currencies";
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';


const SALE_CONTRACT_ADDRESS = '0x29a37764f3f67a81a876e79d1c411e2cfcff3335';

const NFTItemUpload = () => {
  const navigate = useNavigate();
  const { status : metaMaskStatus, connect, account, chainId, ethereum, switchChain } = useMetaMask();

  const [properties, setProperties] = useState(false);
  const [levels, setLevels] = useState(false);
  const [stats, setStats] = useState(false);
  const [blockchainIsOpen, setBlockchainIsOpen] = useState(false);
  const [collectionIsOpen, setCollectionIsOpen] = useState(false);

  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [isPageLoading, setPageLoading] = useState(false);

  const [mintCurrency, setMintCurrency] = useState('KLAY');

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);

    var reader = new FileReader();
    reader.onload = function (e) {
      var image = new Image();
      image.src = e.target.result;
      image.onload = function() {
        // access image size here
        //alert(this.width);

        $('#blah')
          .attr('src', e.target.result)
          .attr('object-fit', 'fit')
          // .width(150)
          // .height(200);
        //$('#imgresizepreview, #profilepicturepreview').attr('src', this.src);
      };
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const accessToken = localStorage.getItem(`accessToken`);// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwiYWRkcmVzcyI6IjB4ZTYyNWU3MDU2NGQ1YTZiYzUzMTcyYThhMWRlMjBiNmE4MDkxMzVjZiIsImlhdCI6MTY2Njc4MjQ2MywiZXhwIjoxNjY2OTU1MjYzfQ.uclY2wcxruoGqbJ7AOUClcvOKkYBWDOkSPrJl_uJjIo';//localStorage.getItem(`accessToken`);

  const {isLoading : isLoadingNftImage, isError: isErrorNftImage, status: statusNftImage, mutate: mutateNftImage} = useMutation(data => {
    return axios.post('https://api.skyhall.io/api/v1/upload/nftImage', data, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
  });

  const {isLoading: isLoadingRegistration, isError: isErrorRegistration, status: statusRegistration, mutate: mutateRegistration} = useMutation(newTodo => {
    return axios.post('https://api.skyhall.io/api/v1/upload/profile', newTodo, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
  });

  const {isLoading: isLoadingNftInfo, isError: isErrorNftInfo, status: statusNftInfo, mutate: mutateNftInfo} = useMutation(newTodo => {
    return axios.post('https://api.skyhall.io/api/v1/upload/nftInfo', newTodo, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setPageLoading(true);

    const formData = new FormData();
    formData.append("uploadedImage", selectedFile);
    const {itemName, externalUrl, description} = e.target
    const itemNameValue = itemName.value;
    const externalUrlValue = externalUrl.value;
    const descriptionValue = description.value;
//    console.log(`itemName = ${itemNameValue}, externalUrl = ${externalUrlValue}, description = ${descriptionValue}`);

    mutateNftImage(formData, {
      onSuccess: ({data}) => {
        //console.log(`data = ${JSON.stringify(data)}`);// response
        const {filePath, uploadFileId} = data;
        // console.log(`uploadFileId ${uploadFileId}`);
        const price = '1000000000000000000';
        const numerator = 25; // royalty
        const currency = 'KLAY';//mintCurrency;//'KLAY';

        const metaData = {
          uploadFileId,
          title : itemNameValue,
          description : descriptionValue,
          externalUrl: externalUrlValue,
        };
        //console.log(`mutateNftInfo ${JSON.stringify(metaData)}`);

        mutateNftInfo(metaData, {
          onSuccess: async (data) => {
            //console.debug(`data = ${JSON.stringify(data)}`);
            const {uploadNftId} = data.data;
            console.log(`uploadNftId = ${uploadNftId}`);
            if (ethereum) {
              // get event hash and match!
              const provider = new ethers.providers.Web3Provider(ethereum); // ethers.providers.ExternalProvider
              const signer = provider.getSigner();
              const saleContract = new ethers.Contract(SALE_CONTRACT_ADDRESS, saleAbi, signer);
              const tx = await saleContract.mintAndSale(numerator, 1000, price, currencies[currency]);
              const receipt = await tx.wait();
              // console.debug(tx, receipt);

              const response = await axios.post('https://api.skyhall.io/api/v1/upload/nftMinted', {
                uploadNftId,
                hash: tx.hash,
              }, {
                headers: { Authorization: `Bearer ${accessToken}` },
              });
              setPageLoading(false);

              if (response.data.result === 'ok') {
                navigate('/collections')
                alert('민팅에 성공하였습니다');
              } else {
                alert('민팅에 실패하였습니다');
              }
              setPageLoading(false);
            }
          },
          onFail: (e) => {
            alert('onFail')
          }
        });

      },
      onFail: (e) => {
        alert('onFail')
      }
    });
    return;
  }

  return (
    <main>
      <section className='relative py-24'>
        <picture className='pointer-events-none absolute inset-0 -z-10 dark:hidden'>
          <img src={gradient_light} alt='gradient' className='h-full w-full' />
        </picture>
        <form action='api' onSubmit={handleSubmit}>
          <div className='container'>
            <h1 className='py-16 text-center font-display text-4xl font-medium text-jacarta-700 dark:text-white'>
              Create!
            </h1>

            <div className='mx-auto max-w-[48.125rem]'>
              <div className='mb-6'>
                <label className='mb-2 block font-display text-jacarta-700 dark:text-white'>
                  Image, Video, Audio<span className='text-red'>*</span>
                </label>
                <p className='mb-3 text-2xs dark:text-jacarta-300'>
                  Drag or choose your file to upload
                </p>
                {properties && (
                  <Modal
                    styledWrapper='modal-dialog max-w-2xl'
                    setModalIsOpen={setProperties}
                    title='Add properties'
                    btnTitle='Save'
                    childrenBody={<AddProperties />}
                  />
                )}
                {levels && (
                  <Modal
                    styledWrapper='modal-dialog max-w-2xl'
                    setModalIsOpen={setLevels}
                    title='Add levels'
                    btnTitle='Save'
                    childrenBody={<AddLevels />}
                  />
                )}
                {stats && (
                  <Modal
                    styledWrapper='modal-dialog max-w-2xl'
                    setModalIsOpen={setStats}
                    title='Add stats'
                    btnTitle='Save'
                    childrenBody={<AddLevels />}
                  />
                )}
                <div
                  className='group relative flex max-w-md flex-col items-center justify-center rounded-lg border-2 border-dashed
                border-jacarta-100 bg-white py-20 px-5 text-center dark:border-jacarta-600 dark:bg-jacarta-700'>
                  <div className='relative z-10 cursor-pointer'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      width='24'
                      height='24'
                      className='mb-4 inline-block fill-jacarta-500 dark:fill-white'>
                      <path fill='none' d='M0 0h24v24H0z' />
                      <path
                        d='M16 13l6.964 4.062-2.973.85 2.125 3.681-1.732 1-2.125-3.68-2.223 2.15L16 13zm-2-7h2v2h5a1 1 0 0 1 1
                      1v4h-2v-3H10v10h4v2H9a1 1 0 0 1-1-1v-5H6v-2h2V9a1 1 0 0 1 1-1h5V6zM4 14v2H2v-2h2zm0-4v2H2v-2h2zm0-4v2H2V6h2zm0-4v2H2V2h2zm4
                      0v2H6V2h2zm4 0v2h-2V2h2zm4 0v2h-2V2h2z'
                      />
                    </svg>
                    <p className='mx-auto max-w-xs text-xs dark:text-jacarta-300' id="file_info">
                      JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB
                    </p>
                    {isFilePicked ? (
                      <div>
                        <p className='mx-auto max-w-xs text-xs dark:text-jacarta-300' id="file_info">Filename: {selectedFile.name}</p>
                        <p className='mx-auto max-w-xs text-xs dark:text-jacarta-300' id="file_info">Filetype: {selectedFile.type}</p>
                        <p className='mx-auto max-w-xs text-xs dark:text-jacarta-300' id="file_info">Size in bytes: {selectedFile.size}</p>
                        <p className='mx-auto max-w-xs text-xs dark:text-jacarta-300' id="file_info">
                          lastModifiedDate:{' '}
                          {selectedFile.lastModifiedDate.toLocaleDateString()}
                        </p>
                      </div>
                    ) : (
                      <p>Select a file to show details</p>
                    )}
                  </div>

                  <input
                    onChange={changeHandler}
                    type='file'
                    accept='image/*,video/*,audio/*,webgl/*,.glb,.gltf'
                    id='file-upload'
                    name='file'
                    className='absolute inset-0 z-20 cursor-pointer opacity-0'
                    required
                  />
                  <div
                      className='absolute inset-4 cursor-pointer rounded bg-jacarta-50
                  dark:bg-jacarta-600'>
                    <img id="blah" src="#" alt="" />
                  </div>
                </div>
              </div>

              <div className='mb-6'>
                <label
                  htmlFor='item-name'
                  className='mb-2 block font-display text-jacarta-700 dark:text-white'>
                  Name<span className='text-red'>*</span>
                </label>
                <input
                  type='text'
                  id='item-name'
                  name='itemName'
                  className='w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent
                  dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300'
                  placeholder='Item name'
                  required
                />
              </div>

              <div className='mb-6'>
                <label
                  htmlFor='item-external-link'
                  className='mb-2 block font-display text-jacarta-700 dark:text-white'>
                  External link
                </label>
                <p className='mb-3 text-2xs dark:text-jacarta-300'>
                  We will include a link to this URL on this item's detail page, so that users can
                  click to learn more about it. You are welcome to link to your own webpage with more
                  details.
                </p>
                <input
                  name='externalUrl'
                  type='url'
                  id='item-external-link'
                  className='w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent
                  dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300'
                  placeholder='https://yoursite.io/item/123'
                />
              </div>

              <div className='mb-6'>
                <label
                  htmlFor='item-description'
                  className='mb-2 block font-display text-jacarta-700 dark:text-white'>
                  Description
                </label>
                <p className='mb-3 text-2xs dark:text-jacarta-300'>
                  The description will be included on the item's detail page underneath its image.
                  Markdown syntax is supported.
                </p>
                <textarea
                  name='description'
                  id='item-description'
                  className='w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent
                  dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300'
                  rows='4'
                  // required
                  placeholder='Provide a detailed description of your item.'></textarea>
              </div>

              <div className='mb-6'>
                <label
                  htmlFor='item-supply'
                  className='mb-2 block font-display text-jacarta-700 dark:text-white'>
                  Blockchain
                </label>

                <div
                  className='dropdown relative mb-4 cursor-pointer'
                  onClick={() => setBlockchainIsOpen((prev) => !prev)}>
                  <div
                    className='dropdown-toggle flex items-center justify-between rounded-lg border border-jacarta-100 bg-white
                    py-3.5 px-3 text-base dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white'
                    role='button'
                    id='item-blockchain'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'>
                    <span className='flex items-center'>
                      <img src={a1a} alt='a1a' className='mr-2 h-5 w-5 rounded-full' />
                      AONEA
                    </span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      width='24'
                      height='24'
                      className='h-4 w-4 fill-jacarta-500 dark:fill-white'>
                      <path fill='none' d='M0 0h24v24H0z'></path>
                      <path d='M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z'></path>
                    </svg>
                  </div>
                  {blockchainIsOpen && <CreateBlockchainMenu onClick={(id) => {
                    // alert(id);
                    setMintCurrency(id)
                  }} />}
                </div>
              </div>

              <div className='mb-6'>
                <label
                    htmlFor='item-supply'
                    className='mb-2 block font-display text-jacarta-700 dark:text-white'>
                  Price
                </label>

                <div className='mb-3 flex items-center space-x-2'>
                  <p className='text-2xs dark:text-jacarta-300'>
                    The price of items
                    <span className='inline-block'>
                      <Tippy
                          content='Setting your asset as explicit and sensitive content, like pornography and other not safe
                    for work (NSFW) content, will protect users with safe search while browsing Xhibiter.'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            width='24'
                            height='24'
                            className='ml-1 -mb-[3px] h-4 w-4 fill-jacarta-500 dark:fill-jacarta-300'>
                          <path fill='none' d='M0 0h24v24H0z'></path>
                          <path
                              d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0
                        0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z'></path>
                        </svg>
                      </Tippy>
                    </span>
                  </p>
                </div>

                <input
                    type='text'
                    id='item-supply'
                    className='w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent
                  dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300'
                    placeholder='1'
                />
              </div>
              <button
                className='cursor-default rounded-full bg-accent-lighter py-3 px-8 text-center font-semibold text-white transition-all'>
                Create1
              </button>
            </div>
          </div>
        </form>
      </section>
      {
        isPageLoading ? <Loading loading background="#22000000" loaderColor="#3498db" /> : null
      }
    </main>

  );
};

export { NFTItemUpload };
