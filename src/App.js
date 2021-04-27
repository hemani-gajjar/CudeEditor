import React, { useState } from "react";

//Styles
import "./index.css";

//Components
import Editor from "./Editor";

function Upper() {
  const [editorLanguage, setEditorLanguage] = useState("");

  return (
    <>
      <div className="upper-pane">
        <div class="container">
          <div class="left">
            <Editor
              language="python"
              displayName="Python"
              value={editorLanguage}
              onChange={setEditorLanguage}
            />
          </div>
          <div class="right">
            <div class="editor">
              <p class="output"> Dummy Code </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lower-pane">
        <div class="editor">
          <p class="output"> Dummy Code </p>
        </div>
      </div>
    </>
  );
}

export default Upper;
