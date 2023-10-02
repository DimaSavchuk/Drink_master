import { useTheme } from '@mui/material';
import { Backdrop, WrapperForLoader } from './Loading.styled';
import { Dna } from 'react-loader-spinner';

export const Loading = ({ bgc }) => {
  const { theme } = useTheme();
  const currentTheme =
    theme === 'dark' ? bgc : 'var(--loader-background-color-without-opacity)';
  const currentBgc = bgc ? currentTheme : null;
  return (
    <Backdrop bgc={currentBgc}>
      <WrapperForLoader>
        <Dna
          visible={true}
          height="120"
          width="120"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </WrapperForLoader>
    </Backdrop>
  );
};
