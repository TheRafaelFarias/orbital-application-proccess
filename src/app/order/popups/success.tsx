import CTAButton from '@/components/CTAButton';
import { ModalWrapper } from '@/components/PortalPrepare';
import { UniversalPortal } from '@jesstelford/react-portal-universal';
import Link from 'next/link';
import { useContext } from 'react';
import { PopupContext } from './PopupContext';

const SuccessPopup: React.FC = () => {
  return (
    <UniversalPortal selector="#portal-wrapper">
      <ModalWrapper>
        <div
          className="bg-white max-w-7xl w-3/4 rounded-2xl p-8 flex flex-col gap-y-5 items-center text-center"
          onClick={(event) => event.stopPropagation()}
        >
          <h1 className="text-text text-4xl">Order made with success</h1>

          <p className="font-description font-bold text-green-500 text-lg">
            You should get you pizza in 17 minutes
          </p>

          <Link href="/">
            <CTAButton
              name="Okay"
              style={{ backgroundColor: 'black' }}
              className="text-primary"
            />
          </Link>
        </div>
      </ModalWrapper>
    </UniversalPortal>
  );
};

export default SuccessPopup;
