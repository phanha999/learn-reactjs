import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss'

TodoList.propTypes = {
    getTodo: PropTypes.array,
    onClickTodo: PropTypes.func,
};
TodoList.defaultProps = {
    getTodo: [],
    onClickTodo: null,
}

function TodoList({getTodo,onClickTodo}) {
    // const {} = getTodo;
    const handleTodo = (value,index) => {
        if(!onClickTodo) return;

        onClickTodo(value,index);
    }
    return (
        <ul className="todo__list ">
          {getTodo.map((value,index) => (
              <li 
              key={value.id}
              className={classnames({
                  "todo__item": true,
                  old: value.status === 'old' 
              })}    
              onClick={ () => handleTodo(value,index) }
              > {value.name} 
               </li>
          ))}
        </ul>
    );
}

export default TodoList;