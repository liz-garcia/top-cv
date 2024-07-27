import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// * Load environment variables from .env file
// import dotenv from "dotenv";
// dotenv.config();

function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState(null);

  // * Import server port
  const serverURL = import.meta.env.VITE_BASE_SERVER_URL;
  const userURL = `${serverURL}/api/user`;

  // * Initial server setup - data example
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    const getUsersData = async (url) => {
      const usersData = await fetchData(url);
      setUsers(usersData.result);
    };

    // * Use userURL as argument
    getUsersData(userURL);
  }, [userURL]);
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
      <h2>Current users:</h2>
      <div>
        {users ? (
          users.map((user) => <div key={user._id}>{user.name}</div>)
        ) : (
          <p>Loading...</p>
        )}
      </div>
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
