import Editor, { monaco } from "@monaco-editor/react";
import React from 'react';


function LocalEditor(props: Ieditor): React.ReactElement {
    

        return (<>
            <div>
                <Editor {...props} options={{ minimap: { enabled: false } }}  />
            </div>

        </>);

    }


export default LocalEditor;
