import React, {useEffect, useState} from "react"
import Card from "./Card.js"
import TempCard from "./TempCard.js"

const CardList = props => {
    const [cards, setCards] = useState(props.cards)
    const [tempCards, setTempCards] = useState(props.temps)

    useEffect(
        () => {
            setCards(props.cards); 
            setTempCards(props.temps); 
        }, [props.cards, props.temps]
    )

    return(
        <div>
            <div>
                {cards.map((card, i) => (
                    <Card key = {i} {...card} deleteFunction={props.onClickFunction} deleteIndex={i} />
                ))}
            </div>
            <div>
                {tempCards.map((card, i) => (
                    <TempCard key = {i} {...card} />
                ))}
            </div>
        </div>
    )
}

export default CardList