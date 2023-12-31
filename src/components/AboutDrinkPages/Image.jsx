import foto from "../../img/coctails-mob.jpg";
import fotoX from "../../img/coctails-mob@2x.jpg";
import fotoTablet from "../../img/coctails-tablet.jpg";
import fotoTabletX from "../../img/coctails-tablet@2x.jpg";
import fotoPc from "../../img/coctails-pc.jpg";
import fotoPcX from "../../img/coctails-pc@2x.jpg";


const Image = () => {
    return (
        <picture>
            <source
                media="(min-width: 1440px)"
                srcSet={`${fotoPc} 1x, ${fotoPcX}`}
                type="image/jpeg"
            />

            <source
                media="(min-width: 768px)"
                srcSet={`${fotoTablet} 1x, ${fotoTabletX} 2x`}
                type="image/jpeg"
            />

            <img
                srcSet={fotoX}
                src={foto}
                alt="picture"
                loading="lazy"
            />
        </picture>

    )
}

export default Image;