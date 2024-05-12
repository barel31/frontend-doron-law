'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import { IconLeftArrow, IconRightArrow } from '@/utils/icons';
import Link from 'next/link';

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const Carousel = ({ images }: { images: string[] }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="carousel relative flex justify-center items-center w-[300px] my-56 mx-auto">
      <AnimatePresence initial={false} custom={direction}>
        <Link
          title="תעודה לחץ לפתיחת תמונה גדולה"
          className="absolute"
          href={images[imageIndex]}
          target="_blank">
          <motion.img
            key={page}
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </Link>
      </AnimatePresence>
      <div
        className="carousel-next absolute rounded-full flex justify-center items-center select-none cursor-pointer font-bold text-lg z-10 right-[-55px] hover:scale-105 transition-transform duration-300 ease-in-out"
        onClick={() => paginate(1)}>
        <IconRightArrow className="w-10 h-10 fill-slate-900 dark:fill-slate-300 dark:bg-slate-800 rounded-full hover:fill-slate-700 dark:hover:fill-slate-500" />
      </div>
      <div
        className="carousel-prev absolute rounded-full flex justify-center items-center select-none cursor-pointer font-bold text-lg z-10 left-[-55px] hover:scale-105 transition-transform duration-300 ease-in-out"
        onClick={() => paginate(-1)}>
        <IconLeftArrow className="w-10 h-10 fill-slate-900 dark:fill-slate-300 dark:bg-slate-800 rounded-full hover:fill-slate-700 dark:hover:fill-slate-500" />
      </div>
    </div>
  );
};

export default Carousel;
