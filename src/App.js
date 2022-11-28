import {Header} from './components/Header/Header';
import {Footer} from './components/Footer';
import Layout from './components/Layout';
import {QueryClient, QueryClientProvider} from 'react-query';
import {useMetaMask} from "metamask-react";
import React, {useEffect, useState} from "react";
import {HeaderModal} from "./components/HeaderModal";
import {Modal} from "./components/Modal";
import {TestChainNetworkParams} from "./Constant";
import axiosConfig from "./axiosConfig";
import Web3 from "web3";
import {ethers} from "ethers";
import {proxy} from "valtio";
import AppState from "./AppState";
import apiClient from "./apiClient";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            //other query settings
            refetchOnWindowFocus: false,
        },
    },
});
const App = () => {
    const state = proxy(AppState);

    const {status, connect, account, chainId, ethereum, switchChain} = useMetaMask();
    console.log(`status = ${status}`);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        // switchChain("0x1");
        // connect();
        const accessToken = localStorage.getItem(`accessToken`);
        setIsLogin((accessToken && accessToken !== ""));

        if(!accessToken || accessToken === '') {
            setModalIsOpen(true)
        }
    }, []);

    const openMetamask = async () => {
        try {
            // checking target network
            if(chainId !== TestChainNetworkParams.chainId) {
                await switchChain(TestChainNetworkParams.chainId);
                // await addChain(TestChainNetworkParams);
            }
            const addresses = await connect(); // connect() return address array
            console.log(`connectData! = ${JSON.stringify(addresses)}`); // return addresses: ["0xe625e70564d5a6bc53172a8a1de20b6a809135cf"]

            // checking address
            if(addresses.length <= 0) {
                alert(`Wallet has no address!`);
                return;
            }

            // get nonce from app server
            const address = addresses[0];
//      setAddress(address);

            const {data : nonceData} = await axiosConfig.post('v1/auth/nonce'
                , {address: address});
            console.log(`data = ${JSON.stringify(nonceData)}`);
            const {nonce} = nonceData;

            // personal_sign
            const signed_message = await ethereum.request({
                method: 'personal_sign',
                params: [nonce, address, 'noncePassword'],
            });
            console.log(`signed_message = ${JSON.stringify(signed_message)}`);

            // login with signed message
            const {data : loginData} = await axiosConfig.post('v1/auth/login', {address, signed_message});
            const {accessToken} = loginData;
            //console.log(`accessToken = ${accessToken}`);
            localStorage.setItem(`accessToken`, accessToken);

            console.log(`setIsLogin => true`);
            setIsLogin(true);

            await updateWallets();
        } catch (e) {
            console.error(`openMetamask error = ${e}`);
        } finally {
            setModalIsOpen(false);
        }
    }

    const updateWallets = async () => {
        await getUserData();
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        console.log(`accounts = ${JSON.stringify(accounts)}`)
        const address = accounts[0];
        state.address = address;
        //setAddress(address);

        // 139749392050000000000
        const balance = await web3.eth.getBalance(address);
        const formatBalance = ethers.utils.formatEther(balance);
        state.formatBalance = formatBalance;
        console.log(formatBalance);
        //setEthBalance(formatBalance);
    }

    const getUserData = async () => {
        console.log(`getUserData`);
        const {data} = await apiClient('/user/profile');
        console.log(`getUserData ${JSON.stringify(data)}`);
        if(data && data.result === 'ok') {
            // alert(JSON.stringify(data.profile))
            state.profile = data.profile;
        }
    }

    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <Header isLogin={isLogin} setIsLogin={setIsLogin} setModalIsOpen={setModalIsOpen}/>
                <Layout/>
                <Footer/>
            </div>

            {modalIsOpen && (
                <Modal
                    onClick={async () => {
                        await openMetamask();
                        setModalIsOpen(false);
                    }}
                    styledWrapper='modal-dialog max-w-lg'
                    setModalIsOpen={setModalIsOpen}
                    title='Connect your wallet'
                    btnTitle='Get Metamask'
                    childrenBody={<HeaderModal />}
                />
            )}

        </QueryClientProvider>
    );


};

export default App;
