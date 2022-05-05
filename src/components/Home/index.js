import React from "react";
import './style.css';
import {
    ContainerComponent, HomeButtonComponent,
    HomeComponent, HomeDescriptionComponent, HomeInfoComponent, HomeInformationComponent, HomeTitleComponent,
} from "./style";

const Home = () => {
    return (
        <HomeComponent>
            <ContainerComponent>
                <HomeInformationComponent>
                    <HomeTitleComponent>Karam Mustafa</HomeTitleComponent>
                    <HomeInfoComponent>Creative Director</HomeInfoComponent>
                    <HomeDescriptionComponent>
                        Iam a professional <span>UX Designer</span> and Front-End Developer creating modern and
                        resposive designs to Web and Mobile. Let us work together. Thank you.
                    </HomeDescriptionComponent>
                    <HomeButtonComponent>Let's Begin</HomeButtonComponent>
                </HomeInformationComponent>
            </ContainerComponent>
        </HomeComponent>

    )
};

export default Home;
