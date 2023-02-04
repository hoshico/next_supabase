import Router from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';
import { useRecoilState, useRecoilValue } from 'recoil';
import { inputState, playersState } from '../../states/atoms/inputAtom';

/**
 * Team選択
 * React-Hook-Form使用せず
 */
const TeamSelect2 = (props: any) => {
  const { players } = props;
  const [selectedPlayers, setSelectedPlayers] = useRecoilState(playersState);

  let dodgersPlayers = [];
  let giantsPlayers = [];

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
        giantsPlayers.push(player);
        break;
      default:
    }
  }

  
  return (
    <div className='mx-auto w-4/5 bg-gray-600'>
     
    </div>
  );
};

export default TeamSelect2;
