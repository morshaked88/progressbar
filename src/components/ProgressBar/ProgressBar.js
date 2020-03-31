import React from 'react';
import styled from 'styled-components';
import Filler from '../Filler/Filler';


const ProgressBar = ({ precentage }) => {

    return (
        <Box>
            <Filler precentage={precentage} />
        </Box>
    )
};

export default ProgressBar;

const Box = styled.div`
position: relative;
height: 20px;
width: 350px;
border-radius: 50px;
border: 1px solid #333;

`;