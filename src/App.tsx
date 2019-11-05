import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Editor from "./editor/editor"
import { code, config } from './editor/sourceCode'
import { Tabset, Tab } from 'react-rainbow-components';


const tabsContainerStyles = {
  backgroundColor: 'white',
  borderRadius: '0.875rem',
};
const App: React.FC = () => {
  const [selected, changeSelected] = useState('Todo');
  const [TextCode, changeTextCode] = useState(code);
  useEffect(() => {
    if(selected =="config"){
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
    <div className="App"> <div style={tabsContainerStyles} className="rainbow-p-bottom_xx-large">
      <div className="rainbow-p-around_large rainbow-align-content_space-between rainbow-background-color_gray-1">
        <h3 className="rainbow-font-size-heading_medium rainbow-color_dark-1">
          This is the header
        </h3>
      </div>
      <div className="rainbow-flex rainbow-flex_column rainbow_vertical-stretch">
        <Tabset
          fullWidth
          id="tabset-2"
          onSelect={handleOnSelect}
          activeTabName={selected}
          className="rainbow-background-color_gray-1 rainbow-p-horizontal_x-large"
        >
          <Tab
            name="config"
            label={
              <span>
                {/* <FontAwesomeIcon icon={faFolderOpen} />  */}
                config.js
                    </span>
            }
          />

          <Tab
            name="Todo"
            label={
              <span>
                {/*<FontAwesomeIcon icon={faClock} />  */}
                Todo.js
                    </span>
            }
          />
        </Tabset>
      </div>
    </div>
      <Editor language="javascript" height="90vh" code={TextCode} />
    </div>
  );
}

export default App;
