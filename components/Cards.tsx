import Card from './Card';

const Cards = ({ cards }: { cards: CardProps[] }) => {
  return (
    <div className='flex gap-4'>
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default Cards;
