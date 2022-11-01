import './card.scss'
import {ReactComponent as Eye} from "../../../assets/icons/eye-outline.svg";
import Icon from "../../usable/icon/icon";

function Card({data}) {
    const {id, img, name, descr, urls} = data
    console.log(img)
    return (
        <div className='pCard'>
            <div className='pCard__image'>
                <Icon icon={<Eye/>}/>
                <img src={img} alt="" className='pCard__image-img'/>
            </div>
            <p className='pCard__title'>{name}</p>
            <p className='pCard__descr f15'>{descr}</p>
        </div>
    );
}

export default Card;