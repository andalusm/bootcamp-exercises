import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Hudini, Landing, Home } from './Components';

function Calendar(props) {
  return (
    <div id="calendar">
      {props.reservations.map(c=> <div>{c.name} has a reservation on {c.day} @ {c.time}</div>)}
    </div>
  )
}

function Register(props) {
  return (<div id="register">
    {props.reservations.map(c=> <div>{c.day} @ {c.time}</div>)}
  </div>)
}

function Restaurant(){
  const [reservations, setReservations] = useState([
    { day: "Monday", time: 2000, name: "Earl" },
    { day: "Monday", time: 1845, name: "Ella" },
    { day: "Tuesday", time: 1930, name: "Linda" },
    { day: "Wednesday", time: 2015, name: "Anni" }
]);

return (
    <div>
        <Calendar reservations={reservations} />
        <Register reservations={reservations} />
    </div>
)
}
function Hot(){
  return (<div>I'm feeling too hot! </div>)
}
function Cold(){
  return (<div>It's too cold in here! </div>)
}

function HeatManager(){
  const [Heat, setHeat] = useState("Hot")

  return(
    <>
    {Heat==="Hot"? <Hot/>:<Cold/>}
    <button onClick={()=>setHeat(Heat==="Hot"? "Cold": "Hot")}>Change the heat</button>
    <Counter/>
    <Like/>
    </>
  )
}


function Counter() {
  const [count,setCount] = useState(0)
  
  const updateCounter = () => {
    setCount(count + 1)
      console.log(count)
    }

    return (
      <div>
      <button onClick={updateCounter}>+</button> 
      <div>{count}</div> 
    </div>
  );
}

function Like(){
  const [likes,setLikes] = useState(0)
  
  return(<div>
    <div>{likes}</div>
    <button onClick={()=>setLikes(likes+1)}>Like! 👍</button>
  </div>)
}

const App = () => {
  const [store,setStore] = useState({
    user: "Robyn",
    store: [
      { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
      { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
      { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
    ],
    shouldDiscount: false,
    currentPage: "Landing"
  })
  const [page,setPage] = useState(store.currentPage)
  const changePage = ()=> {
    const p = page==="Landing" ?"Home":"Landing"
    setPage(p)
  }

  return(<><Hudini show={false} ></Hudini>
  
  {page==="Landing" ?<Landing store={store}/> :  <Home store={store}/>}
  <button onClick={changePage}>Change page</button>
  </>)


  
   
}

export default App;


