import React, { Component } from 'react'
import { Category } from './Category';

export function Head({categories, filterF, selected}) {
   
    return (
      <div>  
        <Category category="All" filterF={filterF} selected={selected}></Category>  
        {categories.map(c=><Category category={c} filterF={filterF} selected={selected}/>)}
      </div>
    );
  }