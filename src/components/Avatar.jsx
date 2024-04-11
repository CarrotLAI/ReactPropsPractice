import React from "react";

function Avatar(props){
    console.log(props)
    return <img className="circle-img" src={props.img} alt="AvatarIMG" />
}
export default Avatar;