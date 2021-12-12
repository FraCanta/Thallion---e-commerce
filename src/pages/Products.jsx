import React from 'react';
import Annuncio from '../components/Annuncio';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import Product from '../components/Product';
import { popularProducts } from '../data';
import Footer from '../components/Footer';
import { useState } from 'react';


const Container = styled.div``;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: teal;
  color: white;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;

const Option = styled.option`
`;

const Products = () => {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };


    return (
        <Container>
            <Annuncio/>
            <Navbar/>
            <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
            {popularProducts.map((item) => (
            <Product item={item} key={item.id} filters={filters} sort={sort} />
      ))}
      <Footer/>
        </Container>
    )
}

export default Products;
