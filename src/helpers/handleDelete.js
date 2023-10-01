import { deleteDrinkFromFavorite, deleteDrinkFromOwn } from "../services/axiosConfig";

export const handleDeleteFavorite = (_id, cards, setCards) => {
  const updatedCards = cards.filter((card) => card._id !== _id);
  setCards(updatedCards);
  
  deleteDrinkFromFavorite(_id);
};

export const handleDeleteOwn = (_id, cards, setCards) => {
  const updatedCards = cards.filter((card) => card._id !== _id);
  setCards(updatedCards);

  deleteDrinkFromOwn(_id);
};
