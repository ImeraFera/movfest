import { useState } from 'react'
import './App.css'
import PageContainer from './components/containers/PageContainer'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { theme } from './styles/AppStyle';
import { ThemeProvider } from '@mui/material'
import MainRoutes from './routes/MainRoutes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <ToastContainer />

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
