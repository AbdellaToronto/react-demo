import * as React from 'react';
import './card.component.css';

export type MyCardProps = {
  name: string;
  content: string;
  clickFunc: () => void;
};

export const MyCard: React.FC<MyCardProps> = (props) => {
  return <div className="card">
    <h3>Hey! I am the card title, your name is {props.name}</h3>
    <p>I am the card body</p>
    <p>Custom Content: {props.content}</p>
    <button onClick={props.clickFunc}>Click Me!!</button>
  </div>
}
