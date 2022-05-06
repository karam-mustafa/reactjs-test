import React, {Component} from "react";
import './style.css';
import {Icon, Line, Part, PartDesc, PartTitle, Span, Title, WorkComponent} from "./style";
import {ContainerComponent} from "../Home/style";

class  Work extends Component {
    render() {
        return (
            <WorkComponent>
                <div className='container'>
                    <Title><Span>My</Span> Work</Title>
                    <Part first={1}>
                        <Icon className="icon fa fa-chain fa-2x"/>
                        <PartTitle>Mobile Ux</PartTitle>
                        <Line/>
                        <PartDesc>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea
                            ipsam! Voluptas.
                        </PartDesc>
                    </Part>
                </div>
            </WorkComponent>
        );
    }
}

export default Work;
