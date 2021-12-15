import React from 'react'

import Styles from './Combine.module.css';
import InternalCSS from './InternalCSS';

const App=() =>{
  return (
    <>
    
    <InternalCSS name={Styles.imgDivImg} imgDiv={Styles.imgDiv} btn={Styles.button}
      btnn={Styles.btnn}
    />

    </>
  )
}

export default App
