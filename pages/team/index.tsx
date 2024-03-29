import { GetStaticProps, NextPage } from 'next';
import TeamSelect2 from '../../features/team/TeamSelect2';
import { supabase } from '../../libs/supabaseClient';

/*
  最初にsupabaseから全てのデータを取得する
*/
export const getStaticProps: GetStaticProps = async () => {
  let { data: players } = await supabase.from('players').select('*');

  return {
    props: {
      players,
    },
  };
};

interface Props {
  players: any[];
}

const TeamPage: NextPage<Props> = (props) => {
  return (
    <div className='to-black-600 h-screen bg-gradient-to-br from-yellow-500 via-yellow-700'>
      {/*<TeamSelect players={props.players}/>*/}
      <TeamSelect2 players={props.players}/>
    </div>
  );
};
export default TeamPage;
