import React, { ReactNode } from 'react'
import Main from './Main';
import Sidebar from './Sidebar';

type Props = {
  children: ReactNode;
  title?: string;
}

export default function Layout({ children, title="MLB SHOW"}: Props) {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <Main>{children}</Main>
      </div>
    </>
  )
}
