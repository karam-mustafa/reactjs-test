import styled from 'styled-components';

export const SocialSection = styled.div`
    height: auto;
    overflow: hidden
`;

export const Social = styled.div`
    width: 33.33%;
    float: left;
    box-sizing: border-box;
    padding: 100px 0 100px 60px
`;
export const FacebookComponent = styled.div`
    background: #3b5998;
`;
export const TwitterComponent = styled.div`
    background: #498cbf;
`;

.social-media .social.pin {
    background: #cc2127;
}

.social-media .social .icon {
    width: 50px;
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    color: #888;
    float: left;
    margin-right: 10px
}

.social-media .social p {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    color: #fff
}

.social-media .social p span {
    display: block;
    margin-bottom: 8px
}

.social-media .social p span.info2 {
    font-weight: normal
}

@media (max-width:991px) {
.social-media .social {
        width: 100%;
        float: none;
    }
}
