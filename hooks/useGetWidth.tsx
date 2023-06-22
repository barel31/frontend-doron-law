import { useEffect, useState } from 'react';

function useGetWidth() {
	const [width, setWidth] = useState(0);

	useEffect(() => {
		const resizeEvent = () => setWidth(window.innerWidth);

		addEventListener('resize', resizeEvent, { passive: true });
		resizeEvent();

		return () => removeEventListener('resize', resizeEvent);
	}, []);

	return width;
}

export default useGetWidth;
