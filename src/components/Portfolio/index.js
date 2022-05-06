import React from "react";
import './style.css'
import {List, ListItem, PortfolioSection, Title} from "./style";

const Portfolio = () => {
    return (
        <PortfolioSection>
            <Title><span>My</span> Portfolio</Title>
            <List className="portfolio-list">
                <ListItem>All</ListItem>
                <ListItem>HTML</ListItem>
                <ListItem>Photoshop</ListItem>
                <ListItem>Wordpress</ListItem>
                <ListItem>Mobile</ListItem>
            </List>

            <div className="box">
                <div>
                    <img src="images/Portfolio/portfolio-img1.jpg" alt=""/>
                    <p className="overlay">
                        <span>
                            Show Image
                        </span>
                    </p>
                </div>
            </div>
        </PortfolioSection>

    )
};

export default Portfolio;
