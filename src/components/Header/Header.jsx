import React, { useEffect, useState } from "react";
import { Search } from "../Search";
import { Logo } from "../Logo";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "../Modal";
import { HeaderModal } from "../HeaderModal";
import { MobileMenu } from "../MobileMenu";
import Tippy from "@tippyjs/react";
import { ethers } from "ethers";
import Web3 from "web3";

import "tippy.js/dist/tippy.css";
import { useMetaMask } from "metamask-react";
import { ChainNetworkParams } from "../../Constant";
import useAuthNonceQuery from "../../hooks/query/useAuthNonceQuery";
import axiosConfig from "../../axiosConfig";
import { AddressLink } from "./AddressLink";
import BalanceBox from "./BalanceBox";
import PointBox from "./PointBox";

const Header = ({ isLogin, setIsLogin, setModalIsOpen }) => {
  const navigate = useNavigate();

  const [web3, setWeb3] = useState(new Web3());
  useEffect(() => {
    if (window["ethereum"]) {
      // window.ethereum이 있다면
      try {
        const web = new Web3(window["ethereum"]); // 새로운 web3 객체를 만든다
        setWeb3(web);
      } catch (err) {
        console.log(err);
      }
    } else {
      // open modal
    }

    (async () => {
      await updateWallets();
    })();
  }, [isLogin]);

  const [address, setAddress] = useState("");
  const [ethBalance, setEthBalance] = useState("");

  // const [modalIsOpen, setModalIsOpen] = useState(false);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const { status, connect, account, chainId, ethereum, switchChain, addChain } =
    useMetaMask();

  const updateWallets = async () => {
    const web3 = new Web3(window["ethereum"]);
    const accounts = await web3.eth.getAccounts();
    console.log(`accounts = ${JSON.stringify(accounts)}`);
    if (accounts.length <= 0) return;

    const address = accounts[0];
    setAddress(address);

    // 139749392050000000000
    const balance = await web3.eth.getBalance(address);
    const formatBalance = ethers.utils.formatEther(balance);
    console.log(formatBalance);
    setEthBalance(formatBalance);
  };

  const openMetamask = async () => {
    try {
      // checking target network
      if (chainId !== ChainNetworkParams.chainId) {
        await switchChain(ChainNetworkParams.chainId);
      }
      const addresses = await connect(); // connect() return address array
      console.log(`connectData! = ${JSON.stringify(addresses)}`); // return addresses: ["0xe625e70564d5a6bc53172a8a1de20b6a809135cf"]

      // checking address
      if (!addresses || addresses.length <= 0) {
        alert(`Wallet has no address!`);
        return;
      }

      // get nonce from app server
      const address = addresses[0];
      //      setAddress(address);

      const { data: nonceData } = await axiosConfig.post("v1/auth/nonce", {
        address: address,
      });
      console.log(`data = ${JSON.stringify(nonceData)}`);
      const { nonce } = nonceData;

      // personal_sign
      const signed_message = await ethereum.request({
        method: "personal_sign",
        params: [nonce, address, "noncePassword"],
      });
      console.log(`signed_message = ${JSON.stringify(signed_message)}`);

      // login with signed message
      const { data: loginData } = await axiosConfig.post("v1/auth/login", {
        address,
        signed_message,
      });
      const { accessToken } = loginData;
      //console.log(`accessToken = ${accessToken}`);
      localStorage.setItem(`accessToken`, accessToken);
      setIsLogin(true);

      await updateWallets();
    } catch (e) {
      console.error(`openMetamask error = ${e}`);
    } finally {
      setModalIsOpen(false);
    }
  };

  const isSignedIn = () => {
    return isLogin && status === "connected";
  };

  const signOut = () => {
    localStorage.setItem(`accessToken`, "");
    setIsLogin(false);
    alert(`로그아웃`);
    navigate("/");
  };

  return (
    <>
      {mobileMenuIsOpen && (
        <MobileMenu setMobileMenuIsOpen={setMobileMenuIsOpen} />
      )}
      <header className="js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors">
        <div className="flex items-center px-6 py-6 xl:px-24">
          <Logo />
          {/*<small>{status}</small>*/}
          <Search />
          <div
            className="js-mobile-menu invisible fixed inset-0 z-10 ml-auto items-center
				bg-white opacity-0 dark:bg-jacarta-800 lg:visible lg:relative lg:inset-auto
					lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent"
          >
            {/* <Navigation /> */}
            {/*{modalIsOpen && (
              <Modal
                onClick={async () => {
                  await openMetamask();
                  //setModalIsOpen(false);
                }}
                styledWrapper='modal-dialog max-w-lg'
                setModalIsOpen={setModalIsOpen}
                title='Connect your wallet'
                btnTitle='Get Metamask'
                childrenBody={<HeaderModal />}
              />
            )}*/}
            <nav className="navbar w-full">
              <ul className="flex flex-col lg:flex-row">
                <li className="group">
                  <Link
                    to="/collections"
                    className="flex items-center justify-between py-3.5 font-display text-base text-jacarta-700 hover:text-accent
									focus:text-accent dark:text-white dark:hover:text-accent dark:focus:text-accent lg:px-5"
                  >
                    Explore
                  </Link>
                </li>
                <li className="group">
                  <Link
                    to="/activity"
                    className="flex items-center justify-between py-3.5 font-display text-base text-jacarta-700 hover:text-accent
									focus:text-accent dark:text-white dark:hover:text-accent dark:focus:text-accent lg:px-5"
                  >
                    Activity
                  </Link>
                </li>
                <li className="group">
                  <Link
                    to="/rankings"
                    className="flex items-center justify-between py-3.5 font-display text-base text-jacarta-700 hover:text-accent
									focus:text-accent dark:text-white dark:hover:text-accent dark:focus:text-accent lg:px-5"
                  >
                    Rankings
                  </Link>
                </li>
                <li className="group">
                  <Link
                    onClick={(e) => {
                      if (isSignedIn()) {
                        e.preventDefault();
                        setModalIsOpen(true);
                      }
                    }}
                    to="/create"
                    className="flex items-center justify-between py-3.5 font-display text-base text-jacarta-700 hover:text-accent
									focus:text-accent dark:text-white dark:hover:text-accent dark:focus:text-accent lg:px-5"
                  >
                    Create
                  </Link>
                </li>
              </ul>
            </nav>
            {/*setModalIsOpen((prev) => !prev)*/}

            <div className="ml-8 hidden lg:flex xl:ml-12">
              {isSignedIn() && (
                <Link
                  onClick={async () => {
                    signOut();
                  }}
                  to="#"
                  className="js-wallet group flex h-10 w-10 items-center justify-center rounded-full border
                          border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent
                          focus:border-transparent focus:bg-accent dark:border-transparent dark:bg-white/[.15]
                          dark:hover:bg-accent"
                  data-bs-toggle="modal"
                  data-bs-target="#walletModal"
                  aria-label="wallet"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white
                              group-focus:fill-white dark:fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1
                              1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z"
                    />
                  </svg>
                </Link>
              )}

              {/* Profile */}
              <div className="js-nav-dropdown group-dropdown relative">
                <button
                  onClick={() => {
                    // open login modal when the state is not connected
                    if (isSignedIn()) {
                      return;
                    }
                    setModalIsOpen(true);
                  }}
                  className="dropdown-toggle group ml-2 flex h-10 w-10 items-center justify-center rounded-full border
								border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent
								focus:border-transparent focus:bg-accent dark:border-transparent dark:bg-white/[.15]
								dark:hover:bg-accent"
                  id="profileDropdown"
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  aria-label="profile"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white
									group-focus:fill-white dark:fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12
									13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"
                    />
                  </svg>
                </button>
                <div
                  className="dropdown-menu !-right-4 !top-[85%] !left-auto z-10 hidden min-w-[14rem]
								whitespace-nowrap rounded-xl bg-white transition-all will-change-transform
								before:absolute before:-top-3 before:h-3 before:w-full group-dropdown-hover:visible
								group-dropdown-hover:opacity-100 dark:bg-jacarta-800 lg:invisible lg:absolute lg:grid
								lg:!translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl"
                  aria-labelledby="profileDropdown"
                >
                  {isSignedIn() ? (
                    <div>
                      <AddressLink address={address} />
                      <BalanceBox balance={ethBalance} />
                    </div>
                  ) : null}

                  {/*PointBox*/}

                  <Link
                    onClick={() => {
                      if (isSignedIn()) {
                        navigate("/user");
                      } else {
                        setModalIsOpen(true);
                      }
                    }}
                    to="/user"
                    className="flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50
									hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="h-4 w-4 fill-jacarta-700 transition-colors dark:fill-white"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315
										0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"
                      ></path>
                    </svg>
                    <span className="mt-1 font-display text-sm text-jacarta-700 dark:text-white">
                      My Profile
                    </span>
                  </Link>

                  <Link
                    onClick={() => {
                      if (isSignedIn()) {
                        navigate("/edit-profile");
                      } else {
                        setModalIsOpen(true);
                      }
                    }}
                    to="/edit-profile"
                    className="flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50
									hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="h-4 w-4 fill-jacarta-700 transition-colors dark:fill-white"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M9.954 2.21a9.99 9.99 0 0 1 4.091-.002A3.993 3.993 0 0 0 16 5.07a3.993 3.993 0 0 0 3.457.261A9.99
										9.99 0 0 1 21.5 8.876 3.993 3.993 0 0 0 20 12c0 1.264.586 2.391 1.502 3.124a10.043 10.043 0 0 1-2.046 3.543
										3.993 3.993 0 0 0-3.456.261 3.993 3.993 0 0 0-1.954 2.86 9.99 9.99 0 0 1-4.091.004A3.993 3.993 0 0 0 8
										18.927a3.993 3.993 0 0 0-3.457-.26A9.99 9.99 0 0 1 2.5 15.121 3.993 3.993 0 0 0 4 11.999a3.993 3.993 0 0
										0-1.502-3.124 10.043 10.043 0 0 1 2.046-3.543A3.993 3.993 0 0 0 8 5.071a3.993 3.993 0 0 0 1.954-2.86zM12
										15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                      />
                    </svg>
                    <span className="mt-1 font-display text-sm text-jacarta-700 dark:text-white">
                      Edit Profile
                    </span>
                  </Link>

                  {isSignedIn() && (
                    <Link
                      onClick={() => {
                        signOut();
                      }}
                      to="#"
                      className="flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50
									hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="h-4 w-4 fill-jacarta-700 transition-colors dark:fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 11V8l-5 4 5 4v-3h8v-2H7z" />
                      </svg>
                      <span className="mt-1 font-display text-sm text-jacarta-700 dark:text-white">
                        Sign out
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Mobile Menu Actions --> */}
          <div className="ml-auto flex lg:hidden">
            {/* <!-- Profile --> */}
            <Link
              to="/edit-profile"
              className="group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100
						bg-white transition-colors hover:border-transparent hover:bg-accent focus:border-transparent focus:bg-accent
						dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent"
              aria-label="profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white
							dark:fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315
							0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"
                />
              </svg>
            </Link>

            {/* <!-- Mobile Menu Toggle --> */}
            <button
              onClick={() => setMobileMenuIsOpen(true)}
              className="js-mobile-toggle group ml-2 flex h-10 w-10 items-center justify-center rounded-full border
						border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent
						focus:border-transparent focus:bg-accent dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent"
              aria-label="open mobile menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white
							dark:fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z" />
              </svg>
            </button>
          </div>
          {/*<div>{chainId} {status}</div>*/}
        </div>
      </header>
    </>
  );
};

export { Header };
