import { GetStaticProps, NextPage } from 'next';
import { supabase } from '../../libs/supabaseClient';
import { useForm } from 'react-hook-form';
import Order from '../../features/order';

/*
  最初にsupabaseから全てのデータを取得する
*/
export const getStaticProps: GetStaticProps = async () => {
  let { data: players } = await supabase.from('player').select('*');

  return {
    props: {
      players,
    },
  };
};

interface Props {
  players: any[];
}

const PlayPage: NextPage<Props> = (props) => {
  return (
    <div className='bg-gradient-to-r from-yellow-500 to-black-500'>
      <Order players={props.players} />
    </div>
  );
};

export default PlayPage;
