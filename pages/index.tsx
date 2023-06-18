import type { NextPage } from 'next';
import Router from 'next/router';

const Home: NextPage = () => {
  const onStart = () => {
    Router.push('/play');
  };

  return (
    <div className='grid  h-screen items-center justify-center'>
      <div className='grid h-40 justify-center'>
        <p className='text-lg'>MLB GAMES</p>
        <div className='grid items-center'>
          <button className='btn' onClick={onStart}>
            start
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
