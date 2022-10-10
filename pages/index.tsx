import { Session } from '@supabase/supabase-js';
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Auth from '../components/Auth';
import { supabase } from '../libs/supabaseClient';

const Home: NextPage = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    })
  }, [])

  return (
    <>
      {!session ? (
        <Auth />
      ) : (
        <>トップページ</>
      )}
    </>
  )
}
export default Home;
