import Image from 'next/image'
import cardsStyle from './cards.css'


export default function CardItems(props) {
    
    return (
        <div className='cards-container'>
            {props.image && <Image src={props.image} width={100} height={100}/>}
            <div className="cards-text">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            </div>
        </div>
    )
}