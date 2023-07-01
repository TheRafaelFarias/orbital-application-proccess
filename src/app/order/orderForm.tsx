'use client';

import CTAButton from '@/components/CTAButton';
import Input from '@/components/Input';
import { useForm } from 'react-hook-form';

const OrderForm: React.FC = () => {
  const { register, handleSubmit, watch } = useForm();

  const isAllFilled =
    watch('name') !== '' &&
    watch('email') !== '' &&
    watch('address') !== '' &&
    watch('phoneNumber') !== '';

  return (
    <form
      onSubmit={handleSubmit(
        (data) => console.log(data),
        (data) => console.log(data)
      )}
      className="flex flex-col mt-20 gap-y-7 items-center w-5/6 mx-auto"
    >
      <CTAButton name="Choose your pizza" />
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

export default OrderForm;
