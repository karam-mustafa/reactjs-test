import React from "react";
import './style.css';
import {ContainerComponent, HomeComponent, InformationComponent} from "./style";

const Home = () => {
    return (
        <HomeComponent>
            <ContainerComponent>
                <InformationComponent>
                    <h2 className="home-title margin-bottom">Karam Mustafa</h2>
                    <h4 className="home-info">Creative Director</h4>
                    <p className="home-desc">
                        Iam a professional <span>UX Designer</span> and Front-End Developer creating modern and
                        resposive designs to Web and Mobile. Let us work together. Thank you.
                    </p>
                    <button className="home-btn">Let's Begin</button>
                </InformationComponent>
            </ContainerComponent>
        </HomeComponent>

    )
};

export default Home;
