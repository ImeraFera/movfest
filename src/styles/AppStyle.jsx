import React from 'react';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#97156C',
            contrastText: '#fff',
        },
    },
    components: {
        // MuiFormHelperText: {
        //     styleOverrides: {
        //         root: {
        //             color: 'red',
        //         },
        //     },
        // },
        MuiAlert: {
            styleOverrides: {
                root: {
                    backgroundColor: 'green',
                    color: 'white',

                },
                icon: {
                    color: 'white',
                }
            },
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    color: '#97156C',
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiInputBase-input': {
                        color: 'white',
                    },
                    '& .MuiInputLabel-root': {
                        color: 'white',
                        '&.Mui-focused': {
                            color: '#97156C',
                        },
                    },
                    '& .MuiInput-underline:before': {
                        borderBottomColor: '#97156C',
                    },
                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                        borderBottomColor: '#97156C',
                    },
                    '& .MuiInput-underline:after': {
                        borderBottomColor: '#97156C',
                    }
                },


            },

        },
        MuiPaginationItem: {
            styleOverrides: {
                root: {
                    color: 'white',
                },

            },
        },
        MuiGrid2: {
            styleOverrides: {
                root: {
                    // backgroundColor: '#3030307c',
                    borderRadius: '1em',
                    marginTop: '1em',
                    marginBottom: '1em',
                },
            },
        },
        MuiButton: {
            variants: [
                {
                    props: { variant: 'contained' },
                    style: {
                        borderRadius: '20px',
                        backgroundColor: 'transparent',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#AB1779',
                            borderColor: '#ff5733',
                            color: '#fff',
                        },
                    },
                },
                {
                    props: { variant: 'outlined' },
                    style: {
                        borderRadius: '20px',
                        borderWidth: '2px',
                        backgroundColor: 'transparent',
                        color: '#8A165E',
                        '&:hover': {
                            backgroundColor: '#8A165E',
                            color: 'white',
                        },
                    },
                },
            ],
            defaultProps: {
                variant: 'contained',
            },
        },
    },
});
