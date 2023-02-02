import { useForm } from "react-hook-form";
import { uesFilter } from "./useFilter";

export const Order = (props: any) => {
  const { players } = props;
  
  /**
   * players情報から
   */
  const { filterPlayers } = uesFilter();
  const data = filterPlayers(players);
  console.log(data);

  //const outFieldPlayers = players.filter((player:any) => {
  //  return player.position === '外野手'
  //})
  //console.log(outFieldPlayers);


  const {register, handleSubmit, formState: {isDirty, dirtyFields}} = useForm({
    defaultValues: {
      firstPlayer: "",
    }
  })
  const onSubmit = (data: any) =>{
    console.log(data);
  }
  return (
    <div className='bg-white'>
      <div>

      </div>
    <form onSubmit={handleSubmit(onSubmit)}>
      {/*<select>
      {outFieldPlayers.map((outFieldPlayer: any) => {
        <option key={outFieldPlayer.name}>{outFieldPlayer.name}</option>
      }) }
      </select>*/}
    </form>
  </div>
  )
};