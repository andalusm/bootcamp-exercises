import React, { useState } from 'react'

const Exercise2 = () => {
    const conversations = {
        conversations: [
            {
                with: "Laura", convo: [
                    { text: "Hi", sender: "self" },
                    { text: "You there?", sender: "self" },
                    { text: "Yeah, hi, what's up?", sender: "other" }
                ]
            },
            {
                with: "Dad", convo: [
                    { text: "Have you finished your school work yet?", sender: "other" },
                    { text: "Yes.", sender: "self" },
                    { text: "What do you mean, yes?", sender: "other" },
                    { text: "??", sender: "self" }
                ]
            },
            {
                with: "Shoobert", convo: [
                    { text: "Shoobert!!!", sender: "self" },
                    { text: "Dude!!!!!!!!", sender: "other" },
                    { text: "Shooooooooo BERT!", sender: "self" },
                    { text: "You're my best friend", sender: "other" },
                    { text: "No, *you're* my best friend", sender: "self" },
                ]
            }
        ]
    }
    const people = conversations.conversations.map(c=>c.with)
    const [displayConversation, setDisplayConversation ] = useState(null)

    const updateDisplayConvo = (person)=>{
        setDisplayConversation(person)
    }
    
  return (
    <>
    {displayConversation === null?<List people = {people} updatePage={updateDisplayConvo}/>:<Conversation back={updateDisplayConvo} convo={conversations.conversations.find(con=>con.with === displayConversation)}/> }
    </>
    
  )
}



const List = ({people, updatePage}) => {
  return (
    <div>
        <ul>
        {people.map(p=><Contact person={p} updatePage={updatePage}/>)}
        </ul>
    </div>
  )
}
const Contact = ({person, updatePage})=>{
    return(
        <li onClick={()=>updatePage(person)}>{person}</li>
    )

}
const Conversation = ({convo, back}) => {
    return (
        <>
        <div>
            {convo.convo.map(c=><div><span>{c.sender==="self"? "Me": convo.with}: </span>{c.text}</div>)}
        </div>
        <button onClick={()=>back(null)}>Back</button>
        </>
    )
  }





export default Exercise2