import React, { Component } from 'react'

export function Drink({drink}) {
   
    return (
      <div className='drink'>    
        <div><b>Name:</b>  {drink.name}</div>
        <div><b>Price:</b>  {drink.price}</div>
        <div><b>Company:</b>  {drink.company}</div>
        <div><b>Category:</b>  {drink.category}</div>
      </div>
    );
  }