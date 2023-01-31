import React,{ useState } from 'react';
import './App.css';
import Form from './components/Form';
import Results from './components/Results';

function App() {
  const[state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <div className="App">
      <Form input={state} setInput={setState}/>
      <Results data={state}/>
    </div>
  );
}

export default App;
