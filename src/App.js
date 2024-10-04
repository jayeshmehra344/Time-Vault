import React, { useState } from 'react';
import './App.css';
import TimeCapsuleForm from './components/TimeCapsuleForm';
import TimeCapsuleList from './components/TimeCapsuleList';

function App() {
  const [capsules, setCapsules] = useState([]);

  const addCapsule = (capsule) => {
    setCapsules([...capsules, capsule]);
  };

  return (
    <div className="App">
      <header>
        <h1>TimeVault</h1>
        <p>Secure your memories for future you</p>
      </header>
      
      <TimeCapsuleForm onCreateCapsule={addCapsule} />
      <h2>Future Capsules</h2>
      <TimeCapsuleList capsules={capsules} />
    </div>
  );
}

export default App;
