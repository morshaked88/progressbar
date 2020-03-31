import React, { useState } from 'react';
import styled from 'styled-components';
import ProgressBar from './components/ProgressBar/ProgressBar';



const App = () => {

  //precentage of bar
  const [precentage, set_precentage] = useState(0);

  //arg num that the bar will increase to on click
  const addPrecentage = (num) => {
    if (precentage === 100) set_precentage(100);
    else set_precentage(precentage + num);
  }

  return (
    <Box>
      <ProgressBar precentage={precentage} />
      <Button onClick={() => addPrecentage(50)}>Done</Button>
    </Box>
  );
}

export default App;

const Box = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Button = styled.button`

`;
