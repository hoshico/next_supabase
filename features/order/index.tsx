import { useForm } from "react-hook-form";

export const Order = (data: any) => {
  console.log(data);
  
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <select>
        <option>ddd</option>
        <option>ddd</option>
        <option>ddd</option>
      </select>
    </form>
  </div>
  )
};