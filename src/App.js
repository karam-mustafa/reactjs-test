import './App.css';
import React from "react";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "86fc204f6e4391fa145c74b97a5f2865";

class App extends React.Component {
    getWeather = async (e) => {
        e.preventDefault();

        const api = await fetch("http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44")
        const data = await api.json();
        console.log(data)
    };

    render() {
        return (
            <div className="App">
                <Form getWeather={this.getWeather}/>
                <Weather />
            </div>
        );
    }
}


export default App;
