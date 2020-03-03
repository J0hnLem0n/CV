import React from "react"
import { createGlobalStyle } from 'styled-components'
import NunitoRegular from '../../fonts/Nunito/Nunito-Regular.ttf'
import NunitoLihht from '../../fonts/Nunito/Nunito-Light.ttf'
const GlobalStyle = createGlobalStyle`
  body {
    width: 100vw;
    height: 100vh;
    background-color: #211f1d;
    font-family: Nunito Regular;
  }
  @font-face {
    font-family: 'Nunito Regular';
    src: url(${NunitoRegular});  
  }
    @font-face {
    font-family: 'Nunito Light';
    src: url(${NunitoLihht});  
  }
`

const MainLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <main>{children}</main>
    </>
  )
}

export default MainLayout
