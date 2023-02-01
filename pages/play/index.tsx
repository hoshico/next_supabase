import { GetStaticProps, NextPage } from 'next';
import { supabase } from '../../libs/supabaseClient';
import { useForm } from 'react-hook-form';
import { Order } from '../../features/order';

/*
  最初にsupabaseから全てのデータを取得する
*/
export const getStaticProps: GetStaticProps = async () => {
  let { data: player } = await supabase
  .from('player')
  .select('*');

  return {
    props: {
      data: player,
    }
  }
};

interface Props {
  data: any[];
}

const PlayPage: NextPage<Props> = (props) => {

  return (
    <>
    <Order data={props.data} />
    </>
  )
};

export default PlayPage;