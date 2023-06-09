'use client';

import useScrollPercent from '@/hooks/useScrollPercent';
import React, { useEffect, useRef } from 'react';

function ScrollLine() {
	const ref = useRef<HTMLDivElement>(null);

	const scroll = useScrollPercent();

	useEffect(() => {
		ref.current!.style.width = scroll + 'vw';
	}, [scroll]);

	return (
		<div
			className="bg-slate-400 dark:bg-slate-800 fixed top-0 h-1 transition-all duration-0"
			ref={ref}
		/>
	);
}

export default ScrollLine;
