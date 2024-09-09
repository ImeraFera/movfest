import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2'
import { Formik, Form, ErrorMessage } from 'formik';
import { Box, Button, CircularProgress, TextField, Typography, Alert, FormHelperText } from '@mui/material';
import userService from '../services/userService';
import { useNavigate } from 'react-router-dom'
import { notify } from '../utils/toastMessage';
import { registerSchema } from '../validations/registerSchema';

function Register() {

    const navigation = useNavigate()
    const [loading, setloading] = useState(false);

    const handleSubmit = async (values) => {
        const userData = {
            email: values.email
        }
        setloading(true);
        const alreadyExist = await userService.register(userData);
        setloading(false);

        // ! alreadyExist false ise kullanıcı kayıt olabilir demek
        if (alreadyExist) {
            notify('Bu e-mail zaten kayıtlı! ', 'error')
        } else {
            notify('Başarıyla kayıt oldunuz!', 'success')
            return navigation('/');
        }
    }

    const formik = {
        initialValues: {
            username: '',
            email: '',
            password: '',
            repeatPassword: '',
        },
        onSubmit: handleSubmit,

    }

    return (
        <>
            <Grid container p={5} >

                <Grid size={12} bgcolor={'#303030'} display={'flex'} p={2} flexDirection={'column'}>
                    <Box display={'flex'} justifyContent={'center'}  >
                        <Typography variant='h4'>Kayıt Ol</Typography>
                    </Box>
                </Grid>

                <Grid size={12} bgcolor={'#303030'} p={5} display={'flex'} flexDirection={'column'} alignItems={'center'} >
                    <Formik
                        initialValues={formik.initialValues}
                        onSubmit={formik.onSubmit}
                        validationSchema={registerSchema}
                    >
                        {({ handleChange, handleBlur, values, errors, touched }) => (
                            <Form>
                                <Box display={'flex'} mb={2}>
                                    <TextField
                                        type='text'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.username}
                                        fullWidth
                                        variant='standard'
                                        label='Kullanıcı Adı'
                                        name="username"
                                        id="username"
                                        error={touched.username && Boolean(errors.username)}
                                        helperText={touched.username && errors.username}
                                    />
                                    <Typography variant='body2'>{ErrorMessage}</Typography>
                                </Box>
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
                                <Box display={'flex'} mb={2}>
                                    <TextField
                                        type='password'
                                        onChange={handleChange}
                                        value={values.repeatPassword}
                                        onBlur={handleBlur}
                                        fullWidth
                                        variant='standard'
                                        label='Şifre Tekrar'
                                        name="repeatPassword"
                                        id="repeatPassword"
                                        error={touched.repeatPassword && Boolean(errors.repeatPassword)}
                                        helperText={touched.repeatPassword && errors.repeatPassword}
                                    />
                                </Box>
                                <Box display={'flex'} mt={3}>
                                    <Button fullWidth
                                        type='submit'
                                        disabled={loading}
                                        variant='outlined'>
                                        {(loading) ? <CircularProgress color='primary' size={'2em'} /> : 'Kayıt Ol'}
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

export default Register