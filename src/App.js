import './App.css';
import React from "react";
import Form from "./components/Form";
import Weather from "./components/Weather";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Form />
                <Weather />
            </div>
        );
    }
}


export default App;
