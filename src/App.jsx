import React from 'react';
import Toggle from './Toggle';
import Tooltip from './Tooltip';

const App = () => (
  <div>
    <Toggle>
      <Tooltip text="Este es el tooltip">
        <button>Apretame Togle</button>
      </Tooltip>
    </Toggle>
  </div>
);

export default App;