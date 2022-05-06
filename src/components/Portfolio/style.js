import styled from 'styled-components';

export const PortfolioSection = styled.div`
    background: #f8f8f8;
    padding-top: 20px;
    overflow: hidden;
`;
export const Title = styled.h2`
    text-align: center;
    font-size: 35px
`;

export const Span = styled.span`
    font-weight: normal
`;

export const List = styled.ul`
    list-style: none;
    text-align: center;
    margin: 20px 0
`;
export const ListItem = styled.li`
    display: inline-block;
    width: 100px;
    padding: 10px;
    background: ${props => props.active ? '#eb5424' : 'unset'};
    color: ${props => props.active ? '#fff' : 'unset'};
`;
