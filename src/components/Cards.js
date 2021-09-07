import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Aktuális munkáim</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/image0.jpeg'
              text=''
              label=''
              path=''
            />
            <CardItem
              src='images/image1.jpeg'
              text=''
              label=''
              path=''
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/image2.jpeg'
              text=''
              label=''
              path=''
            />
            <CardItem
              src='images/image3.jpeg'
              text=''
              label=''
              path=''
            />
            <CardItem
              src='images/image4.jpeg'
              text=''
              label=''
              path=''
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/image2.jpeg'
              text=''
              label=''
              path=''
            />
            <CardItem
              src='images/image3.jpeg'
              text=''
              label=''
              path=''
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/image2.jpeg'
              text=''
              label=''
              path=''
            />
            <CardItem
              src='images/image3.jpeg'
              text=''
              label=''
              path=''
            />
            <CardItem
              src='images/image4.jpeg'
              text=''
              label=''
              path=''
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
