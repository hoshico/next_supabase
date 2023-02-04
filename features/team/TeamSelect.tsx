import Router from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';
import { useRecoilState, useRecoilValue } from 'recoil';
import { inputState, playersState } from '../../states/atoms/inputAtom';

/**
 * Team選択
 * React-Hook-Form使用
 */
const TeamSelect = (props: any) => {
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

  const useFormMethods = useForm({
    defaultValues: {
      userId: null,
      selectedTeam: null,
    },
  });
  const {
    handleSubmit,
    register,
    formState: { dirtyFields },
  } = useFormMethods;

  /**
   * オーダー決定ボタン
   * @param data
   * recoil管理にして、決定したオーダーをページ遷移後も使用できるようにする
   *
   */
  const onSubmit = (data: any) => {
    setSelectedPlayers((current) => ({
      ...current,
      ...{
        userId: 1,
        selectedTeam: null,
      },
    }));
    console.log(data);

    //Router.push('/');
  };
  return (
    <div className='mx-auto w-4/5 bg-gray-600'>
      <FormProvider {...useFormMethods}>
        <div className='mx-10 w-48 bg-white'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                type='checkbox'
                value='dodgers'
                //checked={dirtyFields.selectedTeam === "dodgers"}
                {...register('selectedTeam')}
              />
            </div>
            <div>
              <input
                type='checkbox'
                value='giants'
                {...register('selectedTeam')}
              />
            </div>
            <div className='mx-auto flex h-12 justify-center bg-blue-400'>
              <button className='font-semibold text-black' type='submit'>
                決定
              </button>
            </div>
          </form>
        </div>
      </FormProvider>
    </div>
  );
};

export default TeamSelect;
