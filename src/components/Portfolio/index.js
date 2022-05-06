import React from "react";
import './style.css'
import {PortfolioSection} from "./style";

const Portfolio = () => {
    return (
        <PortfolioSection>
            <h2 className="portfolio-title"><span>My</span> Portfolio</h2>
            <ul className="portfolio-list">
                <li className="portfolio-item active">All</li>
                <li className="portfolio-item">HTML</li>
                <li className="portfolio-item">Photoshop</li>
                <li className="portfolio-item">Wordpress</li>
                <li className="portfolio-item">Mobile</li>
            </ul>

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
