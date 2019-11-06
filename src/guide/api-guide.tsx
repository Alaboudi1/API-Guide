import React, { useState } from "react";
import { Tabset, Tab } from 'react-rainbow-components';
import { ProgressIndicatorWithError } from "./progress-bar";
import Steps from "./steps";
import Editor from "../editor/editor";


function ApiGuide() {
    const [selected, changeSelected] = useState('Todo');
    const handleOnSelect = (event: React.MouseEvent<HTMLElement, MouseEvent>, selected: string) => {
        changeSelected(selected)
    }
    return (
        <div className="rainbow-flex rainbow-flex_column rainbow_vertical-stretch" style={{ minWidth: "500px", }} >
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
                            <b> Guide </b>
                        </span>
                    }
                />

                <Tab
                    style={{ overflow: "hidden" }}
                    name="Todo"
                    label={
                        <span>
                            {/*<FontAwesomeIcon icon={faClock} />  */}
                            <b>   Help  </b>
                        </span>
                    }
                />
            </Tabset>
            <Steps/>
            <ProgressIndicatorWithError />;
            <Editor language="javascript" height="3vh" code="Hello World!" />
        </div>
    )
}

export default ApiGuide;