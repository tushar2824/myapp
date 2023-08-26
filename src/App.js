import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from "./NavBar";
import HomeCarousel from './HomeCarousel';
import Imgcard from './Imgcard';
// import data from './data';

const ncard=(val) =>{
  return(
    <Imgcard 
      title={val.title}
      imgurl={val.images[0]}
      desc={val.desc}
    />
  )
}
function App() {

  const [Data,SetData]=useState([]);
  
  useEffect(()=>{
    const fetchdata = async()=>{
      try {
         const response  = await fetch ("https://dummyjson.com/products");
         const Data = await response.json();
         console.log(Data.products)
         SetData(Data.products);

        //  const dataArray = Object.keys(fetchdata).
        //  map((id) =>({
        //   id,
        //   ...fetchdata[id],
        //  }));
      }
      catch(error){
      console.log("Error occured", error);
      }
    };
    fetchdata();
  },[]);

  return  (
    <div>
       <NavBar />
       <HomeCarousel />
       <div className='projectcard'>
       {
        Data.map((val,index) =>(
          <div key={val.id}className='col-md-3'>
            {ncard(val)}
          </div>
        ))
       }
       </div>
    </div>
  );
}

export default App;
