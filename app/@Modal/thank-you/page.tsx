import ModalUi from '@/components/Modal';
import { IconParkSolidCorrect } from '@/lib/icons';

function Modal() {
  return (
    <ModalUi>
      <IconParkSolidCorrect className="m-auto w-1/4 mb-4" />

      <h1 className="text-3xl/10">תודה על פנייתך</h1>

      <h2 className="font-bold text-lime-500 text-lg m-2">
        ההודעה נשלחה בהצלחה. אנו נחזור אליך בהקדם.
      </h2>
    </ModalUi>
  );
}

export default Modal;
