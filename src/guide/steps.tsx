import React, { useState } from 'react';
import { CheckboxGroup } from 'react-rainbow-components';
import Editor from "../editor/editor";
import { ProgressIndicatorWithError } from "./progress-bar";
import { config } from '../editor/sourceCode';
const computeCheckList = (index: Number): React.ReactElement => {
    return (<div>
        <Editor language="javascript" height="5vh" width="700px" value="<TodoList items={this.state.items} />" />
    </div>);
}
const options = config.steps.map((step, index) => ({
    value: `checkbox${index}`,
    label: computeCheckList(index),
    disabled: false
}));

function Steps(props: any) {
    const [checkList, changeCheckList] = useState(options)
    const [checkedValues, changeCheckValues] = useState([])
    const passCheckValues = (values: any): void => {
        changeCheckValues(values);
    }
    return (
        <>
            <div className="rainbow-p-vertical_large rainbow-p-left_xx-large">
                {<CheckboxGroup
                    id="checkbox-group-1"
                    label="Checkbox Group Label"
                    options={checkList}
                    value={checkedValues}
                    onChange={passCheckValues}
                />}
            </div>
            <ProgressIndicatorWithError />
        </>

    );
}


export default Steps;

