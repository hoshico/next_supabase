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
  
 
  useEffect(() => {
    const getPlayData = async() => {
      // 外野手
      let { data: player }: { data:any } = await supabase.from('player').select().eq('position','外野')
      // 三塁手
      //let { data: thirdPlayer }: { data:any } = await supabase.from('player').select().eq('position','三塁')
      // 遊撃手
      //let { data: shortPlayer }: { data:any } = await supabase.from('player').select().eq('position','遊撃')
      // 二塁手
      //let { data: secondPlayer }: { data:any } = await supabase.from('player').select().eq('position','二塁')
      // 一塁手
      //let { data: firstPlayer }: { data:any } = await supabase.from('player').select().eq('position','一塁')
      setPlayerData(player)
 
    }
    getPlayData();
  },[])
  return (
    <>
      <div className="bg-gray-200 min-h-screen">
        <div className="w-4/5 mx-auto pt-48 ">
          {/*外野手*/}
          <div className="mt-8 w-1/5 mx-auto outfield grid grid-cols-1">
            <div className="mt-14 w-full">
              <div className="w-30 h-60 relative">
                {!playerImgUrl ? null : 
                  <Image 
                  alt=''
                  src={playerImgUrl}
                  layout='fill'
                  objectFit='cover'
                  className='block group-hover:opacity-75'
                />}
              </div>
              <div className="dropdown">
                <label tabIndex={0} className="btn m-1 px-6">外野手</label>
                {/*<ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 w-60">
                  {playerData.map((player) => (
                    <li className='mb-2 p-4 cursor-pointer hover:bg-white' key={player.id} data-url={player.imageSrc} onClick={selectPlayerList}>{player.name}</li>
                  ))}
                </ul>*/}
              </div>
              
              <div className="result mt-5">
                <p>スタメン:{selectPlayer}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
