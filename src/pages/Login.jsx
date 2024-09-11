import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2'
import { Formik, Form, ErrorMessage } from 'formik';
import { Box, Button, CircularProgress, TextField, Typography, Alert, FormHelperText } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import { notify } from '../utils/toastMessage';
import { loginSchema } from '../validations/loginSchema';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading } from '../redux/slices/appSlice';
import { login } from '../redux/slices/authSlice';

// import { login, } from '../redux/slices/authSlice';

function Login() {

    const navigation = useNavigate()
    const isLoading = useSelector((state) => state.app.isLoading)
    const dispatch = useDispatch();
    const handleSubmit = async (values) => {
        dispatch(setIsLoading(true));
        try {

            dispatch(login(values))
            notify('Giriş Başarılı!', 'success',)
            return navigation('/')

        } catch (error) {
            console.log(error)
            notify('E-mail veya şifre yanlış!', 'error')
        }
        finally {
            dispatch(setIsLoading(false));
        }

    }

    const formik = {
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: handleSubmit,
    }

    return (
        <>
            <Grid container p={5} >

                <Grid size={12} bgcolor={'#303030'} display={'flex'} p={2} flexDirection={'column'}>
                    <Box display={'flex'} justifyContent={'center'}  >
                        <Typography variant='h4'>Giriş Yap</Typography>
                    </Box>
                </Grid>

                <Grid size={12} bgcolor={'#303030'} p={5} display={'flex'} flexDirection={'column'} alignItems={'center'} >
                    <Formik
                        initialValues={formik.initialValues}
                        onSubmit={formik.onSubmit}
                        validationSchema={loginSchema}
                    >

                        {({ handleChange, handleBlur, values, errors, touched }) => (
                            <Form>

                                <Box display={'flex'} mb={2}>
                                    <TextField
                                        type='email'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        fullWidth
                                        variant='standard'
                                        label='E-mail'
                                        name="email"
                                        id="email"
                                        error={touched.email && Boolean(errors.email)}
                                        helperText={touched.email && errors.email}
                                    />
                                </Box>
                                <Box display={'flex'} mb={2}>
                                    <TextField
                                        type='password'
                                        onChange={handleChange}
                                        value={values.password}
                                        onBlur={handleBlur}
                                        fullWidth
                                        variant='standard'
                                        label='Şifre'
                                        name="password"
                                        id='password'
                                        error={touched.password && Boolean(errors.password)}
                                        helperText={touched.password && errors.password}
                                    />
                                </Box>

                                <Box display={'flex'} mt={3}>
                                    <Button fullWidth
                                        type='submit'
                                        disabled={isLoading}
                                        variant='outlined'>
                                        {(isLoading) ? <CircularProgress color='primary' size={'2em'} /> : 'Giriş Yap'}
                                    </Button>
                                </Box>
                            </Form>
                        )}
                    </Formik>

                </Grid>

            </Grid>
        </>

    )
}

export default Login