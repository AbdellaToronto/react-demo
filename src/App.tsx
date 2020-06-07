import React from 'react';
import './App.css';
import { MyCard } from "./components/card/card.component";

const clickFunc1 = () => {
  console.log('old school, logging in console');
}


const clickFunc2 = () => {
  alert('Im hip and cool');
}


function App() {
  return (
    <div className="App">
      <MyCard name="Della" content="Some long content string" clickFunc={clickFunc1} />
      <MyCard name="Ella" content="when I click on this card I want an alert to open" clickFunc={clickFunc2} />
      <MyCard name="Olla" content="Some long content string" clickFunc={clickFunc1} />
    </div>
  );
}

export default App;
