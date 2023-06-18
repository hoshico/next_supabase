import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../libs/supabaseClient';

const plyaersApi = async (_: NextApiRequest, res: NextApiResponse) => {
  let { data, error } = await supabase
    .from('players')
    .select('*')

    // 絞り込み方法
    // .eq('position', 'SS');

  if (error) {
    return res.status(500).json({ message: 'Not Found' });
  }
  return res.status(200).json(data);
};

export default plyaersApi;
