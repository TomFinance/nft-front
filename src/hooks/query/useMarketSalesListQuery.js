import axios from 'axios';
import { useQuery } from 'react-query';

/*export const QUERY_KEY = '/v1/market/sale/list';
const fetcher = () => axios.post('/v1/market/sale/list').then(({ data }) => data);
const useMarketSalesListQuery = () => {
  return useQuery(QUERY_KEY, fetcher);
};
export default useMarketSalesListQuery;*/

const endpoint = `http://3.34.108.135:6001`;

const useIndexQuery = () => {
  fetch(`https://api.skyhall.io/api/v1/market/sale/list`).then((res) => res.json()).then(data => {});

/*  console.log(`useIndexQuery()`);
  const { data: salesData } = useQuery('salesData', () =>
    fetch(`https://api.skyhall.io/api/v1/market/sale/list`).then((res) => res.json())
  );
  alert(salesData);*/
  return { indexData: [] };
};
export default useIndexQuery;


/*
const { data: indexData } = useQuery('indexData', () =>
  fetch(`${endpoint}/index`).then((res) => res.json())
);
*/

