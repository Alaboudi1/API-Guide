import React, { useState, useEffect } from "react";
import { Tabset, Tab } from 'react-rainbow-components';
import Steps from "./steps";
import { ProgressIndicatorWithError } from "./progress-bar";
import { config } from '../editor/sourceCode';
import './api-guide.css';
import { monaco } from "@monaco-editor/react";
import Help from "./help"
let localMonaco: any;
monaco
    .init()
    .then(monaco => localMonaco = monaco)
    .catch(error =>
        console.error("An error occurred during initialization of Monaco: ", error)
    );

let currentSelection: any = [];
function ApiGuide(props: any): React.ReactElement {
    const [selected, changeSelected] = useState('guide');
    const [stepIndex, changeStepIndex] = useState(0);
    useEffect(() => {
        changeDoneChecklist(config.steps[stepIndex].done || [])
        highlightAPIs()
    }
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

    const highlightAPIs = () => {
        const apis = config.steps[stepIndex].relatedAPIs;
        props.editorRef.current.deltaDecorations(currentSelection, []);
        const highlightConfig: any = [];
        apis.forEach(api => {
            const range = props.editorRef.current.getModel().findMatches(api);
            highlightConfig.push(...range.map((r: any) => {
                return {
                    range: new localMonaco.Range(r.range.startLineNumber, r.range.startColumn, r.range.endLineNumber, r.range.endColumn),
                    options: { inlineClassName: 'myInlineDecoration' }
                }
            }));
        });
        currentSelection = props.editorRef.current.deltaDecorations([], highlightConfig);

    }
    const tabsContent = () => {
        if (selected === "guide")
            return (
                <>
                    <Steps key={stepIndex} label={`Step ${stepIndex}/${config.steps.length-1}`} {...config.steps[stepIndex]} changeDoneChecklist={changeDoneChecklist} />
                    <ProgressIndicatorWithError changeStep={changeStepIndexFunction} steps={error} />
                </>
            )
            return (
                <>
               <Help editorRef= {props.editorRef}/>
                </>
            )

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
              {tabsContent()}
        </div>
    )
}

export default ApiGuide;