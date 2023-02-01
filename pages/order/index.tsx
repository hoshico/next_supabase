import { NextPage } from 'next';
import { useForm } from 'react-hook-form';

interface Props {

}

const OrderPage: NextPage<Props> = () => {
  const {register, handleSubmit, formState: {isDirty, dirtyFields}} = useForm({
    defaultValues: {
      firstPlayer: "",
    }
  })
  const onSubmit = (data: any) =>{
    console.log(data);
  };
  return (
    <div className='bg-white'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select>
          <option>ddd</option>
          <option>ddd</option>
          <option>ddd</option>
        </select>
      </form>
    </div>
  )
};

export default OrderPage;