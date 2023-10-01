import { Wrapper } from './LittleLoading.styled';
import { Dna } from 'react-loader-spinner';

export const LittleLoading = () => {
  return (
    // <Backdrop>
    <Wrapper>
      <Dna
        visible={true}
        height="120"
        width="120"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </Wrapper>
    // </Backdrop>
  );
};
