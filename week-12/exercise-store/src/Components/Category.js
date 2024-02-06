import React, { Component } from 'react'

export function Category({category, filterF, selected}) {
   
    return (
      <button onClick={()=>filterF(category)} { (selected === category) ? disabled: ''}>    
        {category}
      </button>
    );
  }