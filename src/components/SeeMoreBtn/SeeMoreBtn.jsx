import { Button } from "./SeeMoreBtn.styled";

export const SeeMoreBtn = ({ handleClick, children }) => <Button type="button" onClick={handleClick}>{children}</Button>;