import styled from 'styled-components';

export const AboutSection =  styled.div`
    height: 500px;
    background: url('../images/creative/about-bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed
`;

export const AboutInfo = styled.div`
    padding-top: 100px;
    width: 50%;
    float: right;
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
    margin-bottom: 20px
`;
export const AboutDir = styled.p`
    color: #000;
    margin-bottom: 15px;
    line-height: 1.8
`;


.creative .creative-info .info-desc a {
    text-decoration: none
}

@media (max-width:991px) {
.creative {
        height: auto
    }
.creative .creative-info {
        width: 100%;
        padding-top: 10px;
        float: none
    }

.creative .creative-info .info-dir {
        font-size: 30px
    }
}