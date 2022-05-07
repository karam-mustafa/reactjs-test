import React from "react";
import './style.css';
import {AboutDir, AboutInfo, AboutSection, AboutSpan, AboutTitle} from "./style";

const About = () => {
    return (
        <AboutSection>
            <div className="container">
                <AboutInfo>
                    <AboutTitle><AboutSpan>This is</AboutSpan> Me</AboutTitle>
                    <AboutDir>Creative Director</AboutDir>
                    <p className="info-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <a
                        href="#">explicabo</a> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus
                        dolorum. Possimus nisi cupiditate ad veritatis?
                    </p>
                    <p className="info-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam
                        quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad
                        veritatis?
                    </p>
                </div>
            </AboutInfo>
        </AboutSection>

    )
};

export default About;
