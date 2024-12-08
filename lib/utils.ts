import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleString('en-GB', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
};

export const calculateSwipePower = (offset: number, velocity: number) => 
  Math.abs(offset) * velocity;

export const handleDragEnd = (
  offset: { x: number }, 
  velocity: { x: number }, 
  paginate: (newDirection: number) => void
) => {
  const swipeConfidenceThreshold = 10000;
  const swipePower = calculateSwipePower(offset.x, velocity.x);
  if (swipePower < -swipeConfidenceThreshold) paginate(1);
  if (swipePower > swipeConfidenceThreshold) paginate(-1);
};
