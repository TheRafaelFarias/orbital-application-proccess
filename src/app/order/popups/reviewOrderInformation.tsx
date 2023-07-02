import CTAButton from '@/components/CTAButton';
import { ModalWrapper } from '@/components/PortalPrepare';
import { UniversalPortal } from '@jesstelford/react-portal-universal';
import Image from 'next/image';
import { useContext } from 'react';
import { PopupContext } from './PopupContext';

const FakeInput = ({ data }: { data: string }) => {
  return (
    <div className="border-b-4 py-2 border-black w-full px-4">
      <p className="text-text text-opacity-60 w-full text-base md:text-xl font-description font-light bg-transparent outline-none">
        {data}
      </p>
    </div>
  );
};

const ReviewOderInformation: React.FC = () => {
  const { selectedPizza, userData, setPopupShown } = useContext(PopupContext);

  return (
    <UniversalPortal selector="#portal-wrapper">
      <ModalWrapper>
        <div
          className="bg-white max-w-7xl w-11/12 sm:w-3/4 rounded-2xl py-8 px-4 sm:px-8 flex flex-col gap-y-5 items-center"
          aria-modal
          onClick={(event) => event.stopPropagation()}
        >
          <div>
            <h1 className="text-text text-4xl text-center">
              Order almost made
            </h1>
            <p className="font-description font-bold text-black text-opacity-70 text-base">
              Please validate the provided data
            </p>
          </div>

          <div className="bg-white py-5 px-3 sm:px-10 gap-x-4 sm:gap-x-6 flex items-center rounded-2xl">
            <div className="h-32 w-32 relative">
              <Image src={selectedPizza!.imagePath} fill alt="name" />
            </div>
            <p className="text-2xl">{selectedPizza!.name}</p>
          </div>

          <FakeInput data={userData!.name} />
          <FakeInput data={userData!.email} />
          <FakeInput data={userData!.address} />
          <FakeInput data={userData!.phoneNumber} />

          <CTAButton
            name="All correct"
            style={{ backgroundColor: 'black' }}
            className="text-primary"
            action={() => setPopupShown('success')}
          />
        </div>
      </ModalWrapper>
    </UniversalPortal>
  );
};

export default ReviewOderInformation;
