import { useState } from 'react';

/**
 * Custom hook that tracks whether an element is being hovered over.
 * @returns A tuple containing a boolean value indicating whether the element is hovered,
 * and an object with event handlers for onMouseEnter and onMouseLeave events.
 */
const useHover = (): [
  boolean,
  {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  }
] => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const hoverEvents = {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };

  return [isHovered, hoverEvents];
};

export default useHover;
