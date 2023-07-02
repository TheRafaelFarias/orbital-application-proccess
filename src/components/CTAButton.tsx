import { CSSProperties } from 'react';

const CTAButton: React.FC<{
  name: string;
  action?: () => any;
  className?: string;
  disabled?: boolean;
  style?: CSSProperties;
  type?: HTMLButtonElement['type'];
}> = ({ name, disabled, style, type = 'button', className = '', action }) => {
  return (
    <button
      style={style!}
      disabled={disabled}
      type={type}
      onClick={action}
      className={`px-12 md:px-24 rounded-lg md:rounded-xl py-1 bg-white text-highlight text-base md:text-2xl disabled:text-opacity-70 ${className}`}
    >
      {name}
    </button>
  );
};

export default CTAButton;
