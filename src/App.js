import React from 'react';
import Editor from './Editor';
import './App.css';


function Upper() {
  return (
    <>
    <div className="upper-pane">
      <div class="container">
        <div class="left"> 
          <Editor/> 
        </div>
        <div class="right"> 
          <Editor/> 
        </div>
      </div>
    </div>

    <div className="lower-pane">
      <div class="editor">
         <p> Dummy Code </p>
      </div>
    </div>
    </>
  );
}

export default Upper;
