import { getContactInfo, getRoute } from '@/client';
import Content from '@/components/Content';
import { type Metadata, type ResolvingMetadata } from 'next';
import metadataGenerator from '@/service/metadataGenerator';

export const generateMetadata = async (
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> => metadataGenerator('/', parent);

export default async function Home() {
  const [contact, route] = await Promise.all([getContactInfo, getRoute('/')]);

  return (
    <div className="page-content page-content-home text-slate-950 text-center">
      <Content route={route} contact={contact} />
    </div>
  );
}
