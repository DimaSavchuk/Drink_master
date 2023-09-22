
import styled, { css } from 'styled-components';

 

// Define styles based on theme
const themeStyles = {
  dark: {
    background: '#333',
    color: '#fff',
  },
  light: {
    background: '#fff',
    color: '#333',
  },
};

 

// Define styles based on size
const sizeStyles = {
  small: {
    padding: '8px 16px',
    fontSize: '14px',
  },
  medium: {
    padding: '12px 24px',
    fontSize: '16px',
  },
  large: {
    padding: '16px 32px',
    fontSize: '18px',
  },
};

 

// Styled component for the button
const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

 

  ${(props) => themeStyles[props.theme]}

 

  ${(props) => sizeStyles[props.size]}

 

  ${(props) =>
    props.customStyle &&
    css`
      ${props.customStyle}
    `}
`;

 

// Button component
const Button = ({ theme, size, text, customStyle, onClick }) => {
  return (
<StyledButton theme={theme} size={size} customStyle={customStyle} onClick={onClick}>
      {text}
</StyledButton>
  );
};



export default Button;


