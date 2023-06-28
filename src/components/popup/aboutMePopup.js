import React, { useState } from 'react';
import Warper from './Warper';
import Popup from 'reactjs-popup';
//

const AboutMePopup = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  return (
    <div >
        <div className='clickForMoreButton'> 
            <button type="button" className="expandTextButton" onClick={() => setOpen(o => !o)}>
                Click For More!!
            </button> 
        </div>
      <Popup open={open} closeOnDocumentClick onClose={closeModal} >
        <div className="modal">
          <a className="close" onClick={closeModal}>
            &times;
          </a>
             In 2021, while working in the ICU with COVID patients wanting 
            more from life and figuring out my passions. That same year I 
            discovered front-end development and fell in love with its challenges. 
            With time my dedication to master all facets of software-engineering has 
            only grown and continues to grow every day. Currently, I am seeking a team that can 
            challenge me to grow as a software engineer. With great eagerness I hope to bring my diverse 
            skill set and unwavering passion for excellence to your organization.
        </div>
      </Popup>
    </div>
  );
};

export default Warper(AboutMePopup);