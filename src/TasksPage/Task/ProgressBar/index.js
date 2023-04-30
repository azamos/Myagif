import React from "react";

const ProgressBar = (props) =>
     <div>
        <div className="ProgressBarOutline">
            <div className={`ProgressBarFilling  CompletionPercent${props.completionPercent}`}></div>
        </div>
     </div>;

export default ProgressBar;