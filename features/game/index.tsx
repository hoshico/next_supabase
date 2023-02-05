import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { teamState } from '../../states/atoms/inputAtom';

const GameDetail = () => {
  const router = useRouter();
  const { userId, selectedTeam } = useRecoilValue(teamState);
  const [score, setScore] = useState<any[]>([]);
  const [result, setReasult] = useState('');
  const [gameResult, setGameResult] = useState<number[]>([]);

  useEffect(() => {
    if (!selectedTeam) {
      router.push('/team');
    }

    const timer = setTimeout(() => {
      let awayScore = 0;
      let homeScore = 0;

      // 9回表で場合分け
      if (score.length === 17) {
        for (let i = 0; i < 17; i++) {
          if (i % 2 === 0) {
            awayScore += score[i];
          } else {
            homeScore += score[i];
          }
        }
        if (awayScore < homeScore) {
          setScore([...score, 'x']);
          setReasult('負け');
          setGameResult([awayScore, homeScore]);
        } else {
          const lastScore = Math.floor(Math.random() * 3);
          setScore([...score, lastScore]);
          awayScore === homeScore + lastScore
            ? setReasult('引き分け')
            : setReasult('勝ち');
          setGameResult([awayScore, homeScore + lastScore]);
        }
      }
      // 9回裏までの場合
      if (score.length < 17) {
        setScore([...score, Math.floor(Math.random() * 3)]);
      }
    }, 100);
    if (score.length > 17) {
      console.log('cleanInterval');
      return () => {
        clearInterval(timer);
      };
    }
  }, [score]);

  return (
    <div className='pt-12'>
      {/*scroe board*/}
      <div className='m-auto w-3/5'>
        <table className='w-full'>
          <caption>Scoreboard</caption>
          <thead>
            <tr className='border'>
              <th className=''>Team</th>
              <th className='border'>1st</th>
              <th className='border'>2nd</th>
              <th className='border'>3rd</th>
              <th className='border'>4th</th>
              <th className='border'>5th</th>
              <th className='border'>6th</th>
              <th className='border'>7th</th>
              <th className='border'>8th</th>
              <th className='border'>9th</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border'>
              <td data-th='Team'>
                <span className='long'>{selectedTeam}</span>
              </td>
              <td className='border' data-th='1st'>
                {score[0]}
              </td>
              <td className='border' data-th='2nd'>
                {score[2]}
              </td>
              <td className='border' data-th='3rd'>
                {score[4]}
              </td>
              <td className='border' data-th='4th'>
                {score[6]}
              </td>
              <td className='border' data-th='5th'>
                {score[8]}
              </td>
              <td className='border' data-th='6th'>
                {score[10]}
              </td>
              <td className='border' data-th='7th'>
                {score[12]}
              </td>
              <td className='border' data-th='8th'>
                {score[14]}
              </td>
              <td className='border' data-th='9th'>
                {score[16]}
              </td>
            </tr>
            <tr className='border'>
              <td data-th='Team'>
                <span className='long'>Padres</span>
              </td>
              <td className='border' data-th='1st'>
                {score[1]}
              </td>
              <td className='border' data-th='2nd'>
                {score[3]}
              </td>
              <td className='border' data-th='3rd'>
                {score[5]}
              </td>
              <td className='border' data-th='4th'>
                {score[7]}
              </td>
              <td className='border' data-th='5th'>
                {score[9]}
              </td>
              <td className='border' data-th='6th'>
                {score[11]}
              </td>
              <td className='border' data-th='7th'>
                {score[13]}
              </td>
              <td className='border' data-th='8th'>
                {score[15]}
              </td>
              <td className='border' data-th='9th'>
                {score[17]}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='pt-4 mx-auto w-3/5'>
        {gameResult.length > 1 && <p className='text-3xl'>{`${gameResult[0]}-${gameResult[1]}`}</p>}
        <p className='text-3xl'>{result}</p>
      </div>

      {/*試合開始*/}
      {/*<div className='m-auto w-1/5 pt-6'>
        <button
          className='rounded-md bg-yellow-600 p-2 text-black'
          onClick={playGame}
        >
          試合開始
        </button>
      </div>*/}
      {/*結果*/}
      <div></div>
    </div>
  );
};

export default GameDetail;
