import { useRecoilValue } from "recoil";
import { teamState } from "../../states/atoms/inputAtom";

const GameDetail = () => {
  const teamInfo = useRecoilValue(teamState);
  console.log(teamInfo);
  return (
    <div>
      <div>{teamInfo.userId}</div>
      <div>{teamInfo.selectedTeam}</div>
    </div>
  )
};

export default GameDetail;