import Editor, { monaco } from "@monaco-editor/react";
import React from 'react';


function LocalEditor(props: Ieditor): React.ReactElement {
    const editor = monaco
        .init()
        .then(monaco => monaco)
        .catch(error =>
            console.error("An error occurred during initialization of Monaco: ", error)
        );

    console.log(props)
    return (<>
        <div>
            <Editor {...props} options={{ minimap: { enabled: false } }} />
        </div>

    </>);

}


export default LocalEditor;
