import React from "react";

const PageBtn = props => 
    <div id = {props.name} className="PageBtn" onClick={props.clickEventListener}><h3>{props.name}</h3></div>;

export default PageBtn;