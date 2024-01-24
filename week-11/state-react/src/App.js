import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

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

const App = () => {
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

export default App;


