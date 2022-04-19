import './App.css';
import React from "react";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "86fc204f6e4391fa145c74b97a5f2865";

class App extends React.Component {
    state = {
        city: "",
        country: "",
        hum: "",
        description: "",
        error: "",
        temp: "",
    };
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_KEY}`);
        const data = await api.json();
        if (city && country) {
            this.setState({
                city: data.name,
                country: data.sys.country,
                hum: data.main.humidity,
                description: data.weather[0].description,
                error: "",
                temp: data.main.temp,
            });
        } else {
            this.setState({
                error: "please insert valid data"
            })
        }
    };

    render() {
        return (
            <div className="App">
                <Form getWeather={this.getWeather} data={this.state}/>
                <Weather/>
            </div>
        );
    }
}


export default App;
