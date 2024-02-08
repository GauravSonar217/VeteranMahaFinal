import React from "react";

function MessageBox({boxclass, alertMessage}) {
  return (
    <React.Fragment>
      <div className="messageBox">
        <h4 className={boxclass}>{alertMessage}</h4>
      </div>
    </React.Fragment>
  );
}

export default MessageBox;
