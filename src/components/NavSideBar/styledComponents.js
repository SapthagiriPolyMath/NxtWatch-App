import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideNavBar = styled.div`
  display: none;
  flex-direction: column;
  padding: 0px;
  width: 20%;
  height: 100vh;
  margin: 0px;
  justify-content: space-between;
  align-items: space-between;
  font-family: 'Roboto';
  background-color: ${props => (props.theme === true ? '#424242' : 'f4f4f4')};
  box-shadow: inset 2px 2px 15px -2px rgba(0, 0, 0, 0.5);
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

export const NavTabsList = styled.ul`
  list-type: none;
  display: flex;
  flex-direction: column;
  align-item: space-between;
  background-color: transparent;
  padding: 0px;
  margin: 0px;
`

export const NavItem = styled.li`
  margin: 0px;
  padding: 0px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${props => {
    if (props.isActive === true) {
      if (props.theme === true) {
        return '#606060'
      }
      return '#d7dfe9'
    }
    return 'transparent'
  }};
`

export const NavTabLink = styled(Link)`
  text-decoration: none;
  background-color: transparent;
  padding: 6px 14px; 
  margin: 0px;
  display: flex;
  gap: 14px;
  align-items: center;
  font-family: 'Roboto';
  width: 100%;
`

export const NavTabIcon = styled.p`
  color: ${props => {
    if (props.isActive) {
      return '#ff0000'
    }
    return '#909090'
  }};
  font-size: 18px;
  padding: 0px;
  padding-top: 4px;
  margin: 0px;
`

export const NavTabName = styled.p`
  color: ${props => (props.theme === true ? '#ebebeb' : '#231f20')};
  font-size: 14px;
  font-weight: ${props => (props.isActive === true ? 'bold' : 'normal')};
  padding: 0px;
  margin: 0px;
`
export const ContactCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 18px;
  background-color: transparent;
  font-family: 'Roboto';
  text-align: left;
`
export const ContactTitle = styled.p`
  font-size: 18px;
  color: ${props => (props.theme === true ? '#ebebeb' : '#231f20')};
  margin-bottom: 20px;
  font-weight: bold;
`

export const LogoCard = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;
  margin: 0px;
  margin-bottom: 24px;
  gap: 20px;
`

export const LogoImg = styled.img`
  border-radius: 50%;
  width: 30px;
  height: auto;
  padding: 0px;
  margin: 0px;
`

export const ContactText = styled.p`
  font-size: 16px;
  color: ${props => (props.theme === true ? '#ebebeb' : '#231f20')};
  font-weight: 800px;
  margin: 0px;
  padding: 0px;
  margin-bottom: 18px;
`
