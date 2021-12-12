import styled from "styled-components";
import {Link} from "react-router-dom"
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 60vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;



const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.25);
  z-index: 3;
  &:hover {
      transition: all 0.3s ease-in-out;
        background: rgba(0, 0, 0, 0.5);
  }
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
    &:hover{
        transform: scale(1.1);
    }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Link to="/Products" > <Button >SHOP NOW</Button> </Link> 
      </Info>
    </Container>
  );
};

export default CategoryItem;