import {withRouter} from 'react-router-dom'
import {MdHome} from 'react-icons/md'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import {
  SideNavBar,
  NavTabsList,
  NavItem,
  NavTabLink,
  NavTabIcon,
  NavTabName,
  ContactCard,
  ContactTitle,
  LogoCard,
  LogoImg,
  ContactText,
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
const NavSideBar = withRouter(props => {
  const {match} = props

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <SideNavBar theme={isDark}>
            <NavTabsList>
              {navItemsList.map(eachTab => (
                <NavItem
                  isActive={match?.path === eachTab.navPath}
                  theme={isDark}
                  key={eachTab.id}
                >
                  <NavTabLink to={eachTab.navPath}>
                    <NavTabIcon isActive={match?.path === eachTab.navPath}>
                      {eachTab.icon}
                    </NavTabIcon>
                    <NavTabName
                      isActive={match?.path === eachTab.navPath}
                      theme={isDark}
                    >
                      {eachTab.name}
                    </NavTabName>
                  </NavTabLink>
                </NavItem>
              ))}
            </NavTabsList>
            <ContactCard>
              <ContactTitle theme={isDark}>CONTACT US</ContactTitle>
              <LogoCard>
                <LogoImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <LogoImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <LogoImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </LogoCard>
              <ContactText theme={isDark}>
                Enjoy! Now to see your channels and recommendations!
              </ContactText>
            </ContactCard>
          </SideNavBar>
        )
      }}
    </ThemeContext.Consumer>
  )
})

export default NavSideBar
