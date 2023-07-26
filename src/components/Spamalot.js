import Spam from "./Spam";
import React, { Component } from 'react';

const numCalls = 500
const generateElement = (component, quantity) => {
   return Array.from({length:quantity}, (_, index) =>
       React.cloneElement(component, {key: index}))
}


const Spamalot =()=>{
   return <div>{generateElement(<Spam />, numCalls)}</div>
}

export default Spamalot

