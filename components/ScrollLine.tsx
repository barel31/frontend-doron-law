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
			className={` w-10 h-2 bg-slate-800 transition-all duration-75 `}
			ref={ref}
		/>
	);
}

export default ScrollLine;
