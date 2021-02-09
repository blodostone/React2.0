import React, { useState } from 'react';
import Clock from './Clock';

const App = () => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <button onClick={() => setVisible(!visible)}>Toggle</button>
      {visible && (
        <>
          <Clock location="New York" offset={-5} />
          <Clock location="Kyiv" offset={2} />
          <Clock location="London" offset={0} />
        </>
      )}
    </>
  );
};

export default App;