import { useState } from 'react';

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
