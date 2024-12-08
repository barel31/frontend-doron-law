import { IconLeftArrow, IconRightArrow } from '@/lib/icons';

type CarouselControlsProps = {
  paginate: (newDirection: number) => void;
};

const CarouselControls = ({ paginate }: CarouselControlsProps) => (
  <div className="controls flex justify-between w-full px-6">
    <button onClick={() => paginate(-1)} aria-label="הבא">
      <IconRightArrow className="w-10 h-10" />
    </button>
    <button onClick={() => paginate(1)} aria-label="אחורה">
      <IconLeftArrow className="w-10 h-10" />
    </button>
  </div>
);

export default CarouselControls;
