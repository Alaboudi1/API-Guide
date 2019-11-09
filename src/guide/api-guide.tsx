import React, { useState, useEffect } from "react";
import { Tabset, Tab } from 'react-rainbow-components';
import Steps from "./steps";
import { ProgressIndicatorWithError } from "./progress-bar";
import { config } from '../editor/sourceCode';



function ApiGuide() {
    const [selected, changeSelected] = useState('guide');
    const [stepIndex, changeStepIndex] = useState(0);
    useEffect(() =>
        changeDoneChecklist(config.steps[stepIndex].done || [])
        , [stepIndex]);
    const [error, changeError] = useState(config.steps.map(_ => false));
    const initializeCheckList: string[] = [];
    const [doneCheckList, changeDoneChecklist] = useState(initializeCheckList);
    const handleOnSelect = (event: React.MouseEvent<HTMLElement, MouseEvent>, selected: string) => {
        changeSelected(selected)
    }
    const changeStepIndexFunction = (index: number) => {
        // check for the missing check in the list and mark it with error = true
        if (doneCheckList.length === config.steps[stepIndex].checks.length) {
            changeError(error.map((bol, index) => (index === stepIndex) ? false : bol))
        }
        else {
            changeError(error.map((bol, index) => index === stepIndex ? true : bol))
        }

        //saving the state of the checklist
        config.steps[stepIndex].done = doneCheckList.map((element: string) => element);
        changeStepIndex(index);
    }

    return (
        <div className="rainbow-flex rainbow-flex_column rainbow_vertical-stretch" style={{ minWidth: "700px", }} >
            <Tabset
                fullWidth
                id="tabset-2"
                onSelect={handleOnSelect}
                activeTabName={selected}
            >
                <Tab
                    name="guide"
                    label={
                        <span>
                            {/* <FontAwesomeIcon icon={faFolderOpen} />  */}
                            <b> Guide </b>
                        </span>
                    }
                />

                <Tab
                    style={{ overflow: "hidden" }}
                    name="help"
                    label={
                        <span>
                            {/*<FontAwesomeIcon icon={faClock} />  */}
                            <b>   Help  </b>
                        </span>
                    }
                />
            </Tabset>
            <Steps key={stepIndex} {...config.steps[stepIndex]} changeDoneChecklist={changeDoneChecklist} />
            <ProgressIndicatorWithError changeStep={changeStepIndexFunction} steps={error} />

        </div>
    )
}

export default ApiGuide;