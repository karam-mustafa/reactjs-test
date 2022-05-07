import React from "react";
import './style.css';
import {AboutInfo, AboutSection} from "./style";

const About = () => {
    return (
        <AboutSection>
            <div className="container">
                <AboutInfo>
                    <h2 className="info-title"><span>This is</span> Me</h2>
                    <h4 className="info-dir">Creative Director</h4>
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
