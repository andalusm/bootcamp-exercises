import React, {useEffect, useState} from 'react'





export default function Exercise1() {
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(()=>{
        setTimeout(()=>{setCurrentTime(new Date())}, 1000)
    },[currentTime])
  return (
    <div>{currentTime.getHours()>9?currentTime.getHours() : "0"+currentTime.getHours() }:{ currentTime.getMinutes()>9?currentTime.getMinutes() : "0"+currentTime.getMinutes()}:{ currentTime.getSeconds()>9?currentTime.getSeconds() : "0"+currentTime.getSeconds()}</div>
  )
}
