import React, { useEffect, useRef, useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import { photoRadius } from '../components/d3/helpers'
import ArcPath from '../components/ArcPath'
import personalToAchievementsArcs from '../helpers/arcs/personalToAchievementsArcs'
import skillsToWorkExperienceArcs from '../helpers/arcs/skillsToWorkExperienceArcs'
import languagesToContactsArcs from '../helpers/arcs/languagesToContactsArcs'
import SEO from '../components/SEO/SEO'
import Logo from '../images/logo.inline.svg'
import { defaultData, viewBoxHeight, viewBoxWidth } from '../helpers/viewBox'
import styled from 'styled-components'
import { animationTime } from '../helpers/animation'
import MainLayout from '../components/MainLayout'
import { getViewBoxSize } from '../../src/helpers/viewBox'

const LogoUi = styled(Logo)`
  opacity: 0;
  animation: IconUi ${animationTime}ms forwards;
  animation-delay: ${animationTime * 5}ms;
  @keyframes IconUi {
    100% {
      opacity: 1;
    }
  }
`
const IndexPage = () => {
  const viewBox = defaultData
  return (
    <MainLayout>
      <SEO />
        <svg
          preserveAspectRatio="xMidYMid"
          viewBox={viewBox}
          style={{maxHeight: '100vh', maxWidth: '100vw'}}
          // width={getViewBoxSize()} height={getViewBoxSize()}
          fill={'#211f1d'}
          x={0}
          y={0}
          xmlns="http://www.w3.org/2000/svg"
        >
          <LogoUi
            x={viewBoxWidth / 2 - photoRadius}
            y={viewBoxHeight / 2 - photoRadius}
          />
          {/*TODO: заменить строки на пропсы объекта*/}
          <ArcPath prefix={'personalToAchievementsArcs'} />
          <ArcPath prefix={'skillsToWorkExperienceArcs'} />
          <ArcPath prefix={'languagesToContactsArcs'} />
        </svg>

    </MainLayout>
  )
}

export default IndexPage
