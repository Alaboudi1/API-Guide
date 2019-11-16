import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Editor from "./editor/editor"
import { code, config } from './editor/sourceCode'
import { Tabset, Tab } from 'react-rainbow-components';
import ApiGuide from './guide/api-guide';


const App: React.FC = () => {
    const editorRef: any = useRef();

    const [selected, changeSelected] = useState('Todo');
    const [TextCode, changeTextCode] = useState(code);
    const [doneLoadingEditor, changeLoadingEditor] = useState(false);
    useEffect(() => {
        if (selected == "config") {
            changeTextCode(`const config = ${JSON.stringify(config)}`);
        }
        else {
            changeTextCode(code);
        }
    }, [selected])

    const handleOnSelect = (event: React.MouseEvent<HTMLElement, MouseEvent>, selected: string) => {
        changeSelected(selected)
    }
    const handleEditorDidMount = (_: any, editor: any) => {
        editorRef.current = editor;
        changeLoadingEditor(true);
        console.log("done");
    }
    const editorIsReady = () => {
        if (doneLoadingEditor)
            return <ApiGuide editorRef={editorRef} />
        return <></>
    }
    return (
        <>
            <div className="App">
                <div className="editor">
                    <div className="rainbow-flex rainbow-flex_column rainbow_vertical-stretch" style={{ maxWidth: "50%", }} >
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
                                        <b> config.js </b>
                                    </span>
                                }
                            />

                            <Tab
                                style={{ overflow: "hidden" }}
                                name="Todo"
                                label={
                                    <span>
                                        {/*<FontAwesomeIcon icon={faClock} />  */}
                                        <b>   Todo.js   </b>
                                    </span>
                                }
                            />
                        </Tabset>
                    </div>
                    <Editor language="javascript" height="90vh" theme="dark" value={TextCode} editorDidMount={handleEditorDidMount} />
                </div>
                {editorIsReady()}
            </div>
        </>
    );
}

export default App;
