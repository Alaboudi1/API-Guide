import React, { useState } from 'react';
import { CheckboxGroup } from 'react-rainbow-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const computeCheckList = (check: Icheck): React.ReactElement => {
    let beforeCode: React.ReactElement = <></>;
    let afterCode: React.ReactElement = <></>;

    if (check.code && check.code.before) {
        beforeCode = <div>
            <p>Before:</p>
            <SyntaxHighlighter language="javascript"   style={vs2015}>
            {check.code.before} 
            </SyntaxHighlighter>
        </div>
    }
    if (check.code && check.code.after) {
        afterCode = <div>
            <p>After:</p>
            <SyntaxHighlighter language="javascript"   style={vs2015}>
            {check.code.after}
            </SyntaxHighlighter>
        </div>
    }
    return (<>
        <b>{check.checkText}</b>
        {beforeCode}
        {afterCode}
    </ >);
}


function Steps(props: Istep | any): React.ReactElement {
    const options = props.checks.map((check: Icheck, index: number) => ({
        value: `${index}`,
        label: computeCheckList(check),
        disabled: false
    }));
    const [checkList, changeCheckList] = useState(options)
    const [checkedValues, changeCheckValues] = useState([])
    const passCheckValues = (values: any): void => {
        changeCheckValues(values);
        props.changeDone(values.length)
    }

    return (
        <>
            <div className="rainbow-p-vertical_large rainbow-p-left_xx-large" style={{minHeight:"650px"}}>
                {<CheckboxGroup
                    id="checkbox-group-1"
                    label="Checkbox Group Label"
                    options={checkList}
                    value={checkedValues}
                    onChange={passCheckValues}
                />}
            </div>
        </>

    );
}


export default Steps;

