import { useState } from "react";
import javaLogo from "../assets/java-logo.png";
import gradleLogo from "../assets/gradle-logo.png";
import nodeJsLogo from "../assets/node-js.svg";
import mongoDBLogo from "../assets/mongo-db.svg";
import herokuLogo from "../assets/heroku-logo.png";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="mt-8 pb-4 pt-5 text-5xl font-bold">Top CV</h1>
      <div className="m-4 mx-auto flex h-32 w-fit space-x-8 rounded-2xl bg-zinc-900 p-8">
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo h-full" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react h-full" alt="React logo" />
        </a>
        <a
          href="https://java.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-4"
        >
          <img
            src={javaLogo}
            className="logo java h-full scale-[1.5]"
            alt="Java logo"
          />
        </a>
        <a href="https://gradle.org/" target="_blank" rel="noopener noreferrer">
          <img
            src={gradleLogo}
            className="logo gradle h-full scale-[1.25]"
            alt="Gradle logo"
          />
        </a>
        <a
          href="https://nodejs.org/en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={nodeJsLogo}
            className="logo nodeJs h-full"
            alt="NodeJS logo"
          />
        </a>
        <a
          href="https://www.mongodb.com/products/platform/atlas-database"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={mongoDBLogo}
            className="logo mongoDB h-full"
            alt="MongoDB logo"
          />
        </a>
        <a href="https://heroku.com/" target="_blank" rel="noopener noreferrer">
          <img
            src={herokuLogo}
            className="logo heroku h-full"
            alt="Heroku logo"
          />
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
          Edit <code>src/App.jsx</code> and save to test HMR.
        </p>
      </div>
      <p className="read-the-docs">Click on the logos to learn more.</p>
    </>
  );
}

export default Home;
