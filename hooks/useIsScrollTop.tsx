import { useEffect, useState } from 'react';

function useIsScrollTop() {
	const [isTop, setIsTop] = useState(true);

	const scrollEvent = () => {
		if (window.scrollY <= 10) {
			setIsTop(true);
		} else if (window.scrollY) {
			setIsTop(false);
		}
	};

	useEffect(() => {
		addEventListener('scroll', scrollEvent, { passive: true });
		scrollEvent();
		return () => removeEventListener('scroll', scrollEvent);
	}, []);

	return isTop;
}

export default useIsScrollTop;
