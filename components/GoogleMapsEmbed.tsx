'use client';

export default function GoogleMapsEmbed({
	address,
	width,
	height,
}: {
	address: string;
	width: number;
	height: number;
}) {
	return (
		<iframe
			className="m-auto"
			width={width}
			height={height}
			loading="lazy"
			allowFullScreen
			src={`https://www.google.com/maps/embed/v1/place?q=${address}&key=AIzaSyCQfqPtZh41AuUmZ1HVGKwXHDaeAevUnK8`}
		></iframe>
	);
}
