import React, { useState } from 'react';

const withToggle = Component => {
  const Toggle = ({ children, ...props }) => {
    const [on, setOn] = useState(false);

    const toggle = () => setOn(!on);

    return (
      <Component on={on} toggle={toggle} {...props}>
        {children}
      </Component>
    );
  };

  return Toggle;
};

const Toggle = ({ on, toggle, children }) => (
  <div onClick={toggle}>{on ? 'Apretame' : 'Apretame de vuelta'} {children}</div>
);

export default withToggle(Toggle);