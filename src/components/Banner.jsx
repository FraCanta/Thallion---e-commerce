import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30vh;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-image: url("https://images.pexels.com/photos/1389460/pexels-photo-1389460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-position: center;
  background-size: cover;
  margin-top: 25px;
  flex-direction: column;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    transform: scale(1.1);
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 3rem;
`;

const Banner = () => {
  return (
    <Container>
      <Title>I materiali di domani</Title>
      <Button>SEGUICI</Button>
    </Container>
  );
};

export default Banner;
