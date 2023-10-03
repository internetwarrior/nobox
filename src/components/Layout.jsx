import React from 'react'
import Header from './Header'
import MainButton from './MainButton'
import { Route, Routes } from 'react-router-dom'
import Main from '../pages/Main'
import Detail from '../pages/Detail'
import { Create, Language } from '@mui/icons-material'
import { Logo } from '../pages/lang/Logo'
import ErrorPage from '../pages/lang/ErrorPage'

export const Layout = () => {
  return (
    <>
        <Header />
      {/* <Sidebar /> */}
      <MainButton />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/create" element={<Create />} />
        <Route path="/language" element={<Language />} />
        <Route path="/logoPage" element={<Logo />} />
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </>
  )
}
