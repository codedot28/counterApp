import React, { useState,useEffect } from 'react';
import axios from '../../api/axios';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;


`;
const Title = styled.h1`
  margin-bottom: 32px;
`;



export const Contact: React.FC = () => {
  const [products, setProduct] = useState<any[]>([]);

  async function getProduct() {
    try {
      const res = await axios.get('/posts');
      const nextProduct = res.data;
      setProduct(nextProduct);
    } catch (error) {
      console.error("Error fetching the product:", error);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);


    return(
      <Container>
      <Title>Contact</Title>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.body}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </Container>
    )
}


