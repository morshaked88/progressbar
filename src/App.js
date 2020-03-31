import React, { useState } from 'react';
import styled from 'styled-components';
import ProgressBar from './components/ProgressBar/ProgressBar';



const App = () => {

  return (
    <Box>
      <ProgressBar />
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
background-color: #f7f7f7;
`;

const Button = styled.button`

`;
