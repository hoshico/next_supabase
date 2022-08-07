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

  // 指名打者
  const designatedHitterPlayers = data.filter((player) => player.position === "指名打者");


  // 外野手
  const [ playerData, setPlayerData ] = useState<Player[]>([]);
  const [ selectPlayer, setSelectPlayer ] = useState<string>();
  const [ playerImgUrl, setPlayerImgUrl ] = useState<string>();
 
 
  // 05/08追加 ドロップダウン
  const selectPlayerList: React.MouseEventHandler<HTMLLIElement> = (e) => {
    console.log(e.target)
    //console.log(e.target.dataset.url)
    //setPlayerImgUrl(e.target.dataset.url)
  };
  
  return (
    <>
      <div className="bg-gray-200 min-h-screen">
        <div className="">
          {outFieldPlayers.map((outFieldPlayer, index) => (
            <p key={index}>{outFieldPlayer.name}</p> 
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
