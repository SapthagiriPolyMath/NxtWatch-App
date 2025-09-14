import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import NavSideBar from '../NavSideBar'
import Header from '../Header'
import TrendingSavedVideoCard from '../TrendingSavedVideoCard'
import ResultView from '../ResultView'
import ThemeContext from '../../context/ThemeContext'
import {
  TrendingRoutePage,
  TrendingRouteSection,
  TrendingVideosSection,
  Banner,
  VideosSection,
  PageLogo,
  PageTitle,
  VideosList,
  LoaderWindow,
} from './styledComponents'

const FailureWindow = LoaderWindow

const videosStatusConstants = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failed: 'FAILED',
}

const toCamelCase = str =>
  str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase())

const convertKeysToCamelCase = obj => {
  if (Array.isArray(obj)) {
    return obj.map(convertKeysToCamelCase)
  }
  if (typeof obj === 'object' && obj !== null) {
    return Object.keys(obj).reduce((acc, key) => {
      const camelKey = toCamelCase(key)
      acc[camelKey] = convertKeysToCamelCase(obj[key])
      return acc
    }, {})
  }
  return obj
}

class Trending extends Component {
  state = {
    videosStatus: 'INITIAL',
    videosList: [],
  }

  componentDidMount = () => {
    this.getTrendingVideosData()
  }

  getTrendingVideosData = async () => {
    this.setState({videosList: [], videosStatus: videosStatusConstants.loading})
    const response = await fetch('https://apis.ccbp.in/videos/trending', {
      method: 'GET',
      headers: {authorization: `Bearer ${Cookies.get('jwt_token')}`},
    })
    if (response.ok) {
      const data = await response.json()
      const formattedData = convertKeysToCamelCase(data)
      this.setState({
        videosStatus: videosStatusConstants.success,
        videosList: formattedData.videos,
      })
    } else {
      this.setState({videosStatus: videosStatusConstants.failure})
    }
  }

  renderTrendingPageResults = isDark => {
    const {videosStatus, videosList} = this.state
    const failureViewData = {
      altValue: 'failure view',
      srcValue:
        isDark === true
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png',
      heading: 'Oops! Something Went Wrong',
      description:
        'We are having some trouble to complete your request.\nPlease try again.',
      isDark,
      retry: this.getTrendingVideosData,
    }

    switch (videosStatus) {
      case videosStatusConstants.loading:
        return (
          <LoaderWindow data-testid="loader">
            <Loader
              type="ThreeDots"
              color={isDark === true ? '#ffffff' : '#000000'}
              height="50"
              width="50"
            />
          </LoaderWindow>
        )
      case videosStatusConstants.failure:
        return (
          <FailureWindow>
            <ResultView viewData={failureViewData} />
          </FailureWindow>
        )
      case videosStatusConstants.success:
        return (
          <>
            <Banner theme={isDark}>
              <PageLogo theme={isDark} as={HiFire} />
              <PageTitle theme={isDark}>Trending</PageTitle>
            </Banner>
            <VideosList>
              {videosList.map(video => (
                <TrendingSavedVideoCard key={video.id} videoData={video} />
              ))}
            </VideosList>
          </>
        )
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <TrendingRoutePage theme={isDark} data-testid="trending">
              <Header />
              <TrendingRouteSection>
                <NavSideBar />
                <TrendingVideosSection theme={isDark}>
                  <VideosSection theme={isDark}>
                    {this.renderTrendingPageResults(isDark)}
                  </VideosSection>
                </TrendingVideosSection>
              </TrendingRouteSection>
            </TrendingRoutePage>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
