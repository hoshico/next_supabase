import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { teamState } from '../../states/atoms/inputAtom';

const GameDetail = () => {
  const router = useRouter();
  const { userId, selectedTeam } = useRecoilValue(teamState);
  const [score, setScore] = useState<(number | string)[]>([]);
  const [result, setReasult] = useState('');
  const [gameResult, setGameResult] = useState<number[]>([]);

  useEffect(() => {
    if(!selectedTeam) {
      router.push("/team");
    }
    let awayTotalScore =
      (score[0] as number) +
      (score[2] as number) +
      (score[4] as number) +
      (score[6] as number) +
      (score[8] as number) +
      (score[10] as number) +
      (score[12] as number) +
      (score[14] as number) +
      (score[16] as number);

    let homeTotalScore =
      (score[1] as number) +
      (score[3] as number) +
      (score[5] as number) +
      (score[7] as number) +
      (score[9] as number) +
      (score[11] as number) +
      (score[13] as number) +
      (score[15] as number);

    if (score.length < 18) {
      const timer = setTimeout(() => {
        setScore([...score, Math.floor(Math.random() * 3)]);
      }, 100);

      // 9回裏で負け確定
      if (awayTotalScore < homeTotalScore) {
        setScore([...score, 'X']);
        return () => {
          clearTimeout(timer);
        };
      }
      // ９回裏まで
      return () => {
        clearTimeout(timer);
      };
    }
    // 9回表時点
    if (score[17]) {
      if (awayTotalScore < homeTotalScore) {
        setReasult('負け');
        setGameResult([awayTotalScore, homeTotalScore]);
      }
      // else if (awayTotalScore === homeTotalScore + (score[18] as number)) {
      //  setReasult('引き分け');
      //  setGameResult([awayTotalScore, homeTotalScore, (score[18]as number)]);
      //} else {
      //  setReasult('勝ち');
      //  setGameResult([awayTotalScore, homeTotalScore, (score[18]as number)]);
      //}
    }
  }, [score]);

  console.log(gameResult)

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

      <div>
        {gameResult[0]}-{gameResult[1]}
      </div>

      <div>{result}</div>
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
