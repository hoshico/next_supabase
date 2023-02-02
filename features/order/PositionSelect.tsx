const PositionSelect = (props: any): JSX.Element => {
  const { players } = props;
  console.log(players);
  return (
    <select>
      {players.map((player: any) => (
        <option key={player.name}>{player.name}</option>
      ))}
    </select>
  );
};

export default PositionSelect;
