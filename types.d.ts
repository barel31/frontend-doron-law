interface SanityData {
	_createdAt: string;
	_rev: string;
	_type: string;
	name: string;
	_id: string;
	_updatedAt: string;
}

interface Route extends SanityData {
	slug: { current: string; _type: string };
	bio: Topography[];
	qAndA: QAndA[];
}

interface ContactInfo extends SanityData {
	name: string;
	email: string;
	phone: string;
	image: {
		_type: string;
		asset: {
			_ref: string;
			_type: string;
		};
	};
	mobile: string;
	email: string;
	fax: string;
	address: string;
	bio: Topography[];
}

interface Topography {
	children: Array<Object>;
	_type: string;
	style: string;
	_key: string;
	markDefs: Array;
}

interface QAndA {
	question: string;
	answer: string;
	_key: string;
}
