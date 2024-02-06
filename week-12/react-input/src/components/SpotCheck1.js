import React, { useState } from 'react'

function SpotCheck1() {
    const [text, setText] = useState("")
    const [check, setCheck] = useState(true)

    const updateText = (event) => {
        setText(event.target)
    }
    const updateCheck = (event) => {
        setCheck(event.target.checked)
    }
    console.log(check)

    return (
        <div>
            <input type="text" value={text} onChange={updateText} />
            <input input type="checkbox" value={check} onChange={updateCheck}/>
        </div>
    )
}

export default SpotCheck1