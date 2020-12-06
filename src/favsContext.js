import { createContext } from 'react';
import useLocalStorage from 'Hooks/useLocalStorage';

export const FavsContext = createContext([]);

export function FavsProvider({ children }) {
  const [favs, setFavs] = useLocalStorage([], 'favs');

  const isInFavs = code => {
    return favs.includes(code);
  };

  const addFav = code => {
    if (code) {
      setFavs(favs.concat(code));
    }
  };

  const removeFav = code => {
    if (code) {
      setFavs(favs.filter(fav => fav !== code));
    }
  };

  const toggleFav = code => {
    if (favs.includes(code)) {
      removeFav(code);
    } else {
      addFav(code);
    }
  };

  return (
    <FavsContext.Provider
      value={{
        favs,
        isInFavs,
        toggleFav,
      }}
    >
      {children}
    </FavsContext.Provider>
  );
}
