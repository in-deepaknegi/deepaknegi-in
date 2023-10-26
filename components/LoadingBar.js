// components/LoadingBar.js
import React from 'react';

const LoadingBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-[0.08rem]">
      <div className="h-full bg-blue-600 animate-slide" />
    </div>
  );
};

export default LoadingBar;
