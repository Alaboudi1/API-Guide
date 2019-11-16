import React, { useState, DOMElement } from "react";
import Steps from "./steps";
import { config } from "../editor/sourceCode";
import S from "string";

function Help(props: any): React.ReactElement {

    const initializeCheckList: string[] = [];
    const [doneCheckList, changeDoneChecklist] = useState(initializeCheckList);
    const [selectedLineContent, changeSelectedLineContent] = useState("");

    const getContent = () => {
        if (selectedLineContent == "")
            return (
                <h1> Please select an API! </h1>
            )
        else {
            const stepIndex = config.steps.findIndex(step => {
                return step.relatedAPIs.find((api: string) => S(selectedLineContent).contains(api)) != undefined
            })
            if (stepIndex < 0)
                return (<h1> Related API is not found! Please select another API. </h1>)
            return (
                <Steps key={stepIndex} {...config.steps[stepIndex]} changeDoneChecklist={changeDoneChecklist} />
            )
        }
    }
    props.editorRef.current.onMouseUp((e: any) => {
        const lineNumber = e.target.position.lineNumber;
        changeSelectedLineContent(props.editorRef.current.getModel().getLineContent(lineNumber).trim());
    });

    return (
        <>
            {getContent()}
        </>
    )
}

export default Help; 