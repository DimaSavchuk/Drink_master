import { Backdrop, WrapperForLoader } from './Loading.styled';
import { Dna } from 'react-loader-spinner';

export const Loading = ({ refreshing }) => {
  return (
    <Backdrop refreshing={refreshing}>
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
