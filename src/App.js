import { Header } from './components/Header/Header';
import { Footer } from './components/Footer';
import Layout from './components/Layout';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useMetaMask } from "metamask-react";
import {useEffect} from "react";

const queryClient = new QueryClient({defaultOptions: {
    queries: {
      //other query settings
      refetchOnWindowFocus: false,
    },
  },});
const App = () => {
  const { status, connect, account, chainId, ethereum, switchChain } = useMetaMask();
  console.log(`status = ${status}`);

  useEffect(() => {
    // switchChain("0x1");
    // connect();
  },[]);

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Header />
        <Layout />
        <Footer />
      </div>
    </QueryClientProvider>
  );
};

export default App;
