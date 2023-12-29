import { useState } from 'react';
import { BlockScrollProvider } from '../providers/BlockScrollProvider';

export const BlockScrollContext = ({ children }) => {
  const [isScrollAllow, setIsScrollAllow] = useState(true);

  const setScrollAllow = (value) => setIsScrollAllow(value);

  const value = {
    isScrollAllow,
    setScrollAllow,
  };

  return <BlockScrollProvider.Provider value={value}>{children}</BlockScrollProvider.Provider>;
};
