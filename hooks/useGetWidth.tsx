import { useEffect, useState } from 'react';

function useGetWidth() {
	const [width, setWidth] = useState(0);

	const resizeEvent = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		addEventListener('resize', resizeEvent, { passive: true });
		resizeEvent();
		return () => removeEventListener('resize', resizeEvent);
	}, []);

	return width;
}

export default useGetWidth;
