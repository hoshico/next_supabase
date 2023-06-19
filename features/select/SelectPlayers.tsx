import { FormProvider, useForm } from 'react-hook-form';
import useSWR from 'swr';
import { DropDown } from './DropDown';
import { Player } from '../common/types';
import { useEffect, useState } from 'react';

export const SelectPlayers = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data: playersInfo, error }: { data: Player[]; error: any } = useSWR(
    '../api/players',
    fetcher
  );
  const [filteredPlayers, setFilteredPlayers] = useState<{
    [key: string]: Player[];
  }>({
    c: [],
    '1b': [],
    '2b': [],
    ss: [],
    '3b': [],
    lf: [],
    cf: [],
    rf: [],
    dh: [],
  });

  useEffect(() => {
    if (!playersInfo) return;
    const catcherPlayers = playersInfo.filter(
      (player) => player.position === 'C'
    );
    const firstBasePlayers = playersInfo.filter(
      (player) => player.position === '1B'
    );
    const secondBasePlayers = playersInfo.filter(
      (player) => player.position === '2B'
    );
    const shortStopPlayers = playersInfo.filter(
      (player) => player.position === 'SS'
    );
    const thirdPlayers = playersInfo.filter(
      (player) => player.position === '3B'
    );
    const leftPlayers = playersInfo.filter(
      (player) => player.position === 'LF'
    );
    const centerPlayers = playersInfo.filter(
      (player) => player.position === 'CF'
    );
    const rightPlayers = playersInfo.filter(
      (player) => player.position === 'RF'
    );
    const desinatedPlayers = playersInfo.filter(
      (player) => player.position === 'DH'
    );

    setFilteredPlayers({
      c: catcherPlayers,
      '1b': firstBasePlayers,
      '2b': secondBasePlayers,
      ss: shortStopPlayers,
      '3b': thirdPlayers,
      lf: leftPlayers,
      cf: centerPlayers,
      rf: rightPlayers,
      dh: desinatedPlayers,
    });
    console.log('filterPlayers情報: ', filteredPlayers);
  }, [playersInfo]);

  const useFormMethods = useForm({
    defaultValues: {},
  });

  const { handleSubmit } = useFormMethods;

  const onSubmit = (data: any) => {
    console.log('playersInfo情報: ', data);
  };

  if (error) return <div>Not Found</div>;
  if (!playersInfo) return <div>loading...</div>;
  return (
    <div>
      {/* 選手選択画面 */}
      <FormProvider {...useFormMethods}>
        <form className='mt-4' onSubmit={handleSubmit(onSubmit)}>
          {/* <DropDown players={} /> */}
          <button type='submit'>確定</button>
        </form>
      </FormProvider>

      {playersInfo.map((player: any, index: number) => (
        <p key={index}>{player.englishName}</p>
      ))}
    </div>
  );
};
