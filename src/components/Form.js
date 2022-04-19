import React from "react";

const Form = (props) => {
    return (
        <form onSubmit={props.getWeather}>
            <input placeholder="Country"/>
            <input placeholder="City"/>
            <button> Get Weather</button>
        </form>
    );
}

export default Form;
