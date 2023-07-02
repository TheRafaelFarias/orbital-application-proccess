'use client';

import CTAButton from '@/components/CTAButton';
import Input from '@/components/Input';
import Image from 'next/image';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import {
  PopupContext,
  PopupContextProps,
  PopupContextProvider,
} from './popups/PopupContext';

const OrderForm: React.FC = () => {
  const { register, handleSubmit, watch } =
    useForm<NonNullable<PopupContextProps['userData']>>();
  const { setUserData, setPopupShown, selectedPizza } =
    useContext(PopupContext);

  const isAllFilled =
    watch('name') !== '' &&
    watch('email') !== '' &&
    watch('address') !== '' &&
    watch('phoneNumber') !== '';

  return (
    <form
      onSubmit={handleSubmit((data) => {
        setUserData(data);
        setPopupShown('reviewOrderInformation');
      })}
      className={`flex flex-col gap-y-7 items-center w-5/6 mx-auto ${
        selectedPizza ? 'mt-14' : 'mt-20'
      }`}
    >
      {selectedPizza && (
        <div className="bg-white py-5 px-3 sm:px-10 gap-x-2 sm:gap-x-6 flex items-center rounded-2xl">
          <div className="h-20 w-20 sm:h-24 sm:w-24 relative">
            <Image src={selectedPizza.imagePath} fill alt="name" />
          </div>
          <p className="text-2xl">{selectedPizza.name}</p>
        </div>
      )}
      <CTAButton
        name="Choose your pizza"
        action={() => setPopupShown('choosePizza')}
      />
      <Input name="name" register={register} placeholder="Your name" />
      <Input
        name="email"
        register={register}
        placeholder="Your email"
        type="email"
      />
      <Input name="address" register={register} placeholder="Your address" />
      <Input
        name="phoneNumber"
        register={register}
        placeholder="Your phone number"
        type="number"
      />
      <CTAButton
        disabled={!isAllFilled}
        type="submit"
        name="Order now"
        className="mt-16"
      />
    </form>
  );
};

const OrderFormWithPopupContext: React.FC = () => {
  return (
    <PopupContextProvider>
      <OrderForm />
    </PopupContextProvider>
  );
};

export default OrderFormWithPopupContext;
