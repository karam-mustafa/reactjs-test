import React from "react";
import './style.css';
import {
    ContainerComponent,
    HomeComponent,
    InfoComponent,
    InformationComponent,
    PDescriptionComponent,
    TitleComponent
} from "./style";

const Home = () => {
    return (
        <HomeComponent>
            <ContainerComponent>
                <InformationComponent>
                    <TitleComponent>Karam Mustafa</TitleComponent>
                    <InfoComponent>Creative Director</InfoComponent>
                    <PDescriptionComponent>
                        Iam a professional <span>UX Designer</span> and Front-End Developer creating modern and
                        resposive designs to Web and Mobile. Let us work together. Thank you.
                    </PDescriptionComponent>
                    <button className="home-btn">Let's Begin</button>
                </InformationComponent>
            </ContainerComponent>
        </HomeComponent>

    )
};

export default Home;
