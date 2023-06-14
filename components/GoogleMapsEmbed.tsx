'use client';

export default function GoogleMapsEmbed({
// 	center,
// 	zoom = 11,
// }: {
// 	center: { lat: number; lng: number };
// 	zoom?: number;
}) {
	return (
		<iframe
			width="600"
			height="450"
			loading="lazy"
			src="https://www.google.com/maps/embed/v1/place?q=סוקולוב+20,+בני+ברק,+ישראל&key=AIzaSyCQfqPtZh41AuUmZ1HVGKwXHDaeAevUnK8"
		></iframe>
	);
}
