import Header from '../Header'
import NavSideBar from '../NavSideBar'
import ThemeContext from '../../context/ThemeContext'
import {
  NotFoundSection,
  SubSection,
  NotFoundBody,
  NotFoundImg,
  NotFoundTitle,
  NotFoundText,
} from './styledComponents'

const NotFound = () => (
  <NotFoundSection>
    <Header />
    <SubSection>
      <NavSideBar />
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <NotFoundBody theme={isDark}>
              <NotFoundImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                alt="not found"
              />
              <NotFoundTitle theme={isDark}>Page Not Found</NotFoundTitle>
              <NotFoundText theme={isDark}>
                We are sorry, the page you requested could not be found.
              </NotFoundText>
            </NotFoundBody>
          )
        }}
      </ThemeContext.Consumer>
    </SubSection>
  </NotFoundSection>
)

export default NotFound
