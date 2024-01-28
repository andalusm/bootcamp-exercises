import React, { useState } from 'react'

export const Exercise1 = () => {
    const images = {images: [
        "https://hips.hearstapps.com/hmg-prod/images/lychee-fruit-sugar-1530136136.jpg?crop=1xw:1xh;center,top&resize=640:*",
        "https://hips.hearstapps.com/hmg-prod/images/mango-fruit-sugar-1530136260.jpg?crop=1xw:1xh;center,top&resize=640:*",
        "https://hips.hearstapps.com/hmg-prod/images/cherries-sugar-fruit-1530136329.jpg?crop=1xw:1xh;center,top&resize=640:*",
      ],
          currentImg: 0
        }
    const [currentImg,setCurrentImg] = useState(0)
    const nextImg = ()=>{
        if(currentImg < images.images.length-1)
            setCurrentImg(currentImg+1)
    }
    const prevImg = ()=>{
        if(currentImg > 0)
            setCurrentImg(currentImg-1)
    }


  return (
    <>
    <Fruit images={images.images} currentImg={currentImg}></Fruit>
    <button onClick={nextImg}>Next</button>
    <button onClick={prevImg}>Prev</button>
    </>
  )
}

const Fruit = ({images, currentImg}) => {
  return (
    <>
    <img src={images[currentImg]}
    ></img>
    </>
  )
}

