import React from "react";
import './style.css'
import {Image, ImageWrapper, List, ListItem, Overlay, OverlaySpan, PortfolioSection, Span, Title} from "./style";

const Portfolio = () => {
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

            <div className="box">
                <ImageWrapper>
                    <Image src="images/Portfolio/portfolio-img1.jpg" alt=""/>
                    <Overlay>
                        <OverlaySpan>
                            Show Image
                        </OverlaySpan>
                    </Overlay>
                </ImageWrapper>
            </div>
        </PortfolioSection>

    )
};

export default Portfolio;
