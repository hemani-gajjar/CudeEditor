//necessary dependencies
import React, { Component } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

// import codemirror Python mode
import "codemirror/mode/python/python";
// import codemirror C-like mode (includes C, C++ and Java)
import "codemirror/mode/clike/clike";

import { Controlled as ControlledEditor } from "react-codemirror2";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

//functional component
const Editor = (props) => {
  const { language, displayName, value, onChange } = props;

  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <div className="code-editor">
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          //theme-changing
          theme: "material",
        }}
      />
      <div className="selection"> {displayName} </div>
    </div>
  );
};

export default Editor;

//// syntax for class based component
// export default class Editor extends Component {

//     render(){
//         return(
//             <div class="editor">
//                 <p> Dummy Code </p>
//             </div>
//         )
//     }
// }
