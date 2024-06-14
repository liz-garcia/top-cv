import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  // * Initial server setup - data example
  const [dataMessage, setDataMessage] = useState(null);
  const dataURL = 'http://localhost:3000/api/data';

  const fetchDataMessage = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseMessage = await response.json();
      return responseMessage;
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const currentResponseMessage = await fetchDataMessage(dataURL);
      setDataMessage(currentResponseMessage);
    };

    getData();
  }, [dataURL]);
  // * Initial server setup - data example

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Node</h1>
      <h2>{dataMessage ? dataMessage.message : 'Loading...'}</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
