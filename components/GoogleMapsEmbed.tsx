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

	const calcHeight = () => {
		if (height) {
			return height;
		} else if (_width < 768) {
			return (_width / 1.5) * mobileDynamicRatio;
		} else if (_width < 1024) {
			return (_width / 1.5) * tabletDynamicRatio;
		} else return 350 * dynamicRatio;
	};

	const calcWidth = () => {
		if (width) {
			if (width > _width) return _width;
			else return width;
		} else if (_width < 768) {
			return (_width / 1.05) * mobileDynamicRatio;
		} else if (_width < 1024) {
			return (_width / 1.05) * tabletDynamicRatio;
		} else return (_width / 3) * dynamicRatio;
	};
	
	return (
		<iframe
			className="m-auto"
			width={calcWidth()}
			height={even ? calcWidth() : calcHeight()}
			loading="lazy"
			allowFullScreen
			src={`https://www.google.com/maps/embed/v1/place?q=${address}&key=AIzaSyCQfqPtZh41AuUmZ1HVGKwXHDaeAevUnK8`}
			style={{ filter: darkTheme ? 'invert(90%)' : 'invert(0%)' }}
		></iframe>
	);
}
