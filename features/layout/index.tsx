import { ReactElement } from 'react';
import Layout from '../../components/Layout';

export const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};
