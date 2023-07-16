'use client';

import useGetWidth from '@/hooks/useGetWidth';
import { useTheme } from 'next-themes';

export default function GoogleMapsEmbed({
	address,
	width = 0,
	height = 0,
	mobileDynamicRatio = 1,
	tabletDynamicRatio = 1,
	dynamicRatio = 1,
	even = false,
}: {
	address: string;
	width?: number;
	height?: number;
	mobileDynamicRatio?: number;
	tabletDynamicRatio?: number;
	dynamicRatio?: number;
	even?: boolean;
}) {
	const _width = useGetWidth();
	const { theme } = useTheme();
	const darkTheme = theme === 'dark';

	const setHeight = height
		? height
		: _width < 768
		? (_width / 1.5) * mobileDynamicRatio
		: _width < 1024
		? (_width / 1.5) * tabletDynamicRatio
		: 350 * dynamicRatio;

	const SetWidth = width
		? width
		: _width < 768
		? (_width / 1.05) * mobileDynamicRatio
		: _width < 1024
		? (_width / 1.05) * tabletDynamicRatio
		: (_width / 3) * dynamicRatio;

	return (
		<iframe
			className="m-auto"
			width={SetWidth}
			height={even ? SetWidth : setHeight}
			loading="lazy"
			allowFullScreen
			src={`https://www.google.com/maps/embed/v1/place?q=${address}&key=AIzaSyCQfqPtZh41AuUmZ1HVGKwXHDaeAevUnK8`}
			style={{ filter: darkTheme ? 'invert(90%)' : 'invert(0%)' }}
		></iframe>
	);
}
