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
import drawAchievementsToGroup from "../components/d3/helpers/drawAchievementsToGroup"
import drawSkillsToWorkExperience from "../components/d3/helpers/drawSkillsToWorkExperience"
import NunitoRegular from "../fonts/Nunito/Nunito-Regular.ttf"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/SEO/SEO"
const IndexPageUi = styled.div`
  display: grid;
  background-color: #211f1d;
  overflow: hidden;
`
const GlobalStyle = createGlobalStyle`
  body {
    width: 100vw;
    height: 100vh;
  }
  @font-face {
    font-family: 'Nunito Regular';
    src: url(${NunitoRegular});  
  }
`
const personalToAchievementsArcs = [
  {
    text: {
      value: "Personal Information",
      getXPos: (xEndLinePos, textEl) =>
        xEndLinePos - textEl.node().textLength.baseVal.value / 2,
      getYPos: yEndLinePos => yEndLinePos - 100,
    },
    startAngle: 0 * (Math.PI / 180),
    endAngle: 30 * (Math.PI / 180),
    arcData: d3
      .arc()
      .innerRadius(skillsInnerRadius)
      .outerRadius(skillsOuterRadius),
    startPointLineData: (x, y) => [
      [x, y],
      [x, y - 200],
    ],
  },
  {
    //TODO: избавиться от endText, endPoint
    text: {
      value: "Hobbies",
    },
    iconUrl: "./img/thumbs-up.svg",
    endIconUrl: "./img/award.svg",
    endText: { value: "Achievements" },
    startAngle: 30 * (Math.PI / 180),
    endAngle: 70 * (Math.PI / 180),
    arcData: d3
      .arc()
      .innerRadius(skillsInnerRadius)
      .outerRadius(skillsOuterRadius),
    startPointLineData: (x, y) => [
      [x + 70, y - 100],
      [x + 300, y - 100],
    ],
    endPointLineData: (x, y) => [
      [x + 150, y - 30],
      [x + 300, y - 30],
    ],
  },
]
const skillsToWorkExperienceArcs = [
  {
    startAngle: 135 * (Math.PI / 180),
    endAngle: 180 * (Math.PI / 180),
    arcData: d3
      .arc()
      .innerRadius(skillsInnerRadius)
      .outerRadius(skillsOuterRadius),
    startPointLineData: (x, y) => [
      [x + 100, y + 100],
      [x + 200, y + 100],
    ],
  },
  {
    startAngle: 180 * (Math.PI / 180),
    endAngle: 205 * (Math.PI / 180),
    arcData: d3
      .arc()
      .innerRadius(skillsInnerRadius)
      .outerRadius(skillsOuterRadius),
    startPointLineData: (x, y) => [
      [x, y + 150],
      [x + 100, y + 150],
    ],
    endPointLineData: (x, y) => [
      [x - 50, y + 150],
      [x - 200, y + 150],
    ],
  },
]
const languagesToContactsArcs = [
  {
    startAngle: 250 * (Math.PI / 180),
    endAngle: 320 * (Math.PI / 180),
    arcData: d3
      .arc()
      .innerRadius(skillsInnerRadius)
      .outerRadius(skillsOuterRadius),
    startPointLineData: (x, y) => [
      [x - 100, y + 20],
      [x - 200, y + 20],
    ],
    endPointLineData: (x, y) => [
      [x - 90, y - 200],
      [x - 200, y - 200],
    ],
  },
]
const IndexPage = () => {
  const pageRef = useRef()
  const skillsRef = useRef()
  const [transform, setTransform] = useState()
  useEffect(() => {
    const width = document.body.clientWidth
    const height = document.body.clientHeight
    const transformRounds = `translate(${width / 2}, ${height / 2})`

    setTransform(transformRounds)
    if (pageRef.current && transform) {
      const swgContainer = d3
        .select(pageRef.current)
        .append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`)
      swgContainer
        .append("circle")
        .attr("r", photoRadius)
        .attr("fill", "#fbaa1b")
        .attr("transform", transformRounds)
      drawSkillsToWorkExperience(
        skillsToWorkExperienceArcs,
        swgContainer,
        transformRounds
      )
      drawSkillsToWorkExperience(
        personalToAchievementsArcs,
        swgContainer,
        transformRounds
      )
      drawSkillsToWorkExperience(
        languagesToContactsArcs,
        swgContainer,
        transformRounds
      )
    }
  }, [pageRef.current])
  return (
    <>
      <GlobalStyle />
      <IndexPageUi ref={pageRef} />
      <Achievements transform={transform} />
    </>
  )
}

export default IndexPage
