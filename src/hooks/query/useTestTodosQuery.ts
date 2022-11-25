import axios from 'axios';
import { useQuery } from 'react-query';

export const QUERY_KEY = '/todos';
const fetcher = () => axios.get('/todos').then(({ data }) => data);
const useTestTodosQuery = () => {
    return useQuery(QUERY_KEY, fetcher);
};
export default useTestTodosQuery;
