import { handleDragEnd } from '@/lib/utils';
import { imageTransition, imageVariants } from '@/lib/variants';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';

type CarouselContentProps = {
  images: string[];
  page: number;
  direction: number;
  paginate: (newDirection: number) => void;
};

const CarouselContent = ({
  images,
  page,
  direction,
  paginate,
}: CarouselContentProps) => {
  const imageIndex = ((page % images.length) + images.length) % images.length;

  return (
    <div className="carousel-content relative flex justify-center items-center w-full overflow-hidden min-h-[400px]">
      <AnimatePresence initial={false} custom={direction}>
        <Link
          href={images[imageIndex]}
          target="_blank"
          rel="noopener noreferrer">
          <motion.img
            key={page}
            src={images[imageIndex]}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            variants={imageVariants}
            transition={imageTransition}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.8}
            onDragEnd={(_, { offset, velocity }) =>
              handleDragEnd(offset, velocity, paginate)
            }
            className="w-full object-cover rounded-lg h-full"
            alt={`Carousel image ${imageIndex + 1}`}
          />
        </Link>
      </AnimatePresence>
    </div>
  );
};

export default CarouselContent;
