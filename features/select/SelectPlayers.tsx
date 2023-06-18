import useSWR from 'swr';

export const SelectPlayers = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR('../api/players', fetcher);
  console.log("選手情報: ",data)
  return <></>;
};
