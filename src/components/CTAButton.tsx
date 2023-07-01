const CTAButton: React.FC<{
  name: string;
  action?: () => any;
  className: string;
}> = ({ name, className }) => {
  return (
    <button
      className={`px-12 md:px-24 rounded-lg md:rounded-xl py-1 bg-white text-highlight text-base md:text-2xl ${className}`}
    >
      {name}
    </button>
  );
};

export default CTAButton;
