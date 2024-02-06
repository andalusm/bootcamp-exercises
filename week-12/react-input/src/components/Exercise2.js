import { useState } from 'react';

const Exercise2 = () => {
    const [name, setName] = useState("");
    const [fruit, setFruit] = useState("");
    

    return (
        <div>
            <input id="name-input" onChange={(e) => {setName(e.target.value); console.log(`${e.target.value} selected ${fruit}`)}} value={name} />
            <select id="select-input" onChange={(e) => {setFruit(e.target.value); console.log(`${name} selected ${e.target.value}`)}} value={fruit}>
                <option value="Lemon">Lemon</option>
                <option value="Apple">Apple</option>
                <option value="Orange">Orange</option>
                <option value="Banana">Banana</option>
            </select>
        </div>
    );
}
export default Exercise2;

