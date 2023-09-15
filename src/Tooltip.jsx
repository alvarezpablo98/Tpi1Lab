import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);

  const handleMouseEnter = () => setShow(true);
  const handleMouseLeave = () => setShow(false);

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {show && <div>{text}</div>}
      {children}
    </div>
  );
};

export default Tooltip;