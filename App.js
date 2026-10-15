import React from "react";
import ReactDOM from "react-dom/client";


const jsxHeading = <h1>namaste dev from jsx react </h1>

console.log(jsxHeading);

const parent = React.createElement(
  "div" , 
  { id:"parent"} , 
  [React.createElement("h1" , { id:"child"} , "i am h1 tag and h2"),
  [React.createElement("h2" , { } , "i am h2")] 

]);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);

