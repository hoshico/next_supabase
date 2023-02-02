import { useForm } from "react-hook-form";
import PositionSelect from "./PositionSelect";
import { uesFilter } from "./useFilter";

const Order = (props: any) => {
  const { players } = props;
  
  /**
   * players情報から
   */
  const { filterPlayers } = uesFilter();
  const selectedPositionData = filterPlayers(players);

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
      {/*外野手*/}
      <div>
        <PositionSelect players={selectedPositionData.outFielder}/>
      </div>
    </form>
  </div>
  )
};

export default Order;