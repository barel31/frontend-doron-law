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
	content: Topography[];
	header?: Topography[];
	qAndA?: QAndA[];
	image?: {
		name: string;
		imageUrl: string;
	};
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
	fax: string;
	address: string;
	facebook: string;
	linkedin: string;
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

interface EmailObj {
	name: string;
	tel: string;
	email: string;
}
