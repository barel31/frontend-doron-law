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
  children?: Route[];
  isChild?: boolean;
}

interface RouteLinkProps {
  route: Route;
  onNavClick: () => void;
  params: Params;
}

interface RouteLinkComponentProps extends RouteLinkProps {
  isChild?: boolean;
}

interface ContactInfo extends SanityData {
  nameEnglish: string;
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

interface MailData {
  name: string;
  tel: string;
  email: string;
  message?: string;
}

interface MailResponse {
  success: boolean;
  info?: SMTPTransport.SentMessageInfo;
  err?: Error;
}
