import React,{useState} from "react";
import APP_PAGES from "./appConstants";
import PageBtn from './PageBtn';


//Need to remember: Each square is not the page itself, mereley a generic button that sends to each page.
//Rather, each page is its own component, in turn will probably be constructed from smaller components.

const AppContainer = () => {
    const [page,setPage] = useState(APP_PAGES.HOME_PAGE);
    return (
        <div id="PAGE_CHOISE" className="FlexboxContainer">
            {Object.keys(APP_PAGES)
            .map(pName=>
                <PageBtn key ={pName}
                 name={pName}
                clickEventListener={
                    e=>eventListenerSelector.bind(e,pName, setPage)}/>
                )}
        </div>
    );
};

const PlACEHOLDEREVENTLISTENER = e=>console.log(e);

const eventListenerSelector = (e,pageName) => {
    return PlACEHOLDEREVENTLISTENER.bind(e);//TODO: recall when to bind and when not to.
};


//Maybe this should be delegated to a component for each page
const ON_PAGE_CLICK_HANDLER = (e,setPage) => {
    let pageData = null;
    const page = e.id;//e.g: "SCHED_PAGE". Used for GET fetch request for relevant data for the page type
    setPage(page);//So react would present the correct page.
    fetch(`https://RestAPIadress.com/${page}`)
    .then(res=>res.json())
    .then(res=>{})//Send to the actual page component as a state? Maybe too deep an object? RETHINK
    .catch(err=>console.log(err));
};

export default AppContainer;

