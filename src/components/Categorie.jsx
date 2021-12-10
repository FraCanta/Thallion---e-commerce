import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 50px;
  justify-content: space-between;
  flex-wrap: nowrap;
  flex-direction: row;
  margin-top: 50px;
`;

const Categorie = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categorie;