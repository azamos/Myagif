import React,{useState} from "react";
import logo from '../logo.png';

const ProfileBtn = () => {
    const [pic,setPic] = useState(logo);
    return <div className="Circular">
        <img src={logo} width={"150px"} className="ProfilePic"/>
    </div>
}

export default ProfileBtn;