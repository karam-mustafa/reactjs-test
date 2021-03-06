import styled from 'styled-components';

export const AboutSection =  styled.div`
    height: 600px;
    background: url('../../images/creative/about-bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    
    @media (max-width:991px) {
        width: 100%;
        padding-top: 10px;
        float: none
    }
    
`;

export const AboutInfo = styled.div`
    padding-top: 50px;
    width: 50%;
    float: right;
    @media (max-width:991px) {
        font-size: 30px
    }
`;

export const AboutTitle = styled.h2`
    font-weight: bold;
    font-size: 50px
`;
export const AboutSpan = styled.span`
    font-weight: normal
`;
export const AboutDir = styled.h4`
    font-size: 40px;
    color: #eb5424;
    margin-bottom: 20px;
    @media (max-width:991px) {
    
    }
`;
export const AboutDirP = styled.p`
    color: #000;
    margin-bottom: 15px;
    line-height: 1.8
`;
export const AboutDirA = styled.a`
    text-decoration: none
`;
