import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Work from "./components/Work";
import Home from "./components/Home";
import Profile from "./components/Profile";
import About from "./components/About";
import SocialMedia from "./components/SocialMedia";
import Footer from "./components/Footer";
import Main from "./components/Main";

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <Navbar/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}


export default App;
