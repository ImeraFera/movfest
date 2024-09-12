import React from 'react'
import { Container } from '@mui/material/'
function PageContainer({ children }) {
    return (
        <Container maxWidth={'xl'} sx={{ marginTop: 4, justifyContent: 'center', }}>
            {children}
        </Container >
    )
}

export default PageContainer;