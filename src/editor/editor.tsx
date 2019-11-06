import Editor, { monaco } from "@monaco-editor/react";
import React from 'react';
interface EditorPros {
    language: string,
    width?: string,
    height?: string
    value: string
}
const editor = monaco
    .init()
    .then(monaco => monaco)
    .catch(error =>
        console.error("An error occurred during initialization of Monaco: ", error)
    );

function LocalEditor(props: EditorPros): React.ReactElement {
    return (<>
        <div>
            <Editor {...props} theme={"dark"} />
        </div>

    </>);

}


export default LocalEditor;
