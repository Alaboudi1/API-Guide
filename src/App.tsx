import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Editor from "./editor/editor"
import { code, config } from './editor/sourceCode'
import { Tabset, Tab } from 'react-rainbow-components';
import ApiGuide from './guide/api-guide';



const App: React.FC = () => {
  const [selected, changeSelected] = useState('Todo');
  const [TextCode, changeTextCode] = useState(code);
  useEffect(() => {
    if (selected == "config") {
      changeTextCode(config)
    }
    else {
      changeTextCode(code);
    }
  }, [selected])

  const handleOnSelect = (event: React.MouseEvent<HTMLElement, MouseEvent>, selected: string) => {
    changeSelected(selected)
  }
  return (
    <>
      <div className="App">
        <div className="editor">
      <div className="rainbow-flex rainbow-flex_column rainbow_vertical-stretch" style={{ maxWidth: "30%", }} >
        <Tabset
          fullWidth
          id="tabset-2"
          onSelect={handleOnSelect}
          activeTabName={selected}
        >
          <Tab
            name="config"
            label={
              <span>
                {/* <FontAwesomeIcon icon={faFolderOpen} />  */}
                <b> config.js </b>
              </span>
            }
          />

          <Tab
            style={{ overflow: "hidden" }}
            name="Todo"
            label={
              <span>
                {/*<FontAwesomeIcon icon={faClock} />  */}
                <b>   Todo.js   </b>
              </span>
            }
          />
        </Tabset>
      </div>
          <Editor language="javascript" height="90vh" code={TextCode} />
        </div>
        <ApiGuide />
      </div>
    </>
  );
}

export default App;
