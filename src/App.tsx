import React from 'react';
import logo from './logo.svg';
import './App.css';
import Editor, { monaco } from "@monaco-editor/react";
monaco
  .init()
  .then(monaco => {
    /* here is the instance of monaco, so you can use the `monaco.languages` or whatever you want */
    console.log("Log ::: Monaco ::: ", monaco);
  })
  .catch(error =>
    console.error("An error occurred during initialization of Monaco: ", error)
  );
const App: React.FC = () => {
  return (
    <div className="App">
      <Editor height="90vh" language="javascript" />;
    </div>
  );
}

export default App;
