import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="loading-container">

      <p className="loading-text py-2 px-8 text-lg lg:text-xl text-white font-medium rounded-md p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg">
        Aguarde, por favor...
      </p>
    </div>
  );
};

export default LoadingSpinner;
