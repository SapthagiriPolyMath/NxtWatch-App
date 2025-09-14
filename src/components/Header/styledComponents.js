import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavHeader = styled.nav`
  display: flex;
  justify-content: center;
  font-family: "Roboto";
  width: 100%;
  flex-shrink: 0;
  background-color: ${props => (props.theme === true ? '#424242' : '#f4f4f4')};
`

export const WebsiteLogo = styled.img`
  width: 110px;

  @media screen and (min-width: 768px) {
    width: 165px;
  }
`

export const NavBarLargeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1200px;
  padding: 16px 0;
`

export const NavItemsList = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
`

export const NavItem = styled.li`
  margin: 0px 12px;
  font-size: 16px;
  position: relative;
  padding: 0px;
`

export const NavItemDesktop = styled.li`
  margin: 0px 12px;
  font-size: 16px;
  position: relative;
  padding: 0px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const NavItemMobile = styled.li`
  margin: 0px 12px;
  font-size: 16px;
  position: relative;
  padding: 0px;
  background-color: ${props =>
    props.dropDownStatus === true ? '#909090' : 'transparent'};

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ThemeIconBtn = styled.button`
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 0px;
  background-color: transparent;
`

export const DropdownBtn = styled.button`
  padding: 0px;
  margin: 0px;
  border: none;
  font-size: 24px; 
  color: #0f0f0f;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => (props.theme === true ? '#f1f1f1' : 'f8fafc')};
`

export const NavMobileBtn = styled.button`
  border: none;
  padding: 0px;
  background: transparent;
  cursor: pointer;
  outline: none;
  font-size: 24px;
  color: ${props => (props.theme === true ? '#f1f1f1' : 'f8fafc')};
  background-color: transparent;
   
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #475569;
`

export const LogoutDesktopBtn = styled.button`
  font-size: 14px;
  padding: 8px 16px;
  color: #3b83f6;
  background: none;
  border: 2px solid #3b82f6;
  border-radius: 4px;
  cursor: pointer;
  outline: none;

  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const DropdownMenu = styled.div`
  position: fixed; /* Keeps it attached to the viewport */
  top: 50px; /* Adjust based on your header height */
  right: 0; /* Aligns it to the right side of the page */
  background: white;
  border: 1px solid #616e7c;
  border-radius: 6px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  background-color: ${props => (props.theme === true ? '#424242' : 'f4f4f4')};
`

export const DropdownItem = styled.li`
  border: none;
  cursor: pointer;
  text-align: left;
  background-color: ${props => {
    if (props.isActive === true) {
      if (props.theme === true) {
        return '#606060'
      }
      return '#d7dfe9'
    }
    return 'transparent'
  }};

  width: 100%;
  padding: 6px 0px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const TabLink = styled(Link)`
  text-decoration: none;
  background-color: transparent;
  padding: 0px 8px; 
  display: flex;
  gap: 8px;
  align-items: center;
  font-family: 'Roboto';
`

export const TabIcon = styled.p`
  color: ${props => {
    if (props.isActive) {
      return '#ff0000'
    }
    return '#909090'
  }};
  font-size: 18px;
  padding: 0px;
  margin: 0px;
`

export const TabName = styled.p`
  color: ${props => (props.theme === true ? '#ebebeb' : '#231f20')};
  font-size: 14px;
  font-weight: ${props => (props.isActive === true ? 'bold' : 'normal')};
  padding: 0px;
  margin: 0px;
`

export const LogoutPopupCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  padding: 10px 20px 20px 20px;
  border-radius: 12px;
  border: 1px solid #7e858e;
  background-color: ${props => (props.theme === true ? '#424242' : '#f4f4f4')};
`
export const LogoutConfirmationText = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  text-align: center;
  color: ${props => (props.theme === true ? '#ebebeb' : '#00306e')}
`
export const LogoutButtonsCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 0px;
  gap: 24px;
  margin-top: 16px;
  background: transparent;
`
export const CancelLogoutBtn = styled.button`
  font-family: 'Roboto';
  font-size: 14px;
  border: 1px solid #94a3b8;
  border-radius: 4px;
  text-align: center;
  padding: 8px 16px;
  font-weight: 900;
  background: none;
  color: #94a3b8;
`

export const ConfirmLogoutBtn = styled(CancelLogoutBtn)`
  color: #f1f1f1;
  border: none;
  background-color:  #3b82f6;
  padding: 9px 17px;
`
