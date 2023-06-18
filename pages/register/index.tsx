import type { NextPage } from 'next';
import Router from 'next/router';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { InputFormType, inputState } from '../../states/atoms/inputAtom';

const Register: NextPage = () => {
  const [input, setInput] = useRecoilState(inputState);

  const { register, handleSubmit } = useForm<InputFormType>({
    defaultValues: {
      id: input.id,
      name: input.name,
    },
  });

  const onSubmit = handleSubmit((data: InputFormType) => {
    setInput((currentInput) => ({
      ...currentInput,
      ...{
        id: data.id,
        name: data.name,
      },
    }));
    Router.push('/play');
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>
            <span>id:</span>
            <input type='text' {...register('id')} />
          </label>
        </div>
        <div>
          <label>
            <span>name:</span>
            <input type='text' {...register('name')} />
          </label>
        </div>
        <div>
          <button type='submit'>confirm</button>
        </div>
      </form>
    </div>
  );
};
export default Register;
