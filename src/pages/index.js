import React, { useEffect, useRef, useState } from "react"
import { createGlobalStyle } from "styled-components"
import {
  photoRadius
} from "../components/d3/helpers"
import ArcPath from "../components/ArcPath"
import personalToAchievementsArcs from "../helpers/arcs/personalToAchievementsArcs"
import skillsToWorkExperienceArcs from "../helpers/arcs/skillsToWorkExperienceArcs"
import languagesToContactsArcs from "../helpers/arcs/languagesToContactsArcs"

import NunitoRegular from "../fonts/Nunito/Nunito-Regular.ttf"
import NunitoLihht from "../fonts/Nunito/Nunito-Light.ttf"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/SEO/SEO"
import Harya from '../images/harya.inline.svg'
import {defaultData} from '../helpers/viewBox'

const GlobalStyle = createGlobalStyle`
  body {
    width: 100vw;
    height: 100vh;
    background-color: #211f1d
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
const IndexPage = () => {
  const viewBox = defaultData;

  return (
    <>
      <SEO />
      <GlobalStyle />
        <svg
          viewBox={viewBox}
          width={'100vw'}
          height={'100vh'}
          fill={"#211f1d"}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/*<Harya x={-photoRadius} y={-photoRadius}/>*/}
          {/*TODO: заменить строки на пропсы объекта*/}
          <ArcPath prefix={'personalToAchievementsArcs'}/>
          <ArcPath prefix={'skillsToWorkExperienceArcs'}/>
          <ArcPath prefix={'languagesToContactsArcs'}/>
        </svg>
    </>
  )
}

export default IndexPage
