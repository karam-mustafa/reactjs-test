import React, {useEffect, useState} from "react";
import './style.css';
import {Icon, Social, SocialMediaComponent, SocialP, Span, SpanInfo} from "./style";
import axios from "axios";

const SocialMedia = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('./js/data.json').then(res => setData(res.data.social));
    }, []);

    const dataToMap = data.map(elm => {
        return (
            <Social item={elm.id}>
                <Icon className={elm.icon}/>
                <SocialP>
                    <Span>{elm.title}</Span>
                    <SpanInfo>{elm.body}</SpanInfo>
                </SocialP>
            </Social>
        );
    });

    return (
        <SocialMediaComponent>
            {dataToMap}
        </SocialMediaComponent>
    )
};

export default SocialMedia;
