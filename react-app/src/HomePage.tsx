import React from 'react';
//import ProfilePic from "./images/loginPageHome.png";
//import ProfilePic from "ProfilePic.JPEG";
//const ProfilePic = require("./loginPageHome.png") 
import ProfilePic from "./loginPageHome.png";

const introductionText = "Hi, my name is Pharoah Campbell. I am a Junior Computer Science student at Nova Southeastern University. I have been involved in Computer Science related activities for about 7 years. I enjoy working on backend development and planning out high level design choices in applications."
class HomePage extends React.Component<{}, {}>{
  render() {
    return (
      <div>
        <p> Content for home page </p>
        { ProfilePic }
        <img src = {"ProfilePic.JPEG"}/> 
        <p> Pharoah Campbell1 </p>
        <p> {introductionText} </p>
      </div>
    )
  }
}

export default HomePage;