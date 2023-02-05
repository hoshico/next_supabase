import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { teamState } from '../../states/atoms/inputAtom';

const GameDetail = () => {
  const router = useRouter();
  const { userId, selectedTeam } = useRecoilValue(teamState);
  if (!selectedTeam) {
    return (
      <>
        <div>
          <button type="button" onClick={() => router.push("team")}>チーム選択に戻る</button>
        </div>
      </>
    );
  }
  return (
    <div className='pt-12'>
      {/*scroe board*/}
      <div className='m-auto w-3/5'>
        <table>
          <caption>Scoreboard</caption>
          <thead>
            <tr>
              <th className=''>Team</th>
              <th>1st</th>
              <th>2nd</th>
              <th>3rd</th>
              <th>4th</th>
              <th>5th</th>
              <th>6th</th>
              <th>7th</th>
              <th>8th</th>
              <th>9th</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-th='Team'>
                <span className='long'>{selectedTeam}</span>
              </td>
              <td data-th='1st'>0</td>
              <td data-th='2nd'>1</td>
              <td data-th='3rd'>0</td>
              <td data-th='4th'>0</td>
              <td data-th='5th'>1</td>
              <td data-th='6th'>0</td>
              <td data-th='7th'>0</td>
              <td data-th='8th'>3</td>
              <td data-th='9th'>0</td>
            </tr>
            <tr>
              <td data-th='Team'>
                <span className='long'>Padres</span>
              </td>
              <td data-th='1st'>0</td>
              <td data-th='2nd'>3</td>
              <td data-th='3rd'>0</td>
              <td data-th='4th'>0</td>
              <td data-th='5th'>0</td>
              <td data-th='6th'>1</td>
              <td data-th='7th'>0</td>
              <td data-th='8th'>2</td>
              <td data-th='9th'>0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GameDetail;
