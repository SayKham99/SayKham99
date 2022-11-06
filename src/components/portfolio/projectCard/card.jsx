import './card.scss'
import {ReactComponent as Eye} from "../../../assets/icons/eye-outline.svg";
import Icon from "../../usable/icon/icon";

function Card({data}) {
    const {id, img, name, descr, type, url} = data
    console.log(url)
    return (
        <div key={id} className='pCard'>
            <div className='pCard__image'>
                <a href={url} target="_blank">
                    <Icon icon={<Eye/>}/>
                </a>
                <img src={img} alt="" className='pCard__image-img'/>
            </div>
            <p className='pCard__title'>{name}</p>
            <p className='pCard__descr f15'>{type}</p>
        </div>
    );
}

export default Card;