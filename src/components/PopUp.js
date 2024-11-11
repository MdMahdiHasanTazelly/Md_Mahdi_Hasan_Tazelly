import React, {useState} from 'react';
import './PopUp.css';

function PopUp({message, setIsPopUpVisible}) {

    

    return ( 
        <div className="popup-overlay" >
            <div className="popup-content">
              <span className="popup-message">{message}</span>
              <button className="popup-close-button" onClick={ setIsPopUpVisible( false)}>
                Close
              </button>
            </div>
       </div>
     );
}

export default PopUp;