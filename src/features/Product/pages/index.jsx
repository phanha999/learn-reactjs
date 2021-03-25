import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import {  Container , Paper ,makeStyles } from '@material-ui/core';
import productApi from 'api/productApi';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import SkeletonProduct from '../../Product/components/Skeleton';
import ProductList from '../components/ProductList';
import Pagination from '@material-ui/lab/Pagination';
import './styles.scss'

ListPages.propTypes = {
    
};
const useStyles = makeStyles((theme) => ({
    left : {
        width: '250px',
    },
    right: {
        flex: '1 1 0'
    }
}));
function ListPages(props) {
    const classes = useStyles();
    const [productList, setProductList] = useState([]);
    const [loading , setLoading] = useState(true);
    const [pagination , setPagination] = useState({
        total: 8,
        limit: 8,
        page: 1
    })
    const [filter , setFilter ] = useState({
        _page: 1 ,
        _limit: 8
    })

    useEffect(() => {
        (async () => {
            try {
                const { data , pagination } = await productApi.getAll(filter);
                setProductList(data);
                setPagination(pagination)
            } catch (error) {
                console.log(error.message);
            }
            setLoading(false);
        })();
    },[filter])

    const handleChangePage = (value , page) => {
        setFilter(previosFilter => ({
            ...previosFilter,
            _page: page
        }));
    }
    return (
       <Box>
           <Container>
               <Grid container spacing={1} >
                   <Grid item className={classes.left} >
                        <Paper elevation={3}> Lef </Paper>
                   </Grid>

                   <Grid item className={classes.right} >
                        <Paper elevation={3}>
                            { loading ? <SkeletonProduct/> : <ProductList data={productList} /> } 
                            
                            <Pagination onChange={handleChangePage} color="primary" 
                            count={Math.ceil(pagination.total / pagination.limit )} 
                            page={pagination.page} 
                            >
                            </Pagination>
                        </Paper>
                   </Grid>
               </Grid>
           </Container>
       </Box>
    );
}

export default ListPages;