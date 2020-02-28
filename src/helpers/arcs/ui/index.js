import styled from 'styled-components'

export const TextUi = styled.text`
  font-family: 'Nunito Regular';
  font-size: 14px;
  text-transform: uppercase;
  fill: #7b797a;
  alignment-baseline: central;
`
export const DescriptionTable = styled.div`
          display: flex;
          flex-direction: column;
          margin: 3px 0;
        `
export const DescriptionTableRow = styled.div`
          display: flex;
          flex-direction: row;
          padding: 3px 0;
        `
export const DescriptionTableCol = styled.div`
          padding: 3px;
          justify-content: center;
          display: flex;
          flex-direction: column;

          font-family: 'Nunito Regular';
          font-size: 14px;
          text-transform: uppercase;

          line-height: 1;
          ${props => {
  return props.isBold
    ? `
              font-weight: bold;
              color: white;
            `
    : `color: #7b797a;`
}}
        `
export const ForeignObject = styled.foreignObject`
          overflow: unset;
          margin-left: -100px;
        `