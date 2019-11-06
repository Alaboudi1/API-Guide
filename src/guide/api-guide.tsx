import React, { useState } from "react";
import { Tabset, Tab } from 'react-rainbow-components';
import Steps from "./steps";
import Editor from "../editor/editor";

type Iprops = {
    config: Object
}

function ApiGuide(props: Iprops) {
    const [selected, changeSelected] = useState('Todo');
    const handleOnSelect = (event: React.MouseEvent<HTMLElement, MouseEvent>, selected: string) => {
        changeSelected(selected)
    }
    console.log(props.config)
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
            <Steps />
        </div>
    )
}

export default ApiGuide;