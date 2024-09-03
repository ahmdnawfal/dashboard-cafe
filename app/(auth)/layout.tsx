import React from 'react';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className='grid min-h-screen grid-cols-1 md:grid-cols-2 items-center'>
      <section
        className='hidden md:block min-h-screen px-4'
        style={{
          backgroundImage: 'url(/background-auth.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></section>
      <section className='flex justify-center px-4'>{children}</section>
    </main>
  );
};

export default Layout;
