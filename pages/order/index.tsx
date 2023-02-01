import { GetStaticProps, NextPage } from 'next';
import { supabase } from '../../libs/supabaseClient';
import { useForm } from 'react-hook-form';

/*
  最初にsupabaseから全てのデータを取得する
*/
export const getStaticProps: GetStaticProps = async () => {
  let { data: player, error } = await supabase
  .from('player')
  .select('*')
    return {
      props: {
        data: player,
      }
    }
};

interface Props {
  data: any;
}

const OrderPage: NextPage<Props> = (props) => {
  const {data} = props;
  console.log(data);
  
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