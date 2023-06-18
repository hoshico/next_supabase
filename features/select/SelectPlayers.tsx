import useSWR from 'swr';

export const SelectPlayers = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR('../api/players', fetcher);

  console.log('player情報: ', data);
  if (error) return <div>Not Found</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div>
      {data.map((player: any, index: number) => (
        <p key={index}>{player.englishName}</p>
      ))}
    </div>
  );
};
