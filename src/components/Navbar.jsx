import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  margin-bottom: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  width: 100px;
`;

const Center = styled.h1`
  font-size: 30px;
  font-weight: bold;
  flex: 1;
  text-align: center;
  align-items: center;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const Right = styled.div`
  flex: 1;
  text-align: center;
  justify-content: flex-end;
  display: flex;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  font-size: 12px;
  margin-left: 20px;
  font-weight: 500;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
          <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>Thallion.</Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
