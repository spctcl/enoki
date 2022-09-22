import styled from 'styled-components'

export const FlowCardTitle = styled.p`
color: white;
font-size: 25px;
font-family: Arial;
margin: 8px 0;
display: flex;
align-items: center;
`

export const FlowCardListGroup = styled.div`
  margin-top: 12px;
  text-align: center;
`

export const FlowCardListLabel = styled.p`
  font-size: 18px;
  text-align: left;
  text-transform: uppercase;
`

export const FlowCardList = styled.input`
  width: 100%;
  min-height: 80px;
  background-color: #D9D9D9;
  border: unset;
  border-radius: 6px;
`
export const FlowCardBalance = styled(FlowCardList)`
  min-height: 40px;
`
export const FlowCardButton = styled.button`
  width: 180px;
  height: 44px;
  color: inherit;
  border: unset;
  border-radius: 8px;
  margin: 12px auto 0;
  text-transform: uppercase;
  background-color: #4ECB71;
`
export const FlowCardTippyContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 8px;
`

export const FlowCardStatus = styled.div`
  height: 25px;
  border-radius: 12px;
  padding: 4px 8px;
  text-transform: uppercase;
  color: #4ECB71;
  font-size: 12px;
  width: fit-content;
  border: 1px solid white;
  display: inline;
  margin-left: 12px;
`
