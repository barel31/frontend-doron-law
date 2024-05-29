import UsePortableText from './UseRichText';

const ContentHeader = ({ route }: { route: Route }) => (
  <div className="content-header mx-auto text-center p-5 mt-32 mb-12 m-5 w-fit rounded-lg text-slate-900 dark:text-slate-200 bg-slate-300 dark:bg-slate-800 bg-opacity-70 dark:bg-opacity-70 backdrop-brightness-110 dark:backdrop-brightness-50 dark:backdrop-saturate-0 normal-line-height font-sans">
    {route?.header && <UsePortableText value={route.header!} />}
  </div>
);

export default ContentHeader;
