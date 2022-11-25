import axios from 'axios';
import { useQuery } from 'react-query';

export const QUERY_KEY = '/auth/nonce';
const fetcher = () => axios.post('/auth/nonce').then(({ data }) => data);
const useAuthNonceQuery = () => {
  return useQuery(QUERY_KEY, fetcher);
};
export default useAuthNonceQuery;
