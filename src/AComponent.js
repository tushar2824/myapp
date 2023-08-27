import React from 'react'
import DataContext from './DataContext';
import BComponent from './BComponent';

const AComponent = () => {
    const Vishatnama = "mera grand children ko 400cr mai bhet swroop deta hoon";

  return (
    <DataContext.Provider value={Vishatnama}>
       <div> AComponent 
       <BComponent />
       </div>
       </DataContext.Provider>
  );
};

export default AComponent
