import Router from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';
import PositionSelect from './PositionSelect';
import { uesFilter } from './useFilter';

const Order = (props: any) => {
  const { players } = props;

  /**
   * players情報から
   */
  const { filterPlayers } = uesFilter();
  const selectedPositionData = filterPlayers(players);

  const useFormMethods = useForm({
    defaultValues: {
      外野手: '',
      三塁手: '',
      遊撃手: '',
      二塁手: '',
      一塁手: '',
      捕手: '',
      指名打者: '',
    },
  });
  const { handleSubmit } = useFormMethods;

  /**
   * オーダー決定ボタン
   * @param data 
   * 
   * recoil管理にして、決定したオーダーをページ遷移後も使用できるようにする
   * 
   */
  const onSubmit = (data: any) => {
    console.log(data);
    Router.push({
      pathname: "/",
      query: data,
    });
  };
  return (
    <div className='mx-auto w-4/5 bg-gray-600'>
      <FormProvider {...useFormMethods}>
        <div className='mx-10 w-48 bg-white'>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/*外野手*/}
            <div className=''>
              <PositionSelect
                label='外野手'
                players={selectedPositionData.outFielder}
              />
            </div>
            {/*三塁手*/}
            <div className=''>
              <PositionSelect
                label='三塁手'
                players={selectedPositionData.thirdFielder}
              />
            </div>
            {/*外野手*/}
            <div className=''>
              <PositionSelect
                label='遊撃手'
                players={selectedPositionData.shortFielder}
              />
            </div>
            <div className='mx-auto bg-blue-400 h-12 flex justify-center'>
              <button className="text-black font-semibold" type='submit'>決定</button>
            </div>
          </form>
        </div>
      </FormProvider>
    </div>
  );
};

export default Order;
