'use client';

import { useRef } from 'react';

interface GoogleMapsEmbedProps {
  address: string;
}

export default function GoogleMapsEmbed({ address }: GoogleMapsEmbedProps) {
  const ref = useRef<HTMLIFrameElement>(null);

  return (
    <iframe
      ref={ref}
      className="m-auto w-full h-full"
      loading="lazy"
      allowFullScreen
      src={`https://www.google.com/maps/embed/v1/place?q=${address}&key=AIzaSyCQfqPtZh41AuUmZ1HVGKwXHDaeAevUnK8`}></iframe>
  );
}
