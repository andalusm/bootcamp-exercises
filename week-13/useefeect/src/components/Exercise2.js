import React, { useEffect, useState } from 'react'




function Post({title, body}) {
  return (
    <div className='post' >
    <h3>{title}</h3>
    <div>{body}</div>
    </div>
  )
}


export default function Exercise2() {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
   .then(response =>response.json())
   .then((data) => {
      console.log(data);
      setPosts(data);
   })}
    ,[])
  return (<>
    <h1>Top Posts:</h1>
    <div className='posts'>{posts.slice(0,10).map(p=><Post title={p.title} body={p.body} ></Post>)}</div>
    </>
  )
}
