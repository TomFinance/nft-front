import { useQuery } from 'react-query';

/*
// Suspense를 사용하면 컴포넌트가 렌더링하기 전에 다른 작업이 먼저 이루어지도록 “대기합니다”.


https://velog.io/@jkl1545/React-Query

const { data, isLoading, isFetching, isError, error } = useQuery('super-heroes', fetchSuperHeroes);
{
  cacheTime: 3000,
}
{
  refetchOnMount: true, // or false
}
{
  refetchOnWindowFocus: true, // or false
}

onSuccess, onError
select
useQueries

// https://tech.kakaopay.com/post/react-query-1/

const { data } = useQuery('getMenu', () =>
    axios.get('/menu').then(({ data }) => data),
  );
  // "/menu" API에 Post 요청을 보내 서버에 데이터를 저장합니다.
  const { mutate } = useMutation(
    (suggest) => axios.post('/menu', { suggest }),
    {
      // Post 요청이 성공하면 위 useQuery의 데이터를 초기화합니다.
      // 데이터가 초기화되면 useQuery는 서버의 데이터를 다시 불러옵니다.
      onSuccess: () => queryClient.invalidateQueries('getMenu'),
    },
  );

  mutate({
            id: Date.now(),
            title: 'Toowoomba Pasta',
          })

  const { isLoading, error, data } = useQuery(
    'userInfo', // 'userInfo'를 Key로 사용하여 데이터 캐싱
    // 다른 컴포넌트에서 'userInfo'를 QueryKey로 사용한 useQuery Hook이 있다면 캐시된 데이터를 우선 사용합니다.
    () => axios.get('/users').then(({ data }) => data),
  );
 */

//

const endpoint = `http://3.34.108.135:6001`;

const useIndexQuery = () => {
  console.log(`useIndexQuery()`);
  const { data: indexData } = useQuery('indexData', () =>
    fetch(`${endpoint}/index`).then((res) => res.json())
  );
  return { indexData };
};

export default useIndexQuery;
