import Editor, { monaco } from "@monaco-editor/react";
import React from 'react';
interface EditorPros {
    language: string,
    width?: string,
    height?: string
    code: string
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
            <Editor height={props.height} language={props.language} value={props.code} />
        </div>

    </>);

}


export default LocalEditor;
