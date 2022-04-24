import React from "react";
import './style.css';
import {Icon, Social, SocialMediaComponent, SocialP, Span, SpanInfo} from "./style";

const SocialMedia = () => {
    return (
        <SocialMediaComponent>
            <Social item={1}>
                <Icon className="icon fa fa-facebook fa-lg"/>
                <SocialP>
                    <Span >Follow Me on</Span>
                    <SpanInfo>Social Facebook</SpanInfo>
                </SocialP>
            </Social>
        </SocialMediaComponent>
    )
};

export default SocialMedia;
