import { fetchFavoriteDrinks } from "../services/axiosConfig";
import { fetchOwnDrinks } from "../services/axiosConfig";


 export const fetchFavorite = async (setIsloading, setCards,) => {
   try {
     setIsloading(true);
     const drinks = await fetchFavoriteDrinks();
     setCards(drinks);
     setIsloading(false);
   } catch (error) {
     console.log(error.message);
   }
};
 
export const fetchOwn = async (setIsloading, setCards) => {
  try {
    setIsloading(true);
    const drinks = await fetchOwnDrinks();
    setCards(drinks);
    setIsloading(false);
  } catch (error) {
    console.log(error.message);
  }
};

