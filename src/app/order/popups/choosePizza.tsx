import { ModalWrapper } from '@/components/PortalPrepare';
import { Pizza, pizzas } from '@/data/pizzas';
import { UniversalPortal } from '@jesstelford/react-portal-universal';
import Image from 'next/image';
import React, { useContext } from 'react';
import { PopupContext } from './PopupContext';

const PizzaOption: React.FC<{
  pizza: Pizza;
  isSelected: boolean;
  setPizzaSelected: React.Dispatch<React.SetStateAction<Pizza | undefined>>;
}> = ({ pizza, setPizzaSelected, isSelected }) => {
  const { close } = useContext(PopupContext);

  return (
    <button
      onClick={() => {
        setPizzaSelected(pizza);
        close();
      }}
      className={`
        bg-transparent border-none ease-linear transition-all h-28 gap-x-6 flex items-center 
        
        ${
          isSelected
            ? 'text-highlight'
            : 'opacity-50 hover:opacity-100 text-text hover:text-highlight'
        }
    `}
    >
      <div className="h-full w-28 relative">
        <Image src={pizza.imagePath} fill alt="name" />
      </div>
      <p className="text-2xl">{pizza.name}</p>
    </button>
  );
};

const ChoosePizzaPopup: React.FC = () => {
  const { selectedPizza, setPizzaSelected } = useContext(PopupContext);

  return (
    <UniversalPortal selector="#portal-wrapper">
      <ModalWrapper>
        <div
          className="bg-white max-w-7xl w-11/12 sm:w-3/4 rounded-2xl py-8 px-4 sm:px-8 flex flex-col gap-y-5 items-center"
          onClick={(event) => event.stopPropagation()}
        >
          <h1 className="text-text text-4xl text-center">Choose your pizza</h1>
          <div className="flex flex-wrap gap-x-28 gap-y-5 justify-center">
            {pizzas.map((pizza) => (
              <PizzaOption
                key={pizza.key}
                pizza={pizza}
                isSelected={selectedPizza === pizza}
                setPizzaSelected={setPizzaSelected}
              />
            ))}
          </div>
        </div>
      </ModalWrapper>
    </UniversalPortal>
  );
};

export default ChoosePizzaPopup;
