import DrinkCard from "../components/DrinkCard/DrinkCard";
import { handleDeleteFavorite, handleDeleteOwn } from "./handleDelete";


export const displayedFavoriteCards = (cards, pagesVisited, limit, setCards) =>
  cards.slice(pagesVisited, pagesVisited + limit).map((card) => (
    <li key={card._id}>
      <DrinkCard
        cardData={card}
        onDelete={(_id) => handleDeleteFavorite(_id, cards, setCards)}
      />
    </li>
  ));

export const displayedOwnCards = (cards, pagesVisited, limit, setCards) =>
  cards.slice(pagesVisited, pagesVisited + limit).map((card) => (
    <li key={card._id}>
      <DrinkCard
        cardData={card}
        onDelete={(_id) => handleDeleteOwn(_id, cards, setCards)}
      />
    </li>
  ));