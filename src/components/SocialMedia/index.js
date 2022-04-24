import React from "react";
import './style.css';
import {Icon, Social, SocialMediaComponent, SocialP, Span, SpanInfo} from "./style";

const SocialMedia = () => {
    return (
        <SocialMediaComponent>
            <Social>
                <Icon className="icon fa fa-facebook fa-lg"/>
                <SocialP>
                    <Span className="info1">Follow Me on</Span>
                    <SpanInfo className="info2">Social Facebook</SpanInfo>
                </SocialP>
            </Social>
        </SocialMediaComponent>
    )
};

export default SocialMedia;
