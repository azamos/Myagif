import React,{useState} from "react";
import APP_PAGES from "./appConstants";


//Need to remember: Each square is not the page itself, mereley a generic button that sends to each page.
//Rather, each page is it's own component, in turn will probably be constructed from smaller components.

const AppContainer = () => {
    const [page,setPage] = useState(APP_PAGES.HOME_PAGE);
    return (
        <div id="PAGE_CHOISE" className="FlexboxContainer">
            <div id={APP_PAGES.SCHED_PAGE}></div>
            <div id={APP_PAGES.SOCIAL_PAGE}></div>
            <div id={APP_PAGES.STATS_PAGE}></div>
            <div id={APP_PAGES.TASK_PAGE}></div>
        </div>
    );
};


//Maybe this should be delegated to a component for each page
const ON_PAGE_CLICK_HANDLER = e => {
    let pageData = null;
    const page = e.id;//e.g: "SCHED_PAGE". Used for GET fetch request for relevant data for the page type
    setPage(page);//So react would present the correct page.
    fetch(`https://RestAPIadress.com/${page}`)
    .then(res=>res.json())
    .then(res=>{})//Send to the actual page component as a state? Maybe too deep an object? RETHINK
    .catch(err=>console.log(err));
};

export default AppContainer;

