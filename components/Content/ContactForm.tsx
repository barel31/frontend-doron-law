import Link from 'next/link';

const inputStyle = 'bg-slate-600 placeholder:text-white border-2 rounded';

function ContactForm({ contactInfo }: { contactInfo: ContactInfo }) {
	return (
		<div className="m-auto bg-slate-600 w-[100%] max-w-full mt-[18vh] flex flex-row text-lg justify-around px-36">
			<Link
				href={`tel:${contactInfo.mobile}`}
				className="w-1/2 m-auto text-lime-300 flex-1"
			>
				לייעוץ ראשוני התקשרו{' '}
				<span className="text-white">{contactInfo.mobile}</span> או
				השאירו פרטים:
			</Link>

			<form action="#" className="p-3 flex gap-2 flex-1 items-baseline">
				<input
					type="text"
					placeholder="* שם:"
					name="name"
					required
					className={inputStyle}
				/>
				<input
					type="text"
					placeholder="* טלפון:"
					name="tel"
					required
					className={inputStyle}
				/>
				<input
					type="text"
					placeholder="* אימייל:"
					name="email"
					required
					className={inputStyle}
				/>
				<button
					type="submit"
					className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-8 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
				>
					שלח
				</button>
			</form>
		</div>
	);
}

export default ContactForm;
