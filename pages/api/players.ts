import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../libs/supabaseClient';

const plyaersApi = async (_: NextApiRequest, res: NextApiResponse) => {
  let { data, error } = await supabase.from('players').select('*');

  if (error) {
    return res.status(500).json({ message: 'Not Found' });
  }
  return res.status(200).json(data);
};

export default plyaersApi;
