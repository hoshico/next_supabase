import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../libs/supabaseClient';
import { Player } from '../../features/common/types';

const plyaersApi = async (_: NextApiRequest, res: NextApiResponse) => {
  let { data, error } = await supabase.from('players').select('*');

  // プロパティの絞り込み
  // .select("name")

  // 対象の絞り込み方法(クエリを使用して取得可能)
  // .eq('position', 'SS');

  if (error) {
    return res.status(500).json({ message: 'Not Found' });
  }
  return res.status(200).json(data);
};

export default plyaersApi;
