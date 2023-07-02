'use client';

import { PopupContext } from '@/app/order/popups/PopupContext';
import { prepareClientPortals } from '@jesstelford/react-portal-universal';
import { useContext } from 'react';

if (typeof window !== 'undefined') {
  prepareClientPortals();
}

export const ModalWrapper: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { close } = useContext(PopupContext);

  return (
    <div
      onClick={(event) => {
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
        event.preventDefault();
        close();
      }}
      className="absolute h-screen w-screen top-0 left-0 bg-black bg-opacity-30 flex justify-center items-center"
    >
      {children}
    </div>
  );
};

const ModalSetup: React.FC = () => {
  return <div id="portal-wrapper"></div>;
};

export default ModalSetup;
