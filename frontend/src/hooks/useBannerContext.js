import { BannerContext } from '../context/BannerContext';
import { useContext } from 'react';

export const useBannerContext = () => {
  const context = useContext(BannerContext);
 
  if (!context) {
    throw Error('useBannerContext must be used inside an ItemsContextProvider');
  }

  return context;
};
