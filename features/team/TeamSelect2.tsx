import Router from 'next/router';
import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { inputState, teamState } from '../../states/atoms/inputAtom';
import { Card } from './Card';

/**
 * Team選択
 * React-Hook-Form使用せず
 */
const TeamSelect2 = (props: any) => {
  const { players } = props;
  const [team, setTeam] = useState("dodgers");
  const [selectedTeam, setSelectedTeam] = useRecoilState(teamState);

  let dodgersPlayers = [];
  let astrosPlayers = [];

  /**
   * team_idでチーム振り分け
   * TODO: hooksにする
   */
  for (const player of players) {
    switch (player.team_id) {
      case 1:
        dodgersPlayers.push(player);
        break;
      case 2:
        astrosPlayers.push(player);
        break;
      default:
    }
  }
  const onsubmit = () => {
    console.log(team);
    setSelectedTeam((current) => ({
      ...current,
      ...{
        userId: 1,
        selectedTeam: team,
      }
    }))
  };

  return (
    <div className='mx-auto w-4/5 pt-4'>
      <div className='grid grid-cols-2 gap-4'>
        <div onClick={() => setTeam('dodgers')}>
          <Card
            players={dodgersPlayers}
            teamName='dodgers'
            isSelected={team === 'dodgers'}
          />
        </div>
        <div onClick={() => setTeam('astros')}>
          <Card
            players={astrosPlayers}
            teamName='astros'
            isSelected={team === 'astros'}
          />
        </div>
      </div>
      <div className='flex py-4'>
        <button className='rounded-xl bg-gray-600 px-4 py-2' onClick={onsubmit}>
          決定
        </button>
      </div>
    </div>
  );
};

export default TeamSelect2;
