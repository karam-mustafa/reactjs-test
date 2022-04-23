import './Main.css';
import React from "react";
import Home from "../Home";
import Work from "../Work";
import Portfolio from "../Portfolio";
import Profile from "../Profile";
import About from "../About";
import SocialMedia from "../SocialMedia";

class Main extends React.Component {

    render() {
        return (
            <div className="Main">
                <Home/>
                <Work/>
                <Portfolio/>
                <Profile/>
                <About/>
                <SocialMedia/>
            </div>
        );
    }
}


export default Main;
