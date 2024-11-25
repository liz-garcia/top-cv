import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="mt-8 pb-10 pt-5 text-5xl font-bold">
        Vite + React + Node
      </h1>
      <div className="m-8 mx-auto flex h-32 w-fit space-x-8">
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo h-full" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react h-full" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button
          className="m-8 rounded-lg bg-indigo-500 px-4 py-3 hover:bg-indigo-800"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="pt-5">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default Home;
