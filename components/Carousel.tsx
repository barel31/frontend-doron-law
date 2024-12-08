'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { IconLeftArrow, IconRightArrow } from '@/lib/icons';

type CarouselProps = {
  images: string[];
};

// Animation variants for the carousel images
const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300, // New image enters from the right if direction is positive, else from left
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0, // Center the image
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction > 0 ? -300 : 300, // Current image exits to the left if direction is positive, else to the right
    opacity: 0,
  }),
};

const swipeConfidenceThreshold = 10000;

const Carousel = ({ images }: CarouselProps) => {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const [allImagesLoaded, setAllImagesLoaded] = useState<boolean>(false);
  const [loadedCount, setLoadedCount] = useState<number>(0);

  const imageIndex = ((page % images.length) + images.length) % images.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  // Preload all images and track loading progress
  useEffect(() => {
    let loadedImages = 0;

    const handleImageLoad = () => {
      loadedImages++;
      setLoadedCount(loadedImages);
      if (loadedImages === images.length) {
        setAllImagesLoaded(true);
      }
    };

    images.forEach(src => {
      const img = new Image();
      img.src = src;
      if (img.complete) {
        handleImageLoad();
      } else {
        img.onload = handleImageLoad;
      }
    });
  }, [images]);

  if (!allImagesLoaded) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
          <p className="mt-4 text-lg font-semibold">
            Loading Images ({loadedCount}/{images.length})
          </p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="carousel flex flex-col items-center max-w-md my-24 mx-auto space-y-4">
      <div className="carousel-content relative flex justify-center items-center w-full overflow-hidden min-h-[400px]">
        <AnimatePresence initial={false} custom={direction}>
          <Link
            title="Open large image"
            href={images[imageIndex]}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center">
            <motion.img
              key={page}
              src={images[imageIndex]}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 200, damping: 50 },
                opacity: { duration: 0.4 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.8}
              onDragEnd={(_, { offset, velocity }) => {
                const swipe = offset.x * velocity.x;
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1); // Left swipe (next image)
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1); // Right swipe (previous image)
                }
              }}
              className="w-full object-cover rounded-lg h-full"
              alt={`Carousel image ${imageIndex + 1}`}
            />
          </Link>
        </AnimatePresence>
      </div>
      <CarouselControls paginate={paginate} />
    </motion.div>
  );
};

type CarouselControlsProps = {
  paginate: (newDirection: number) => void;
};

const CarouselControls = ({ paginate }: CarouselControlsProps) => (
  <div className="controls flex justify-between w-full px-6">
    <button
      aria-label="Previous image"
      className="carousel-prev flex justify-center items-center select-none cursor-pointer font-bold text-lg z-10 hover:scale-105 transition-transform duration-300 ease-in-out"
      onClick={() => paginate(-1)}>
      <IconRightArrow className="w-10 h-10 fill-slate-900 dark:fill-slate-300 dark:bg-slate-800 rounded-full hover:fill-slate-700 dark:hover:fill-slate-500" />
    </button>
    <button
      aria-label="Next image"
      className="carousel-next flex justify-center items-center select-none cursor-pointer font-bold text-lg z-10 hover:scale-105 transition-transform duration-300 ease-in-out"
      onClick={() => paginate(1)}>
      <IconLeftArrow className="w-10 h-10 fill-slate-900 dark:fill-slate-300 dark:bg-slate-800 rounded-full hover:fill-slate-700 dark:hover:fill-slate-500" />
    </button>
  </div>
);

export default Carousel;
