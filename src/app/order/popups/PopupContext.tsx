import { Pizza } from '@/data/pizzas';
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from 'react';
import ChoosePizzaPopup from './choosePizza';
import ReviewOderInformation from './reviewOrderInformation';
import SuccessPopup from './success';

export interface PopupContextProps {
  selectedPizza: undefined | Pizza;
  setPizzaSelected: Dispatch<SetStateAction<Pizza | undefined>>;
  userData:
    | {
        name: string;
        email: string;
        address: string;
        phoneNumber: string;
      }
    | undefined;
  setUserData: Dispatch<
    SetStateAction<PopupContextProps['userData'] | undefined>
  >;
  popupShown: undefined | 'choosePizza' | 'reviewOrderInformation' | 'success';
  setPopupShown: Dispatch<SetStateAction<PopupContextProps['popupShown']>>;
  close: () => void;
}

export const PopupContext = createContext<PopupContextProps>(
  {} as PopupContextProps
);

const Popups = {
  choosePizza: ChoosePizzaPopup,
  reviewOrderInformation: ReviewOderInformation,
  success: SuccessPopup,
};

export const PopupContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [selectedPizza, setPizzaSelected] = useState<undefined | Pizza>(
    undefined
  );
  const [popupShown, setPopupShown] =
    useState<PopupContextProps['popupShown']>();
  const [userData, setUserData] = useState<PopupContextProps['userData']>();

  const PopupShownElement = Popups[popupShown!];

  const close = () => {
    setPopupShown(undefined);
  };

  return (
    <PopupContext.Provider
      value={{
        selectedPizza,
        setPizzaSelected,
        setUserData,
        userData,
        popupShown,
        setPopupShown,
        close,
      }}
    >
      {popupShown && <PopupShownElement />}
      {children}
    </PopupContext.Provider>
  );
};
