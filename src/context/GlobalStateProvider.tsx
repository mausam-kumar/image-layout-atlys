import {
  createContext, ReactNode, useContext, useState,
} from "react";
import { IGlobalState } from "../type";

type TGlobalStateContext = {
  globalState: IGlobalState;
  showPopover: (image: IGlobalState["selectedImage"]) => void
  hidePopover: () => void
}

const GlobalStateContext = createContext<TGlobalStateContext>(null!);

export const GlobalStateProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [globalState, setGlobalState] = useState<IGlobalState>({ selectedImage: { children: null, key: null } });

  const showPopover = (image: IGlobalState["selectedImage"]) => {
    setGlobalState({
      selectedImage: {
        children: image.children,
        key: image.key
      }
    })
  };

  const hidePopover = () => {
    setGlobalState({
      selectedImage: {
        children: null,
        key: null
      }
    })
  };
  
  return (
    <GlobalStateContext.Provider
      value={{
        globalState,
        showPopover,
        hidePopover
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalStateContext = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error(
      "useGlobalStateContext must be used within a GlobalStateProvider",
    );
  }
  return context;
};