import React from 'react';
import PropTypes from 'prop-types';
import {Box ,Typography } from '@material-ui/core';
import { PLACE_HOLDER, STATIC_HOST } from 'constant';



Product.propTypes = {
    product: PropTypes.object,
};

function Product({product}) {
    const thumbnailUrl = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : PLACE_HOLDER;
    return (
        <Box padding={1} >      
            <Box padding={1}>
                <img src={thumbnailUrl} alt={product.name} width='100%' ></img>
            </Box>

            <Typography variant="body2" > {product.name} </Typography>
            <Typography variant="body2" > 
            <Box component='span' fontSize='16px' fontWeight='bold' >
                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
            </Box>
               

            {product.promotionPercent > 0 ? `  -${product.promotionPercent}%` : ''}
            </Typography>
        </Box>
    );
}

export default Product;