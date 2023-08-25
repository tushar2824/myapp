import React from 'react';
import './App.css';
import NavBar from "./NavBar";
import HomeCarousel from './HomeCarousel';
import Imgcard from './Imgcard';
import data from './data';

const ncard=(val) =>{
  return(
    <Imgcard 
      title={val.title}
      imgurl={val.imgurl}
      desc={val.desc}
    />
  )
}
function App() {
  return  (
    <div>
       <NavBar />
       <HomeCarousel />
       <div className='projectcard'>
       {
        data.map((val,index) =>(
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
