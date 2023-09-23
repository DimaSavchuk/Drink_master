import {
    IngredientsDiv,
    IngredientFoto,
    InfoDiv,
    TitleIngridient,
    Measure,
} from "./IngridientsCards.styled"


const IngredientsCards = ({ data }) => {


    return (
        <IngredientsDiv>
            {data.map(({ title, measure, src }) => (
                <li key={title}>
                    <IngredientFoto>
                        <img
                            src={src ? src : 'http://res.cloudinary.com/dec1shvoo/image/upload/v1689169611/cocktails-v1/ingredient/Strawberries-Small.png'}
                            alt={title}
                            style={{ display: 'block', width: '100%', height: 'auto' }} />
                    </IngredientFoto>
                    <InfoDiv>
                        <TitleIngridient>{title}</TitleIngridient>
                        <Measure>{measure ? measure : " "}</Measure>
                    </InfoDiv>
                </li>
            ))}
        </IngredientsDiv>
    )
}
export default IngredientsCards;
