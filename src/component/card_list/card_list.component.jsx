import { Component } from "react";
import './card.list.container.css';
import Card from './card_component'

const CardList = ({listcomponent}) => (
    <div className='card-list'>
      {listcomponent.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );

  export default CardList