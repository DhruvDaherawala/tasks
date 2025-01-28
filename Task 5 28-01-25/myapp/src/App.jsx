import React, { createContext, useContext, useState } from 'react'
import Form  from './Components/From.jsx'

const App = () => {
  const [data, setData] = useState('');
  return (
    <div>
      <Form/>
    </div>
  );
}
export default App;
