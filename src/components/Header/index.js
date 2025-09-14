import {Component} from 'react'
import Popup from 'reactjs-popup'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {IoMoon} from 'react-icons/io5'
import {VscThreeBars} from 'react-icons/vsc'
import {FiLogOut, FiSun} from 'react-icons/fi'
import {MdHome} from 'react-icons/md'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import {
  NavHeader,
  WebsiteLogo,
  NavBarLargeContainer,
  NavItemsList,
  ThemeIconBtn,
  NavMobileBtn,
  NavItem,
  NavItemMobile,
  NavItemDesktop,
  LogoutDesktopBtn,
  DropdownBtn,
  DropdownMenu,
  DropdownItem,
  TabLink,
  TabIcon,
  TabName,
  LogoutPopupCard,
  LogoutConfirmationText,
  LogoutButtonsCard,
  CancelLogoutBtn,
  ConfirmLogoutBtn,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const navItemsList = [
  {icon: <MdHome />, name: 'Home', id: 'HOME', navPath: '/'},
  {icon: <HiFire />, name: 'Trending', id: 'TRENDING', navPath: '/trending'},
  {icon: <SiYoutubegaming />, name: 'Gaming', id: 'GAMING', navPath: '/gaming'},
  {
    icon: <BiListPlus />,
    name: 'Saved videos',
    id: 'SAVED',
    navPath: '/saved-videos',
  },
]

class Header extends Component {
  state = {
    showDropdown: false,
  }

  toggleDropdown = () => {
    this.setState(prevState => ({showDropdown: !prevState.showDropdown}))
  }

  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    const {showDropdown} = this.state
    const {match} = this.props
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, toggleTheme} = value

          return (
            <NavHeader theme={isDark}>
              <NavBarLargeContainer>
                <Link to="/">
                  <WebsiteLogo
                    src={
                      isDark
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    }
                    alt="website logo"
                  />
                </Link>
                <NavItemsList>
                  <NavItem>
                    <ThemeIconBtn
                      data-testid="theme"
                      onClick={toggleTheme}
                      type="button"
                    >
                      {isDark ? (
                        <FiSun style={{color: '#ffffff'}} />
                      ) : (
                        <IoMoon />
                      )}
                    </ThemeIconBtn>
                  </NavItem>

                  {/* Mobile Dropdown (Hidden on Large Screens) */}
                  <NavItemMobile dropDownStatus={showDropdown}>
                    <DropdownBtn
                      theme={isDark}
                      type="button"
                      onClick={this.toggleDropdown}
                    >
                      <VscThreeBars />
                    </DropdownBtn>
                    {showDropdown && (
                      <DropdownMenu theme={isDark}>
                        {navItemsList.map(eachTab => (
                          <DropdownItem
                            isActive={match.path === eachTab.navPath}
                            theme={isDark}
                            key={eachTab.id}
                          >
                            <TabLink to={eachTab.navPath}>
                              <TabIcon
                                isActive={match.path === eachTab.navPath}
                              >
                                {eachTab.icon}
                              </TabIcon>
                              <TabName
                                isActive={match.path === eachTab.navPath}
                                theme={isDark}
                              >
                                {eachTab.name}
                              </TabName>
                            </TabLink>
                          </DropdownItem>
                        ))}
                      </DropdownMenu>
                    )}
                  </NavItemMobile>

                  {/* Desktop Profile Image (Hidden on Small Screens) */}
                  <NavItemDesktop>
                    <img
                      width={40}
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                      alt="profile"
                    />
                  </NavItemDesktop>

                  <NavItemDesktop>
                    <Popup
                      modal
                      trigger={
                        <LogoutDesktopBtn type="button">
                          Logout
                        </LogoutDesktopBtn>
                      }
                    >
                      {close => (
                        <LogoutPopupCard theme={isDark}>
                          <LogoutConfirmationText theme={isDark}>
                            Are you sure, you want to logout
                          </LogoutConfirmationText>
                          <LogoutButtonsCard>
                            <CancelLogoutBtn
                              type="button"
                              onClick={() => close()}
                            >
                              Cancel
                            </CancelLogoutBtn>
                            <ConfirmLogoutBtn
                              onClick={this.onClickLogout}
                              type="button"
                            >
                              Confirm
                            </ConfirmLogoutBtn>
                          </LogoutButtonsCard>
                        </LogoutPopupCard>
                      )}
                    </Popup>
                  </NavItemDesktop>

                  <NavItemMobile>
                    <Popup
                      modal
                      trigger={
                        <NavMobileBtn type="button" theme={isDark}>
                          <FiLogOut />
                        </NavMobileBtn>
                      }
                    >
                      {close => (
                        <LogoutPopupCard theme={isDark}>
                          <LogoutConfirmationText theme={isDark}>
                            Are you sure, you want to logout
                          </LogoutConfirmationText>
                          <LogoutButtonsCard>
                            <CancelLogoutBtn
                              type="button"
                              onClick={() => close()}
                            >
                              Cancel
                            </CancelLogoutBtn>
                            <ConfirmLogoutBtn
                              onClick={this.onClickLogout}
                              type="button"
                            >
                              Confirm
                            </ConfirmLogoutBtn>
                          </LogoutButtonsCard>
                        </LogoutPopupCard>
                      )}
                    </Popup>
                  </NavItemMobile>
                </NavItemsList>
              </NavBarLargeContainer>
            </NavHeader>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Header)
