import React from 'react';

const LoadingSpinnerTab: React.FC = () => {
  return (


    <div className='w-full px-10 h-8'>
      <div className='h-1.5 w-full bg-pink-100 overflow-hidden'>
        <div className='progress w-full h-full bg-black left-right'></div>
      </div>
    </div>

  );
};

export default LoadingSpinnerTab;
