import { useEffect, useState } from 'react';

function useScrollPercent() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const scrollEvent = () => {
      const { scrollHeight, clientHeight } = document.documentElement;

      const calcHeight = scrollHeight - clientHeight;
      const scrollValue = Math.round((window.scrollY * 100) / calcHeight);

      setScroll(scrollValue);
    };

    addEventListener('scroll', scrollEvent, { passive: true });
    scrollEvent();

    return () => removeEventListener('scroll', scrollEvent);
  }, []);

  return scroll;
}

export default useScrollPercent;
