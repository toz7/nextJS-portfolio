import CardItems from './CardItems'
import data from './cardData.js'
import cardsStyle from './cards.css'


export default function CardPage() {

    
    const cards = data.map((item, index) => (
            <CardItems  
            key={index}
            title={item.title} 
            description={item.description} 
            image={item.image}
            />
    ))
    return (
        <div className='cards'>
            {cards}
        </div>
    )
}


