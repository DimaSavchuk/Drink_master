import { StyledNavLink } from "./CommonLink.styled"

export const CommonLink = ({ children, navigateTo }) => <StyledNavLink to={navigateTo}>{children}</StyledNavLink>;