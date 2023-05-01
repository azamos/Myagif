import React,{useState} from "react";
import CONSTANTS from './appConstants';
import PageBtn from './PageBtn';
import TasksPage from "../TasksPage";
import Week from "../Sched/Week";


//Need to remember: Each square is not the page itself, mereley a generic button that sends to each page.
//Rather, each page is its own component, in turn will probably be constructed from smaller components.

const Menu = props => {
    const {APP_PAGES,PAGE_BTN_ORDER,HOME_PAGE} = CONSTANTS;
    const {activeComponent,setActiveComponent} = props;
    return (
        <div>
            <div id="PAGE_CHOISE" className="FlexboxContainer">
            {Object.keys(APP_PAGES)
            .map(pName=>
                <div key ={pName} id = {pName.split(" ").join("_")}>
                    <PageBtn  
                    name={pName.split('_').join(' ')}
                    order = {`${PAGE_BTN_ORDER[pName]}`}
                    onClickEventListener = {e=>{
                        console.log(activeComponent);
                        console.log(pName);
                        setActiveComponent(pName)}}/>
                </div>
                 )}
            </div>}
        </div>
    );
};


//Maybe this should be delegated to a component for each page
/* 
const ON_PAGE_CLICK_HANDLER = (e,setPage) => {
    let pageData = null;
    const page = e.id;//e.g: "SCHED_PAGE". Used for GET fetch request for relevant data for the page type
    setPage(page);//So react would present the correct page.
    fetch(`https://RestAPIadress.com/${page}`)
    .then(res=>res.json())
    .then(res=>{})//Send to the actual page component as a state? Maybe too deep an object? RETHINK
    .catch(err=>console.log(err));
};*/

export default Menu;

