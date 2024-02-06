import logo from './logo.svg';
import './App.css';

function Article(props) {

  return (
      <div>
          <h3>{props.color} {props.type} </h3>
      </div>
  )

}
export function App() {
  return <Wardrobe />
}



function Wardrobe () {
  let wardrobe = [
    { type: "shirt", color: "red", size: "Medium" },
    { type: "shirt", color: "blue", size: "Medium" },
    { type: "pants", color: "blue", size: "Medium" },
    { type: "accessory", color: "sapphire", size: "" },
    { type: "accessory", color: "lilac", size: "" }
  ]
  

  return (
    <div>
        { wardrobe.filter(c=> c.color==="blue").map(c=><Article type={c.type} color= {c.color} key={c.color + c.type}/>)}
      </div>
  )
}


