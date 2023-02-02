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
      firstPlayer: '',
    },
  });
  const { handleSubmit } = useFormMethods;

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <FormProvider {...useFormMethods}>
      <div className='mx-10 w-48 bg-white'>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/*外野手*/}
          <div>
            <PositionSelect
              label='外野手'
              players={selectedPositionData.outFielder}
            />
          </div>
          <button type='submit'>決定</button>
        </form>
      </div>
    </FormProvider>
  );
};

export default Order;
