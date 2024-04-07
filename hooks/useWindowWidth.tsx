import { useState, useEffect } from 'react';

/**
 * Custom hook that returns the current width of the window.
 * @param defaultWidth - The default width to be used if the window width is not available.
 * @returns The current width of the window.
 */
function useWindowWidth(defaultWidth: number) {
  const [width, setWidth] = useState(defaultWidth);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return width;
}

export default useWindowWidth;
