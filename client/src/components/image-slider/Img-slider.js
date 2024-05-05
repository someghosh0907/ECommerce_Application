import React, { useState } from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const ImageSlider = ({slides}) => {
    const[currIndex,setCurrIndex]=useState(0)

    const sliderStyles={
        height:"100%",
        position:"relative"
    };
    const slideStyle={
        width:"100%",
        height:"100%",
        borderRadius:"10px",
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundImage:`url(${slides[currIndex].url})`
    }

    const leftArrowStyles={
        position:"absolute",
        top:"50%",
        transform:"translate(0,-50%)",
        left:"32px",
        fontSize:"45px",
        color:"#fff",
        zIndex:1,
        cursor:"pointer"
    }

    const rightArrowStyles={
        position:"absolute",
        top:"50%",
        transform:"translate(0,-50%)",
        right:"32px",
        fontSize:"45px",
        color:"#fff",
        zIndex:1,
        cursor:"pointer"
    }

    const goToPrev= ()=>{
        const isFirstSlide=currIndex===0
        const newIndex= isFirstSlide ? slides.length-1 : currIndex-1
        setCurrIndex(newIndex)
    }

    const goToNext=()=>{
        const isLastSlide= currIndex===slides.length-1
        const newIndex=isLastSlide ?0 :currIndex+1
        setCurrIndex(newIndex)
    }
    setTimeout(goToNext,4000)


  return (
    <div style={sliderStyles}>
        <div style={leftArrowStyles} onClick={goToPrev}><MdKeyboardArrowLeft/></div>
        <div style={rightArrowStyles} onClick={goToNext}><MdOutlineKeyboardArrowRight/></div>
        <div style={slideStyle}></div>
    </div>
  )
}

export default ImageSlider
