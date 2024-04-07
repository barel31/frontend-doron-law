/**
 * Custom hook that detects clicks outside of a specified element.
 * @param ref - The ref object that points to the element to detect clicks outside of.
 * @param callback - The callback function to be executed when a click outside is detected.
 * @param isActive - A boolean indicating whether the hook is active or not.
 */
import { useEffect } from 'react';

/**
 * Custom hook that triggers a callback when a click event occurs outside of a specified element.
 *
 * @param ref - The ref object that points to the element to monitor for outside clicks.
 * @param callback - The callback function to be executed when an outside click is detected.
 * @param isActive - A boolean value indicating whether the hook should be active or not.
 */
const useOutsideClick = (
  ref: React.RefObject<HTMLElement>,
  callback: () => void,
  isActive: boolean
): void => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    if (isActive) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback, isActive]); // Re-run if ref, callback or isActive changes
};

export default useOutsideClick;
