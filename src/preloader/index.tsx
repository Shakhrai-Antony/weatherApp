import React from 'react';

import preloader from '@/assets/preloader.png';
import { PreloaderImg, PreloaderWrapper } from '@/preloader/styles';

const Preloader = () => {
  return (
    <PreloaderWrapper>
      <PreloaderImg src={preloader} alt="preloader" />
    </PreloaderWrapper>
  );
};

export default Preloader;
