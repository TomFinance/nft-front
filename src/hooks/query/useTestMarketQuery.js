import { useQuery } from 'react-query';

const useTestMarketQuery = () => {
  const { data: marketData } = useQuery('marketData', () =>
    fetch('https://api.upbit.com/v1/market/all').then((res) => res.json())
  );
  return { marketData };
};

export default useTestMarketQuery;
