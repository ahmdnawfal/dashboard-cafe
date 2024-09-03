'use client';

import React from 'react';
import { HashLoader } from 'react-spinners';

type LoadingProps = {
  height?: string | number;
  size?: 'sm' | 'md' | 'lg';
};

const Loading = ({ height, size }: LoadingProps) => {
  const sizeLoading = () => {
    if (size === 'sm') {
      return 30;
    } else if (size === 'md') {
      return 60;
    } else if (size === 'lg') {
      return 90;
    } else {
      return 30;
    }
  };

  return (
    <div
      className='flex justify-center items-center text-center'
      style={{ height: height }}
    >
      <HashLoader size={sizeLoading()} />
    </div>
  );
};

export default Loading;
