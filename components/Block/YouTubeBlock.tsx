import { type PortableTextTypeComponentProps } from 'next-sanity';

export default ({ value }: PortableTextTypeComponentProps<any>) => {
  const { url } = value;
  if (!url) return null;

  let videoId;

  // Handle both standard YouTube videos and Shorts
  if (url.includes('youtube.com/watch?v=')) {
    videoId = url.split('v=')[1]?.split('&')[0];
  } else if (url.includes('youtube.com/shorts/')) {
    videoId = url.split('shorts/')[1]?.split('?')[0];
  } else if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1]?.split('?')[0];
  } else {
    return null; // Return null if the URL doesn't match expected formats
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="youtube-block m-4">
      <iframe
        className="max-md:w-full"
        width="560"
        height="315"
        src={embedUrl}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="YouTube video"
        allowFullScreen
      />
    </div>
  );
};
