import type { GetServerSideProps, NextPage } from 'next'
import { createClient } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import { supabase } from '../libs/supabaseClient';
import Image from 'next/image';

type Player = {
  id: number;
  name: string;
  result: string;
}

type PlayerProps = NonNullable<Player[]>;

export const getServerSideProps: GetServerSideProps = async () => {
  const { publicURL } = supabase.storage
    .from('mlb-pic')
    .getPublicUrl("betts.jpg");
    return {
      props: {
        url: publicURL,
      }
    }
}

const Home: NextPage = (props) => {
  // 外野手
  const [ playerData, setPlayerData ] = useState<PlayerProps>([]);
  const [ selectPlayer, setSelectPlayer ] = useState<string>();
  // 三塁手
  const [ thirdPlayerData, setThirdPlayerData ] = useState<PlayerProps>([]);
  const [ selectThirdPlayer, setSelectThirdPlayer ] = useState<string>();
  // 遊撃手
  const [ shortPlayerData, setShortPlayerData ] = useState<PlayerProps>([]);
  const [ selectShortPlayer, setSelectShortPlayer ] = useState<string>();
  // 二塁手
  const [ secondPlayerData, setSecondPlayerData ] = useState<PlayerProps>([]);
  const [ selectSecondPlayer, setSelectSecondPlayer ] = useState<string>();
  
  const handleChange = (e) => {
    console.log(e.target)
    setSelectPlayer(e.target.value);
  }
  const handleThirdChange = (e) => {
    setSelectThirdPlayer(e.target.value);
  }
  const handleShortChange = (e) => {
    setSelectShortPlayer(e.target.value);
  }
  const handleSecondChange = (e) => {
    setSelectSecondPlayer(e.target.value);
  }
 
  useEffect(() => {
    const getPlayData = async() => {
      // 外野手
      let { data: player }: { data:any } = await supabase.from('player').select().eq('position','外野')
      // 三塁手
      let { data: thirdPlayer }: { data:any } = await supabase.from('player').select().eq('position','三塁')
      // 遊撃手
      let { data: shortPlayer }: { data:any } = await supabase.from('player').select().eq('position','遊撃')
      // 二塁手
      let { data: secondPlayer }: { data:any } = await supabase.from('player').select().eq('position','二塁')
      // 一塁手
      let { data: firstPlayer }: { data:any } = await supabase.from('player').select().eq('position','一塁')
      
      setPlayerData(player)
      setThirdPlayerData(thirdPlayer)
      setShortPlayerData(shortPlayer)
      setSecondPlayerData(secondPlayer)
    }
    getPlayData();
  },[])



  return (
    <>
      <div className="flex flex-wrap min-h-screen">
        <div className="">
          <label htmlFor="location" className="text-white block text-sm font-medium text-gray-700">
             外野手
          </label>
          <select
            id="location"
            name="location"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            defaultValue="--"
            onChange={(e) => handleChange(e)}
          >
            <option value="" className="text-black">選手を選択</option>
            {playerData.map((player)=> (
              <option value={player.name} className="text-black" key={player.id}>{player.name}/打率{player.result}</option>
            ))}
          </select>
          <div className="result mt-5">
            <p>スタメン:{selectPlayer}</p>
          </div>
        </div>
        {/*三塁手*/}
        <div className="ml-10">
          <label htmlFor="location" className="text-white block text-sm font-medium text-gray-700">
             三塁手
          </label>
          <select
            id="location"
            name="location"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            defaultValue="--"
            onChange={(e) => handleThirdChange(e)}
          >
            <option value="" className="text-black">選手を選択</option>
            {thirdPlayerData.map((thirdPlayer)=> (
              <option value={thirdPlayer.name} className="text-black" key={thirdPlayer.id}>{thirdPlayer.name}/打率{thirdPlayer.result}</option>
            ))}
          </select>
          <div className="result mt-5">
            <p>スタメン:{selectThirdPlayer}</p>
          </div>
        </div>
        {/*遊撃手*/}
        <div className="ml-10">
          <label htmlFor="location" className="text-white block text-sm font-medium text-gray-700">
             遊撃手
          </label>
          <select
            id="location"
            name="location"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            defaultValue="--"
            onChange={(e) => handleShortChange(e)}
          >
            <option value="" className="text-black">選手を選択</option>
            {shortPlayerData.map((shortPlayer)=> (
              <option value={shortPlayer.name} className="text-black" key={shortPlayer.id}>{shortPlayer.name}/打率{shortPlayer.result}</option>
            ))}
          </select>
          <div className="result mt-5">
            <p>スタメン:{selectShortPlayer}</p>
          </div>
        </div>
        {/*二塁手*/}
        <div className="ml-10">
          <label htmlFor="location" className="text-white block text-sm font-medium text-gray-700">
             二塁手
          </label>
          <select
            id="location"
            name="location"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            defaultValue="--"
            onChange={(e) => handleSecondChange(e)}
          >
            <option value="" className="text-black">選手を選択</option>
            {secondPlayerData.map((secondPlayer)=> (
              <option value={secondPlayer.name} className="text-black" key={secondPlayer.id}>{secondPlayer.name}/打率{secondPlayer.result}</option>
            ))}
          </select>
          <div className="result mt-5">
            <p>スタメン:{selectSecondPlayer}</p>
          </div>
        </div>

        <div className="ml-10">
          <ul>
            <li>外野手:{selectPlayer}</li>
            <li>三塁手:{selectThirdPlayer}</li>
            <li>遊撃手:{selectShortPlayer}</li>
            <li>二塁手:{selectSecondPlayer}</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Home
