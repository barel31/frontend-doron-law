import { useEffect, useState } from 'react';

function useIsScrollTop(defValue = true) {
	const [isTop, setIsTop] = useState(defValue);

	useEffect(() => {
		const scrollEvent = () => {
			if (window.scrollY <= 10) {
				setIsTop(true);
			} else if (window.scrollY) {
				setIsTop(false);
			}
		};

		addEventListener('scroll', scrollEvent, { passive: true });
		scrollEvent();

		return () => removeEventListener('scroll', scrollEvent);
	}, []);

	return isTop;
}

export default useIsScrollTop;
