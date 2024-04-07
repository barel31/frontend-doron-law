import { useEffect, useState } from 'react';

/**
 * Custom hook that returns a boolean indicating whether the user has scrolled to the top of the page.
 *
 * @param defValue - The default value for the isTop state. Defaults to true.
 * @returns A boolean value indicating whether the user has scrolled to the top of the page.
 */
function useIsScrollTop(defValue = true) {
  const [isTop, setIsTop] = useState(defValue);

  useEffect(() => {
    const scrollEvent = () => {
      setIsTop(window.scrollY <= 10);
    };

    window.addEventListener('scroll', scrollEvent, { passive: true });
    scrollEvent();

    return () => window.removeEventListener('scroll', scrollEvent);
  }, []);

  return isTop;
}

export default useIsScrollTop;
