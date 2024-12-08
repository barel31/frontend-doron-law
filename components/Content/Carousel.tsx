// 'use client';

// import React, { useState, useCallback } from 'react';
// import Image from 'next/image';
// import { motion } from 'motion/react';
// import { useSwipeable } from 'react-swipeable';
// import { IconLeftArrow, IconRightArrow } from '@/utils/icons';
// import Link from 'next/link';

// function CarouselImages({ images }: { images: string[] }) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const changeImage = useCallback(
//     (step: number) => {
//       setCurrentIndex((currentIndex + step + images.length) % images.length);
//     },
//     [currentIndex, images.length]
//   );

//   const nextImage = () => changeImage(1);
//   const prevImage = () => changeImage(-1);

//   const handlers = useSwipeable({
//     onSwipedLeft: () => nextImage(),
//     onSwipedRight: () => prevImage(),
//     trackMouse: true,
//   });

//   return (
//     <div className="flex items-center justify-center p-2" {...handlers}>
//       <button onClick={prevImage}>
//         <IconRightArrow className="w-10 h-10" />
//       </button>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="mx-4"
//         key={currentIndex}>
//         <Link href={images[currentIndex]} target="_blank" title='תעודה לחץ לפתיחה בחלון חדש'>
//           <Image
//             src={images[currentIndex]}
//             alt="carousel"
//             width={300}
//             height={500}
//             className="w-[300px] h-[500px]"
//           />
//         </Link>
//       </motion.div>
//       <button onClick={prevImage}>
//         <IconLeftArrow className="w-10 h-10" />
//       </button>
//     </div>
//   );
// }

// export default CarouselImages;
