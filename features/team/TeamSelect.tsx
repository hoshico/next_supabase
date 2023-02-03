import Router from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import { inputState } from '../../states/atoms/inputAtom';

const TeamSelect = (props: any) => {
  const { players } = props;
  console.log(players);
  const userInfo = useRecoilValue(inputState);
  //console.log(userInfo);

  const useFormMethods = useForm({
    defaultValues: {
      userId: null,
      players: null,
    },
  });
  const { handleSubmit } = useFormMethods;

  /**
   * オーダー決定ボタン
   * @param data
   * recoil管理にして、決定したオーダーをページ遷移後も使用できるようにする
   *
   */
  const onSubmit = (data: any) => {
    console.log(data);
    Router.push({
      pathname: '/',
      query: data,
    });
  };
  return (
    <div className='mx-auto w-4/5 bg-gray-600'>
      <FormProvider {...useFormMethods}>
        <div className='mx-10 w-48 bg-white'>
          <form onSubmit={handleSubmit(onSubmit)}>
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
