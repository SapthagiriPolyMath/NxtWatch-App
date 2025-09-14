import styled from 'styled-components'

export const NotFoundSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: none;
  margin: 0px;
  padding: 0px;
`

export const SubSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: none;
  margin: 0px;
  padding: 0px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const NotFoundBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100vh;
  overflow: auto;
  box-shadow: inset 0px 2px 15px -2px rgba(0, 0, 0, 0.5);
  background-color: ${props => (props.theme === true ? '#000000' : '#ffffff')};
`

export const NotFoundImg = styled.img`
  width: 90%;
  margin-bottom: 30px;
  margin-top: 20%;
  @media screen and (min-width: 768px) {
    width: 50%;
    margin-top: 0px;
  }
`

export const NotFoundTitle = styled.h1`
  color: ${props => (props.theme === true ? '#ffffff' : '#212121')};
  margin: 0px;
  text-align: center;
`

export const NotFoundText = styled.p`
  color: ${props => (props.theme ? '#475569' : '#64748b')};
  text-align: center;
  margin-bottom: 30px;
`
