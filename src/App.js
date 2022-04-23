import './App.css';
import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Main from "./components/Main";
import Contact from "./components/Contact";

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Route exact path='/' Componenet={Main}/>
                <Route path='/contact' Componenet={Contact}/>
            </BrowserRouter>
        );
    }
}


export default App;
