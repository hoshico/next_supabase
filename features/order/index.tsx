import { useForm } from "react-hook-form";

export const Order = (props: any) => {
  const { players } = props;
  
  const outFieldPlayers = players.filter((player:any) => {
    return player.position === '外野手'
  })
  console.log(outFieldPlayers);


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
    {/*<form onSubmit={handleSubmit(onSubmit)}>
      <select>
        <option>ddd</option>
        <option>ddd</option>
        <option>ddd</option>
      </select>
    </form>*/}
  </div>
  )
};