import { useFormContext } from 'react-hook-form';

const PositionSelect = (props: any): JSX.Element => {
  const { players, label } = props;
  const { register } = useFormContext();
  return (
    <div className='p-4 hover:bg-gray-200'>
      <div>
        <label>{label}</label>
      </div>
      <select {...register(label)}>
        {players.map((player: any) => (
          <option value={player.name} key={player.name}>
            {player.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PositionSelect;
