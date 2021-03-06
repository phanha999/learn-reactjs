import React from 'react';
// import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeatures.propTypes = {
    
};

function TodoFeatures(props) {
    const arrayTodo = [
        {
            id: 1,
            name: 'ha'
        },
        {
            id: 2,
            name: 'hang'
        },
        {
            id: 3,
            name: 'huy'
        },
    ]
    return (
        <div>
            <TodoList getTodo={arrayTodo}/>
        </div>
    );
}

export default TodoFeatures;