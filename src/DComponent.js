import React, { useContext } from 'react'
import DataContext from './DataContext'

const DComponent = () => {
    const shareddata = useContext(DataContext);
  return (
    <div>
      DComponent
      <p>Property recieved from Grand Parent:
      {shareddata}</p>
    </div>
  )
}

export default DComponent
