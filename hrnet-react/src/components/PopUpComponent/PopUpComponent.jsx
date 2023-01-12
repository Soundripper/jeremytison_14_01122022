import React, { useState } from "react"
import { useEffect } from "react";
import "./PopUpComponent.css";
const PopUpModalComponent = ({ text, useFade = false, openModal, closePopup}) => {

  const [openState, setOpenState] = useState(true);

  useEffect (() => {
    // setOpenState(openModal)
    console.log({openModal});
    // console.log({openState});
  }, [openModal, openState])

  // useEffect (() => {
  //       document.addEventListener('keydown', (e) => {
  //         e.key === 'Escape' && setOpenState(!openModal)
  //       })
  //       // return () => {
  //       //   document.removeEventListener('keydown', (e) => e)
  //       // }
  // }, [openModal])

  // const closePopup = () => {
  //   setOpenState(!openState)
  //   console.log("close");
  // }

  // if (!openState) {
  //   return null;
  // }

// NE SERT à RIEN ???
  if (!openModal){
    return null;
  }
  
  return (
    <div className={useFade ? " popup-container popup-fade" : "popup-container"}>
      <div className="popup-body">
      <h2>{text}</h2>
      <button onClick={closePopup} className="popClosebutton">XX</button>
      </div>
    </div>
  );
};

export default PopUpModalComponent