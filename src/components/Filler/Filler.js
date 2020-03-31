import React from 'react';
import styled from 'styled-components';

const Filler = ({ precentage }) => {

    return (
        <Box style={{ width: `${precentage}%` }}>

        </Box>
    )
};

export default Filler;

const Box = styled.div`
background-color: #1DA598;
height: 100%;
border-radius: inherit;
transition: width 1s ease-in;
`;
