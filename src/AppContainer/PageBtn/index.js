import React from "react";

const OrderToClass = {
    0:"TopLeft",
    1:"TopRight",
    2:"BottomLeft",
    3:"BottomRight"
};

const PageBtn = props => 
    <div id = {props.name} className={`PageBtn ${OrderToClass[props.order]}`} onClick={props.clickEventListener}><h3>{props.name}</h3></div>;

export default PageBtn;