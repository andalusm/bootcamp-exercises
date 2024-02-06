import React, { Component } from 'react'
import { Drink } from './Drink';

export function Store({drinks}) {
   
    return (
      <div className='store'>    
        {drinks.map(d=><Drink drink={d}/>)}
      </div>
    );
  }