import React, {useEffect, useState} from "react";
import './style.css'
import {Box, Image, ImageWrapper, List, ListItem, Overlay, OverlaySpan, PortfolioSection, Span, Title} from "./style";
import axios from "axios";

const Portfolio = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        axios.get('./js/data.json').then(res => setImages(res.data.portfolio))
    }, []);

    const data = images.map(item => {
        return (
            <ImageWrapper key={item.id}>
                <Image src={item.image} alt=""/>
                <Overlay>
                    <OverlaySpan>
                        Show Image
                    </OverlaySpan>
                </Overlay>
            </ImageWrapper>
        );
    });

    return (
        <PortfolioSection>
            <Title><Span>My</Span> Portfolio</Title>
            <List className="portfolio-list">
                <ListItem active>All</ListItem>
                <ListItem>HTML</ListItem>
                <ListItem>Photoshop</ListItem>
                <ListItem>Wordpress</ListItem>
                <ListItem>Mobile</ListItem>
            </List>

            <Box>
                {data}
            </Box>
        </PortfolioSection>

    )
};

export default Portfolio;
