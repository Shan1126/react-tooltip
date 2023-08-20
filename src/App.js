import React from 'react';
import Tooltip from './Tooltip';

function App() {
  return (
    <div style={{ padding: '50px' }}>
      Hover over 
      <Tooltip 
        content="Customized tooltip!" 
        position="right"
        style={{ backgroundColor: 'gray', color: 'white' }}

        // likewise add all other configurables as props
      >
        this text
      </Tooltip> 
      to see the tooltip.
    </div>
  );
}

export default App;
