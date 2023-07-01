const CTAButton: React.FC<{
  name: string;
  action?: () => any;
  className?: string;
  disabled?: boolean;
  type?: HTMLButtonElement['type'];
}> = ({ name, disabled, type = 'button', className = '' }) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`px-12 md:px-24 rounded-lg md:rounded-xl py-1 bg-white text-highlight text-base md:text-2xl disabled:text-opacity-70 ${className}`}
    >
      {name}
    </button>
  );
};

export default CTAButton;
