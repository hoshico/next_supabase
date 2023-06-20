import { Player } from '../common/types';

type Props = {
  players: Player[];
};

export const DropDown = (props: Props) => {
  const { players } = props;
  console.log(players)

  if (!players) return <></>;
  return (
    <div>
      <select>
        <option disabled>
          choose player
        </option>
        {players.map((player) => (
          <option key={player.id}>{player.name}</option>
        ))}
      </select>
    </div>
  );
};
