// /**
//  * A custom React hook that calculates the scroll percentage of the page.
//  *
//  * @returns The scroll percentage as a number between 0 and 100.
//  */
// import { useEffect, useState } from 'react';

// function useScrollPercent() {
//   const [scroll, setScroll] = useState(0);

//   useEffect(() => {
//     const scrollEvent = () => {
//       const { scrollHeight, clientHeight } = document.documentElement;

//       const calcHeight = scrollHeight - clientHeight;
//       const scrollValue = Math.round((window.scrollY * 100) / calcHeight);

//       setScroll(scrollValue);
//     };

//     addEventListener('scroll', scrollEvent, { passive: true });
//     scrollEvent();

//     return () => removeEventListener('scroll', scrollEvent);
//   }, []);

//   return scroll;
// }

// export default useScrollPercent;
