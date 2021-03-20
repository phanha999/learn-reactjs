import React, { useState } from 'react';

// import PropTypes from 'prop-types';

ColorBox.propTypes = {
    
};

function ColorBox(props) {
    const [color, setcolor] = useState('white');
    return (
        <div>
            {color}

            <button onClick={()=> setcolor('black')}>
                Change to black
            </button>
            <button onClick={()=> setcolor('white')}>
                Change to white
            </button>
        </div>
    );
}

export default ColorBox;