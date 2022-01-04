import logo from './logo.svg';
import './App.css';
import React, {useState} from "react"
import ReactDOM from "react-dom"
import "./index.css"
import Form from "./Form.js"
import CardList from "./CardList.js"




function App() {
  const [cards, setCards] = useState([])
  const [tempCards, setTempCards] = useState([])

  const addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo))
  }

  function deleteCard(index) {
    const newCards = cards.filter(card => card != cards[index])
    setCards(newCards)
  }

  const checkName = change => {
      setTempCards([change])
  }

  const resetTempCards = () => {
    setTempCards([])
  }

  return (
    <div className="App">
      <Form onSubmit={addNewCard} checkName={checkName} resetTemps={resetTempCards} />
      <CardList cards={cards} temps={tempCards} onClickFunction={deleteCard}/>
    </div>
  );
}

export default App;
