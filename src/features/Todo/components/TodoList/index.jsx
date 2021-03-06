import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    getTodo: PropTypes.array,
};
TodoList.defaultProps = {
    getTodo: [],
}

function TodoList({getTodo}) {
    // const {} = getTodo;
    return (
        <ul>
          {getTodo.map((value) => (
              <li 
              key={value.id}> {value.name} </li>
          ))}
        </ul>
    );
}

export default TodoList;