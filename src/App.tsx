import React, { useState, useEffect } from 'react';
import Card from "./components/Card";

export interface info {
  accessibility?: number,
  activity?: string,
  key?: number,
  link?: string,
  participants?: 1,
  price?: number,
  type?: string,
  data?: string[],
}


function App() {

  const [cards, setCards] = useState<info[]>([]);

  useEffect(() => {
    pingAPI()
  }, []);

  const pingAPI = () => {
    fetch('http://www.boredapi.com/api/activity')
      .then(response => response.json())
      .then((data: info) => {
        setCards([...cards, ...[data]])
      })
      .catch((err) => console.error(err)
      )
  }


  return (
    <div className="App">
      <div onClick={() => pingAPI()} className="button" >Add More Plans</div>
      <div className="cards-container">
        {cards.map((item: info, index: number) => {
          return <Card key={index} {...item} ></Card>
        })}
      </div>
    </div>
  );
}

export default App;
