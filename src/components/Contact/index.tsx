import React, { useState,useEffect } from 'react';
import axios from '../../api/axios';

export const Contact: React.FC = () => {
  const [product, setProduct] = useState<any>(null);

  async function getProduct() {
    try {
      const res = await axios.get('/posts/1');
      console.log(res);
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
      <div>
      <h1>Contact</h1>
      {product ? (
        <div>
          <h2>{product.title}</h2>
          <p>{product.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    )
}