import React from 'react'
import { CardComponent } from './stories/Component';

const Card = () => {
  return (
    <div className='card'>
      <CardComponent
        alt={"This is an image of a lion"}
        image={'https://a-z-animals.com/media/tiger_laying_hero_background.jpg'}
      />
      <CardComponent
        alt={"This is an image of a lion"}
        image={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/220px-Lion_waiting_in_Namibia.jpg'}
      />
      <CardComponent
        alt={"This is an image of a lion"}
        image={'https://cdn.britannica.com/78/186778-050-73CF4F25/black-panther-leopards-Africa-Central-jaguars-South.jpg?w=400&h=300&c=crop'}
      />
    </div>
  )
}
export default Card;
