import React, { ReactNode } from 'react';
import Sidebar from '@/components/layout/sidebar';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex h-screen flex-col'>
      <div className='flex flex-1'>
        <Sidebar />
        <main className='flex-1 p-4 w-full md:w-auto'>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
