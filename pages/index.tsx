import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import { createClient } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import { supabase } from '../libs/supabaseClient';
import Image from 'next/image';


type Player = {
  avg: string;
  hr: string;
  id: number;
  image?: string;
  name: string;
  position: string;
}
//type PlayerProps = NonNullable<Player[]>;

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
}

const Home: NextPage<{data: Array<Player>}> = (props) => {

  const { data } = props;
  // スタメンstate
  const [ member, setMember ] = useState<Array<Player>>([]);
  // スタメン決定state
  const [ selectedMember, setSelectedMember ] = useState(false);

  // 外野手state
  const [ selectOutFieldPlayer, setSelectOutPlayerList] = useState<Player | null>();
  // 三塁手state
  const [ selectThirdPlayer, setSelectThirdPlayerList] = useState<Player | null>();
  
  
  // 外野手データ
  const outFieldPlayers = data.filter((player) => player.position === "外野手");
  // 三塁手
  const thirdBasemanPlayers = data.filter((player) => player.position === "三塁手");
  // 遊撃手
  const shortStopPlayers = data.filter((player) => player.position === "遊撃手");
  // 二塁手
  const secondBasemanPlayers = data.filter((player) => player.position === "二塁手");
  // 一塁手
  const firstBasemanPlayers = data.filter((player) => player.position === "一塁手");
  
  // 捕手
  const catcherBasemanPlayers = data.filter((player) => player.position === "捕手");

  // 指名打者
  const designatedHitterPlayers = data.filter((player) => player.position === "指名打者");
 
 
  // 05/08追加 ドロップダウン
  const selectPlayerList: React.MouseEventHandler<HTMLLIElement> = (e) => {
    console.log(e.target)
    //console.log(e.target.dataset.url)
    //setPlayerImgUrl(e.target.dataset.url)
  };

  const selectedPlayer = (player: Player) => {
    setSelectOutPlayerList(player);
  };
  const selectedThirdPlayer = (player: Player) => {
    setSelectThirdPlayerList(player);
  };

  // スタメン決定ボタン
  const onDecision = () => {
    // 各メンバーが選ばれている場合
    if(selectOutFieldPlayer && selectThirdPlayer) {
      const newMember = [selectOutFieldPlayer,selectThirdPlayer];
      setMember(newMember);
      setSelectedMember(true);
    }
  }

  
  return (
    <>
      <div className="bg-gray-200 min-h-screen ">
        <div className="dropdown dropdown-hover">
          <p>{selectOutFieldPlayer ? selectOutFieldPlayer.name : "選択してください"}</p>
          <label tabIndex={0} className="btn m-1">外野手</label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 w-52">
            {outFieldPlayers.map((outFieldPlayer, index) => (
              <li className='cursor-pointer hover:bg-gray-200' key={index} onClick={() => selectedPlayer(outFieldPlayer)}>{outFieldPlayer.name}</li>
            ))}
            </ul>
        </div>
        <div className="dropdown dropdown-hover">
          <p>{selectThirdPlayer ? selectThirdPlayer.name : "選択してください"}</p>
          <label tabIndex={0} className="btn m-1">三塁手</label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 w-52">
            {thirdBasemanPlayers.map((thirdBasemanPlayer, index) => (
              <li className='cursor-pointer hover:bg-gray-200' key={index} onClick={() => selectedThirdPlayer(thirdBasemanPlayer)}>{thirdBasemanPlayer.name}</li>
            ))}
            </ul>
        </div>
        {/*スタメン決定ボタン*/}
        <button onClick={onDecision}>スタメン決定</button>
        {/*スタメン表示*/}
        <div className=''>
          <p>スタメン</p>
          {selectedMember && member.map((player) => (
            <p key={player.id}>{player.name}</p>
          ))}
        </div>
      </div>  
    </>
  )
}

export default Home
