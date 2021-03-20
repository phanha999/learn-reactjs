import React, { useState } from 'react';
// import PropTypes from 'prop-types';

Counter.propTypes = {
    
};

function Counter(props) {
    const [counter, setcounter] = useState(0)
    return (
        <div>
            {counter}
            
            <button onClick={()=>setcounter( x => x+1 )}>Insert</button>
        </div>
    );
}

export default Counter;