import asrBlueIced from '../../assets/hero/asr_blue_iced_tea_mobile 1.png';
import asrBlueIced2x from '../../assets/hero/asr_blue_iced_tea_mobile@2x.png';
import { Container, Text } from './InfoComponent.styled';

export const InfoComponent = ({children}) => {
    return (
        <div>
            <picture>
                <img
                    style={{ margin: '0 auto' }}
                    src={asrBlueIced}
                    srcSet={`${asrBlueIced2x} 2x`}
                    alt="coctail"
                    loading="lazy"
                />
            </picture>
            <Container>
                <Text>{children}</Text>
            </Container>
        </div>
    );
}