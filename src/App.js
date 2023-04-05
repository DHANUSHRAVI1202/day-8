import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState("Hello dear one, learning React...?");

  useEffect(() => {
    console.log('useEffect hook called');
    const timer = setTimeout(() => {
      setMessage("Great... This is time to learn about HOOKS");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
