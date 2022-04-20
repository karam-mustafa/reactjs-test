import React, {Component} from "react";

class Weather extends Component {

    render() {
        return (
            <div>
                {
                    this.props.data.city && <p>City: {this.props.data.city}</p>
                }

                {
                    this.props.data.country && <p>country: {this.props.data.country}</p>
                }
                {
                    this.props.data.humidity && <p>humidity: {this.props.data.humidity}</p>
                }
                {
                    this.props.data.description && <p>description: {this.props.data.description}</p>
                }
                {
                    this.props.data.temp && <p>Temp: {this.props.data.temp}</p>
                }
                {
                    this.props.data.error && <p>Error: {this.props.data.error}</p>
                }

            </div>
        )
            ;
    }
}

export default Weather;
