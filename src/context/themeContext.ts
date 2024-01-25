import {
  Dispatch, SetStateAction, createContext, useContext,
} from 'react';

type themeContextType = {
  theme: boolean;
  setTheme: Dispatch<SetStateAction<boolean>>;
};

const ThemeContext = createContext<themeContextType>({ theme: false, setTheme: () => null });

export default ThemeContext;