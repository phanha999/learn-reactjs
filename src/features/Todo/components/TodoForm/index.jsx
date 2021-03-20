import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/FormControl/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function TodoForm({onSubmit}) {
    const schema = yup.object().shape({
        name: yup.string()
            .required('Error!!!!')
            .min(5 ,'Toi thieu 5 ki tu'),
            //...

      });
    const form = useForm({
        defaultValues: {
            name: '',
            //...
        },
        resolver: yupResolver(schema),
    })

    const handleSubmit = (value) => {
        if(onSubmit) { 
            onSubmit(value);
        }
        form.reset();
    }
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name='name' label='Todo' form={form} />
        </form>
    );
}
export default TodoForm;