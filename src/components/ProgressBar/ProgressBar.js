import React from 'react';
import Spritesheet from 'react-responsive-spritesheet';


const ProgressBar = ({ precentage }) => {

    return (
        <Spritesheet image={`/images/loader2.png`}
            widthFrame={360}
            heightFrame={360}
            steps={12}
            fps={12}
            direction={'forward'}
            timeout={1800}
            loop={true}
            style={{ height: '100%' }}
        />
    )
};

export default ProgressBar;
