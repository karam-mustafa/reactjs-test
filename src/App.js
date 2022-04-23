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

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <Navbar/>
                <Home/>
                <Work/>
                <Portfolio/>
                <Profile/>
                <About/>
                <SocialMedia/>
                <Footer/>
            </div>
        );
    }
}


export default App;
