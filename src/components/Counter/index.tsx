import React from 'react';
import styled from '@emotion/styled';
import { useState } from 'react';
import { Buttons } from 'components/Button';
import { Label } from 'components/Label';

const Container = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  margin-bottom: 32px;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Counter: React.FC = () => {
    const [counter, setCounter] = useState(0);

    const sub = () => {
      setCounter(counter - 1);
    };
    const add = () => {
      setCounter(counter + 1);
    };

    return( 
    <Container>  
    <Title>Counter App</Title>
    <Contents>
     <Buttons label="-" onClick={sub} />
      <Label data={counter} />
      <Buttons label="+" onClick={add} /> 
    </Contents>
  </Container>
  )
    
}

