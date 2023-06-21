import { useTheme } from 'next-themes';
import { FaMoon, FaSun } from 'react-icons/fa';

function Theme({ show, mobile }: { show: boolean; mobile: boolean }) {
	const { theme, setTheme } = useTheme();

	const handleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

	return (
		<div
			className={`theme-toggle self-center z-10 ${
				show || !mobile ? 'visible' : 'invisible'
			}`}
		>
			<input
				type="checkbox"
				className="absolute opacity-0"
				id="checkbox"
				onClick={handleTheme}
			/>
			<label
				htmlFor="checkbox"
				className="relative bg-slate-300 dark:bg-slate-700 w-[50px] h-[26px] rounded-full p-[5px] cursor-pointer flex justify-between items-center"
			>
				<FaSun className="text-[#f39c12]" />
				<FaMoon className="text-[#f1c40f]" />
				<span className="bg-slate-200 dark:bg-slate-600 w-[22px] h-[22px] absolute left-[2px] top-[2px] rounded-full transition-transform duration-200 ease-linear dark:translate-x-[24px]" />
			</label>
		</div>
	);
}

export default Theme;
