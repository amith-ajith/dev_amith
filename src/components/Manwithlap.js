
import blogging from './Blogging.json'
import React from 'react';
import lottie from 'lottie-web';
import './Manwithlap.css'

function Manwithlap() {

  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#man-with-lap"),
      animationData: blogging,
    });
  }, []);

  return (

    <div className="man_container">
    <div id="man-with-lap"></div>

    </div>
  
  );
}
export default Manwithlap;