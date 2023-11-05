import React from 'react';
import {Formik,Form} from 'formik';
import TextField from './TextField';
import * as Yup from 'yup' ;


const Signup = () => {
    const validate= Yup.object({
        firstName: Yup.string()
        .max(15,'Must be 15 characters or less')
        .required('Required'),
        lastName: Yup.string()
        .max(15,'Must be 20 characters or less')
        .required('Required'),
        email: Yup.string()
        .email('Email is invalid')
        .required('Email is Required'),
        password: Yup.string()
        .min(6,'Password must be at least 6 characters')
        .required('Password is Required'),
        confirmpassword: Yup.string()
        .oneOf([Yup.ref('password'),null],'Password must matches the password')
        .required('Confirm password is Required'),
    })
  return (
    <Formik
        initialValues={{
            firstName: '',
            lastName: '',
            email:'',
            password:'',
            confirmPassword:''
  }}
        validationSchema={validate} //validation Schema is fixed
        onSubmit={values=>{
            console.log(values)
        }}
    >
        { formik =>(
            <div>
                <h1 className='my-4 font-weight-bold.display-4'>Signup</h1>
                <Form>
                    <TextField label="firstName" name="firstName" type='text'></TextField>
                    <TextField label="lastName" name="lastName" type='text'></TextField>
                    <TextField label="Email" name="Email" type='email'></TextField>
                    <TextField label="passowrd" name="passoword" type='password'></TextField>
                    <TextField label="confirmpassword" name="confirmpassword" type='password'></TextField>
                    <button className='btn btn-dark mt-3 mx-3' type='submit'>Register</button>
                    <button className='btn btn-danger mt-3 mx-3' type='submit'>Reset</button>
                </Form>
            </div>
)}
    </Formik>
  )
}
export default Signup;