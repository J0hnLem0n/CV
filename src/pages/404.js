import React from 'react'
import styled from 'styled-components'
import MainLayout from '../components/MainLayout'
import Logo from '../images/logo_bad.inline.svg'

// TODO: проверить 2 раза обновляется
const NotFoundPageUi = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
`
const ErrorCardUi = styled.div`
  background-color: orange;
  width: 600px;
  height: 300px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`

const NotFoundPage = () => {
  return (
    <MainLayout>
      <NotFoundPageUi>
        <ErrorCardUi>
          <h1>404</h1>
          <h2>Страница не найдена</h2>
          <Logo />
        </ErrorCardUi>
      </NotFoundPageUi>
    </MainLayout>
  )
}

export default NotFoundPage