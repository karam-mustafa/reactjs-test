import './App.css';
import React from "react";
import {BrowserRouter, Route,Routes} from "react-router-dom";
import Main from "./components/Main";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
               <Navbar/>
               <Routes>
                   <Route exact path='/' element={<Main />}/>
                   <Route path='/contact' element={<Contact />}/>
               </Routes>
            </BrowserRouter>
        );
    }
}


export default App;
