import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useState, useEffect } from "react";

const FavouritesContext = createContext();

const FavouritesContextProvider = ({ children }) => {
  const [favouriteModules, setFavouriteModules] = useState([]);
  const [favouritePastQuestions, setFavouritePastQuestions] = useState([]);
  const [isLoaded, setisLoaded] = useState(false);

  const add = (item, type) => {
    if (type === "module") setFavouriteModules((prev) => [...prev, item]);
    if (type === "past-question")
      setFavouritePastQuestions((prev) => [...prev, item]);
  };

  const remove = (item, type) => {
    if (type === "module")
      setFavouriteModules((prev) => prev.filter((x) => x.id !== item.id));
    if (type === "past-question")
      setFavouritePastQuestions((prev) => prev.filter((x) => x.id !== item.id));
  };

  const saveFavouriteModules = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favouritesModules`, jsonValue);
    } catch (error) {
      console.log("error saving favourites from local storage", { error });
    }
  };

  const saveFavouritePastQuestions = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favouritesPastQuestions`, jsonValue);
    } catch (error) {
      console.log("error saving favourites from local storage", { error });
    }
  };

  const loadFavourites = async () => {
    try {
      const modules = await AsyncStorage.getItem(`@favouritesModules`);

      const pastQuestions = await AsyncStorage.getItem(
        `@favouritesPastQuestions`
      );

      if (modules !== null) {
        setFavouriteModules(JSON.parse(modules));
      }
      if (pastQuestions !== null) {
        setFavouritePastQuestions(JSON.parse(pastQuestions));
      }

      setisLoaded(true);
    } catch (error) {
      console.log("error loading favourites from local storage", { error });
    }
  };

  useEffect(() => {
    loadFavourites();
  }, []);

  useEffect(() => {
    isLoaded && saveFavouriteModules(favouriteModules);
  }, [isLoaded, favouriteModules]);

  useEffect(() => {
    isLoaded && saveFavouritePastQuestions(favouritePastQuestions);
  }, [isLoaded, favouritePastQuestions]);

  return (
    <FavouritesContext.Provider
      value={{
        favouriteModules,
        favouritePastQuestions,
        addFavourites: add,
        removeFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavouritesContext = () => useContext(FavouritesContext);

export default FavouritesContextProvider;
