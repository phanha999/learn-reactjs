import React from 'react';
// import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router';
import {Box } from '@material-ui/core';
import ListPages from './pages/index';


Product.propTypes = {
    
};

function Product(props) {
    const match = useRouteMatch();
    return (
        <Box pt={4}>
            <Switch>
                <Route path={match.url} component={ListPages} exact />
            </Switch>
        </Box> 
);
}

export default Product;