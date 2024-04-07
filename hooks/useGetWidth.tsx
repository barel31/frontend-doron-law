import { useEffect, useState } from 'react';

/**
 * Custom hook that returns the current width of the window.
 * @returns The current width of the window.
 */
function useGetWidth() {
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    const resizeEvent = () => setWidth(window.innerWidth);

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', resizeEvent, { passive: true });

      return () => window.removeEventListener('resize', resizeEvent);
    }
  }, []);

  return width;
}

export default useGetWidth;
