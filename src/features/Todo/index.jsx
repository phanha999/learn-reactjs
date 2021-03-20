import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import NotFound from '../../components/NotFound';
import ListPages from './pages/ListPages';
import TodoDetal from './pages/TodoDetal';
// import PropTypes from 'prop-types';
// import TodoList from './components/TodoList';

TodoFeatures.propTypes = {
    
};

function TodoFeatures(props) {
    const match = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route path={match.path} component={ListPages} exact />
                <Route path={`${match.path}/:todoId`} component={TodoDetal} exact />

                <Route component={NotFound}/>
            </Switch>
        </div>
        
    );
}

export default TodoFeatures;