import { useState } from 'react'
import './App.css'
import PageContainer from './components/containers/PageContainer'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { theme } from './styles/AppStyle';
import { ThemeProvider } from '@mui/material'
import MainRoutes from './routes/MainRoutes'
function App() {

  return (
    <>

      <ThemeProvider theme={theme}>
        <Navbar />

        <PageContainer >
          <MainRoutes></MainRoutes>
        </PageContainer>

        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
