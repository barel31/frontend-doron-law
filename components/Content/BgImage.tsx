import { urlFor } from '@/client';
import Image from 'next/image';

function BgImage({ url }: { url: { name: string; imageUrl: string } }) {
	return (
		<Image
			src={urlFor(url).url()}
			alt="Office image"
			width={2000}
			height={2000}
			priority
			className="w-full h-[90vh] background-image object-cover"
		/>
	);
}

export default BgImage;
