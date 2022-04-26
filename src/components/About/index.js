import React from "react";
import './style.css';
import {AboutDir, AboutDirA, AboutDirP, AboutInfo, AboutSection, AboutSpan, AboutTitle} from "./style";

const About = () => {
    return (
        <AboutSection>
            <div className="container">
                <AboutInfo>
                    <AboutTitle><AboutSpan>This is</AboutSpan> Me</AboutTitle>
                    <AboutDir>Creative Director</AboutDir>
                    <AboutDirP>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <AboutDirA
                        href="#">explicabo</AboutDirA> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus
                        dolorum. Possimus nisi cupiditate ad veritatis?
                    </AboutDirP>
                    <AboutDirP>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam
                        quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad
                        veritatis?
                    </AboutDirP>
                </AboutInfo>
            </div>
        </AboutSection>

    )
};

export default About;
