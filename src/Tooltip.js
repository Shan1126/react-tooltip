import React, { useState } from 'react';
import './Tooltip.css';

function Tooltip(props) {
  const [visible, setVisible] = useState(false);

  const {
    content,
    position = "top", // Default is top
    children,
    style = {}
  } = props;

  const contentStyle = {
    ...style,
    ...position && { [position]: 'auto' } // Add the class for positioning
  };

  return (
    <div 
      className="tooltip" 
      onMouseEnter={() => setVisible(true)} 
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div className={`tooltip-content ${position}`} style={contentStyle}>
          {content}
        </div>
      )}
    </div>
  );
}

export default Tooltip;
