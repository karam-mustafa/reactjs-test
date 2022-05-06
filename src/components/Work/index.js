import React, {Component} from "react";
import './style.css';
import axios from 'axios';

import {Icon, Line, Part, PartDesc, PartTitle, Span, Title, WorkComponent} from "./style";
import {ContainerComponent} from "../Home/style";

class Work extends Component {
    state = {
        works: [],
    };

    componentDidMount() {
        axios.get('./js/data.json').then(res => this.setState({
            works: res.data.works,
        }))
    }

    render() {

        const {works} = this.state;

        const workList = works.map(item => {
            return (
                <Part first={item.id} key={item.id}>
                    <Icon className={item.icon_name}/>
                    <PartTitle>{item.title}</PartTitle>
                    <Line/>
                    <PartDesc>
                        {item.body}
                    </PartDesc>
                </Part>
            );
        })
        return (
            <WorkComponent>
                <div className='container'>
                    <Title><Span>My</Span> Work</Title>
                    {workList}
                </div>
            </WorkComponent>
        );
    }
}

export default Work;
