import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import InputField from 'components/FormControl/InputField';
import { Avatar, Button, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PasswordField from 'components/FormControl/PasswordField';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        paddingTop: theme.spacing(2),
    },
    load: {
        position: 'absolute',
        top: theme.spacing(1),
        left: 0,
        right: 0,
    },
    avatar: {
        margin: "auto", 
        backgroundColor: theme.palette.secondary.main,          
    },
    title: {
        textAlign: 'center',
        margin: theme.spacing(2, 0, 2, 0),
    },
    submit: {
        margin: theme.spacing(2, 0, 1, 0)
    }

}));

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

function LoginForm({onSubmit}) {
    const classes = useStyles();

    const schema = yup.object().shape({ 
        identifier: yup.string()
        .required('Please enter your Email')
        .email('Your email is invalid'),
        password: yup.string()
        .required('Please enter your Password')
        .min(6, 'Your need to enter a minimum of 6 characters '),
    });
    const form = useForm({
        defaultValues: {
            identifier: '',
            password: '',
            //...
        },
        resolver: yupResolver(schema),
    })

    const handleSubmit = async (value) => {
        if(onSubmit) { 
           await onSubmit(value);
        }
    }

    const { isSubmitting } = form.formState;
    return (
        <div className={classes.root} >
            { isSubmitting && <LinearProgress fullWidth className={classes.load}/>} 
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography className={classes.title} component="h1" variant="h5">
                Sign in
            </Typography>

            
            <form onSubmit={form.handleSubmit(handleSubmit)}>              
                <InputField name='identifier' label='Email' form={form} />
                <PasswordField name='password' label='Password' form={form} />

                <Button type="submit" className={classes.submit} color="primary" variant="contained" fullWidth size='large'>
                    Sign in
                </Button>
            </form>
        </div>

        
    );
}
export default LoginForm;