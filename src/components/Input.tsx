'use client';

import { Path, UseFormRegister } from 'react-hook-form';

interface InputProps<FormValues extends Record<string, any>> {
  placeholder?: string;
  type?: string;
  name: Path<FormValues>;
  register: UseFormRegister<FormValues>;
}

const Input = <FormValues extends Record<string, any>>({
  placeholder,
  type,
  register,
  name,
}: InputProps<FormValues>) => {
  return (
    <div className="border-b-4 py-2 border-black w-full px-4">
      <input
        {...register(name, { required: true })}
        type={type ?? 'text'}
        placeholder={placeholder}
        className="text-text w-full text-base md:text-xl font-description font-light bg-transparent outline-none placeholder:text-text placeholder:text-opacity-60"
      />
    </div>
  );
};

export default Input;
