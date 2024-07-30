import { useState } from 'react';
import styled from '@emotion/styled';
import { Buttons } from 'components/Button';
import { Label } from 'components/Label';
import ButtonAppBar from 'components/Header'

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

function App() {
  const [counter, setCounter] = useState(0);

  const sub = () => {
    setCounter(counter - 1);
  };
  const add = () => {
    setCounter(counter + 1);
  };

  return (
    <>    
   <ButtonAppBar></ButtonAppBar>
    <Container>  
      <Title>Counter App</Title>
      <Contents>
        <Buttons label="-" onClick={sub} />
        <Label data={counter} />
        <Buttons label="+" onClick={add} />
      </Contents>
    </Container>
    </>

    
  );
}

export default App;
