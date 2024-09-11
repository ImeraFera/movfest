import React, { useEffect, useRef, useState } from 'react'
import Grid from '@mui/material/Grid2'
import { Formik, Form, ErrorMessage, useFormik } from 'formik';
import { Box, Button, CircularProgress, TextField, Typography, Alert, FormHelperText, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import { notify } from '../utils/toastMessage';
import { useDispatch, useSelector } from 'react-redux';
import { profileSchema } from '../validations/profileSchema';
import { getUserData, selectUserData } from '../redux/slices/userSlice';
import { setIsLoading } from '../redux/slices/appSlice';

// import { selectUserData, } from '../redux/slices/userSlice';

function Profile() {
    const dispatch = useDispatch();
    const [avatar, setAvatar] = useState(null);
    const isLoading = useSelector(({ app }) => app.isLoading)
    const fileInputRef = useRef(null);

    const handleAvatarClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const userData = useSelector(selectUserData)
    const userToken = useSelector((state) => state.auth.userToken)


    useEffect(() => {
        const fetchUserData = async (token) => {
            dispatch(setIsLoading(true));
            try {
                dispatch(getUserData(token))
            } catch (error) {
                console.log(error);
            } finally {
                dispatch(setIsLoading(false));
            }
        };
        fetchUserData(userToken);
    }, [dispatch, userToken]);


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setAvatar(reader.result);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (values) => {
        console.log(values)
    }


    const formik = {
        initialValues: {
            email: '',
            newPassword: '',
            username: ''
        },
        onSubmit: handleSubmit,
    }

    return (
        <>
            <Grid container p={5} spacing={2} >

                <Grid size={12} mt={0} mb={0} bgcolor={'#303030'} display={'flex'} p={2} flexDirection={'column'}>
                    <Box display={'flex'} justifyContent={'center'}  >
                        <Typography variant='h4' textAlign={'center'}>Profil Ayarları</Typography>
                    </Box>
                </Grid>

                <Grid size={12} mt={0} mb={0} bgcolor={'#303030'} p={5} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} >
                    {isLoading ? (<CircularProgress color="primary" />
                    ) : (
                        <Formik
                            initialValues={{
                                email: userData.email || '',
                                username: '',
                                newPassword: '',
                            }}
                            onSubmit={formik.onSubmit}
                            enableReinitialize
                            validationSchema={profileSchema}
                        >

                            {({ handleChange, handleBlur, values, errors, touched, }) => (
                                <Form >
                                    <Box justifyContent={'center'} alignItems={'center'} display={'flex'}
                                        sx={{ width: '10em', height: '10em' }}
                                        mb={2}>
                                        <Avatar
                                            variant='circular'
                                            sx={{
                                                cursor: 'pointer', width: '100%', height: '100%',
                                            }}
                                            onClick={handleAvatarClick}
                                            src={avatar}
                                        />
                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            style={{ display: 'none' }}
                                            onChange={handleFileChange}

                                        />
                                    </Box>

                                    <Box display={'flex'} mb={2}>
                                        <TextField
                                            type='email'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            slotProps={{
                                                input: {
                                                    readOnly: true,
                                                }
                                            }}
                                            value={values.email}
                                            fullWidth
                                            variant='standard'
                                            label='E-mail'
                                            name="email"
                                            id="email"
                                        // error={touched.email && Boolean(errors.email)}
                                        // helperText={touched.email && errors.email}
                                        />
                                    </Box>
                                    <Box display={'flex'} mb={2}>
                                        <TextField
                                            type='text'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            fullWidth
                                            variant='standard'
                                            value={values.username}
                                            label='Kullanıcı Adı'
                                            name="username"
                                            id="username"
                                            error={touched.username && Boolean(errors.username)}
                                            helperText={touched.username && errors.username}
                                        />
                                    </Box>
                                    <Box display={'flex'} mb={2}>
                                        <TextField
                                            type='password'
                                            onChange={handleChange}
                                            value={values.newPassword}
                                            onBlur={handleBlur}
                                            autoComplete='off'
                                            fullWidth
                                            variant='standard'
                                            label='Yeni Şifre'
                                            name="newPassword"
                                            id='newPpassword'
                                            error={touched.password && Boolean(errors.password)}
                                            helperText={touched.password && errors.password}
                                        />
                                    </Box>
                                    <Box display={'flex'} mt={3}>
                                        <Button fullWidth
                                            type='submit'
                                            disabled={isLoading}
                                            variant='outlined'>
                                            {(isLoading) ? <CircularProgress color='primary' size={'2em'} /> : 'Kaydet'}
                                        </Button>
                                    </Box>
                                </Form>
                            )}
                        </Formik>

                    )}


                </Grid>

            </Grid >
        </>

    )
}

export default Profile