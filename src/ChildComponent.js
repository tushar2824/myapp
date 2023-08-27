import React from 'react'

const ChildComponent = ({ onDatafromChild }) => {
    const SendDataToParent = () =>{
        const data = "Logged In";
        onDatafromChild(data);
    };
  return (
    <div>
    <div> ChildComponent </div>
    <button onClick={SendDataToParent}>Send</button>
    </div>
  );
};

export default ChildComponent
