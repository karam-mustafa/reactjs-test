import React from "react";

const Form = (props) => {
    return (
        <form onSubmit={props.getWeather}>
            <input name='country' placeholder="Country"/>
            <input name='city' placeholder="City"/>
            <button> Get Weather</button>
        </form>
    );
}

export default Form;
