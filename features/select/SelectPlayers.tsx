import useSWR from "swr";

export const SelectPlayers = () => {
  const fetcher = await supabase.from('players').select('*');
  const {data: players, error} = useSWR("", fetcher)
  return(
    <></>
  )
};