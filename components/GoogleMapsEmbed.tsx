export default function GoogleMapsEmbed({
  address,
  classNames = '',
}: {
  address: string;
  classNames?: string;
}) {
  return (
    <iframe
      title="Google Maps - Doron Hadad Law Office"
      className={`m-auto w-full h-full min-h-[300px] ${classNames}`}
      loading="lazy"
      allowFullScreen
      src={`https://www.google.com/maps/embed/v1/place?q=${address}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY}`}></iframe>
  );
}
