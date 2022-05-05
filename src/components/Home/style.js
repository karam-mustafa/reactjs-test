import styled from 'styled-components';

export const HomeComponent = styled.div`
    height: 500px;
    background: url('../images/Home/home-bg.jpg');
    background-size: cover;
    background-position: center;
    text-align: center;
    position: relative;
}`;
export const InformationComponent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%)
}`;
export const ContainerComponent = styled.div`
    width: 85%;
    margin: auto;
}`;
