import Cards from '../Cards';

const HomePageRecommendations = ({ cards }: { cards: CardProps[] }) => {
  return (
    <div className="xl:p-20">
      <h1 className="text-4xl md:text-4xl font-bold tracking-tight mt-8 mb-4">
        מה הלקוחות שלנו אומרים עלינו
      </h1>
      {<Cards cards={cards} />}
    </div>
  );
};

export default HomePageRecommendations;
