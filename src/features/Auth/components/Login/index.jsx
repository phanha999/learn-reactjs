import { unwrapResult } from '@reduxjs/toolkit';
import { login } from 'features/Auth/userSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import LoginForm from '../LoginForm';

Login.propTypes = {
    handleOnClose: PropTypes.func,
};

function Login({handleOnClose}) {
    const dispatch = useDispatch();
    const { enqueueSnackbar }  = useSnackbar()

    const handleSubmit = async (values) => {
        try {           
            const action = login(values);
            const resultAction = await dispatch(action);
            unwrapResult(resultAction);

            if(handleOnClose) {
                handleOnClose();
            }
        } catch (error) {
            console.log('error', error );
            // enqueueSnackbar(error.message , { variant: 'error'});
            enqueueSnackbar('Error!!!!!! Email or Password is invalid',{ variant: 'error'});
        }
    };
    
    return (
        <div>
            <LoginForm onSubmit={handleSubmit}/>
        </div>
    );
}

export default Login;