import { getContactInfo, getRoute } from '@/lib/client';
import Content from '@/components/Content';
import { type Metadata, type ResolvingMetadata } from 'next';
import metadataGenerator from '@/service/metadataGenerator';

export const generateMetadata = async (
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> => metadataGenerator('/', parent);

export default async function Home() {
  const [contact, route, recommendations] = await Promise.all([
    getContactInfo,
    getRoute('/'),
    getRoute('recommendations'),
  ]);

  return (
    <div className="page-content page-content-home text-slate-950 text-center">
      <Content recommendations={recommendations} isHomePage={true} route={route} contact={contact} />
    </div>
  );
}
