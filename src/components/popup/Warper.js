import React from 'react';
import 'reactjs-popup/dist/index.css';
import './popup.css';

export default Comp => () => (
  <div className="example-warper">
    <Comp />
  </div>
);