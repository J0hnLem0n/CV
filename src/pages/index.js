import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"
import * as d3 from "d3"
import Achievements from "./index/components/achievements/achievements"
import {
  photoRadius,
  skillsInnerRadius,
  skillsOuterRadius,
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
  const [viewBox, setViewBox] = useState([0,0,0,0])
  useEffect(() => {
    setViewBox([
      window.innerWidth / -2,
      window.innerHeight / -2,
      window.innerWidth,
      window.innerHeight,
    ])
  }, [])
  return (
    <>
      <SEO />
      <GlobalStyle />
        <svg
          viewBox={viewBox}
          fill={"#211f1d"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <Harya x={-photoRadius} y={-photoRadius}/>
          {/*TODO: заменить строки на пропсы объекта*/}
          <ArcPath prefix={'personalToAchievementsArcs'}/>
          <ArcPath prefix={'skillsToWorkExperienceArcs'}/>
          <ArcPath prefix={'languagesToContactsArcs'}/>
        </svg>
    </>
  )
}

export default IndexPage
