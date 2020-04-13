import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "@apollo/react-hooks";
import { GET_GREETING } from "./App.query";

function App() {
  const { loading, error, data } = useQuery(GET_GREETING);
  console.log(data);
  console.log(error);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
