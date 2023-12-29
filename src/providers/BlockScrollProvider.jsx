import { createContext } from 'react';

const initialContext = {
  isScrollAllow: true,
  setScrollAllow: () => {},
};

export const BlockScrollProvider = createContext(initialContext);
