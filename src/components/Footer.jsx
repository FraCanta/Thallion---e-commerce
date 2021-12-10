import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    background-color: #f5f5f5;
    height: 100px;
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: 12px;
`;

const Footer = () => {
    return (
        <Container>
            © 2021 Thallion. Tutti i diritti riservati.
         </Container>   
    )
}

export default Footer
