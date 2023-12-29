import { useLayoutEffect, useRef } from 'react';
import { calcCssValues } from '../helpers/calcSccValues';

const DEFAULT_Z_SPACING = -1000;

export const useScrollAnimations = () => {
  const lastPosition = useRef(DEFAULT_Z_SPACING / 5);
  const allItems = useRef([]);
  const zIndexValues = useRef([]);

  useLayoutEffect(() => {
    const allFrames = document.querySelectorAll('.item');
    allItems.current = allFrames;
    zIndexValues.current = Array(allFrames.length)
      .fill(0)
      .map((_, i) => i * DEFAULT_Z_SPACING + DEFAULT_Z_SPACING);
  }, []);

  const setCssValues = (top) => {
    let delta = lastPosition.current - top;
    lastPosition.current = top;
    allItems.current.forEach((_, i) => {
      zIndexValues.current[i] += delta * -5;
      const frame = allItems.current[i];
      const { transform, opacity, visibility, pointerEvents } = calcCssValues(
        zIndexValues.current[i],
        DEFAULT_Z_SPACING
      );

      frame.setAttribute(
        'style',
        `      
        transform:${transform}; 
        opacity:${opacity}; 
        visibility:${visibility};
        pointer-events:${pointerEvents};
        `
      );
    });
  };

  return setCssValues;
};
