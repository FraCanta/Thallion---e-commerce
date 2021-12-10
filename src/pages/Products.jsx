import React from 'react';
import Annuncio from '../components/Annuncio';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import Product from '../components/Product';
import { popularProducts } from '../data';
import Footer from '../components/Footer';

const Container = styled.div``;

const Products = () => {
    return (
        <Container>
            <Annuncio/>
            <Navbar/>
            {popularProducts.map((item) => (
            <Product item={item} key={item.id} />
      ))}
      <Footer/>
        </Container>
    )
}

export default Products;
