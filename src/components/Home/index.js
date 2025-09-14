import {Component} from 'react'
import {MdClose} from 'react-icons/md'
import {IoMdSearch} from 'react-icons/io'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import NavSideBar from '../NavSideBar'
import Header from '../Header'
import VideoCard from '../VideoCard'
import ResultView from '../ResultView'
import ThemeContext from '../../context/ThemeContext'
import {
  HomeContainer,
  HomeSection,
  BannerVideosSection,
  Banner,
  BannerTitleSection,
  NxtWatchLogo,
  CloseBannerBtn,
  BannerDescription,
  BannerGetBtn,
  VideosSection,
  SearchBar,
  SearchWrapper,
  SearchInput,
  ClearOverlay,
  ClearBtn,
  SearchBtn,
  VideosList,
  LoaderWindow,
} from './styledComponents'

const FailureWindow = LoaderWindow
const NoResultWindow = LoaderWindow

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

class Home extends Component {
  state = {
    showBanner: true,
    searchInput: '',
    videosStatus: 'INITIAL',
    videosList: [],
  }

  componentDidMount = () => {
    this.getVideosData()
  }

  closeBanner = () => {
    this.setState({showBanner: false})
  }

  onChangeSearch = event => {
    const {value} = event.target
    this.setState({searchInput: value})
  }

  onKeyDownSearch = event => {
    if (event.key === 'Enter') {
      this.getVideosData()
    }
  }

  onclickSearchBtn = () => {
    this.getVideosData()
  }

  getVideosData = async () => {
    this.setState({videosList: [], videosStatus: videosStatusConstants.loading})
    const {searchInput} = this.state
    const response = await fetch(
      `https://apis.ccbp.in/videos/all?search=${searchInput}`,
      {
        method: 'GET',
        headers: {authorization: `Bearer ${Cookies.get('jwt_token')}`},
      },
    )
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

  renderHomeResults = isDark => {
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
      retry: this.getVideosData,
    }
    const noResultsViewData = {
      altValue: 'no videos',
      srcValue:
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png',
      heading: 'No Search results found',
      description: 'Try different key words or remove search filter',
      isDark,
      retry: this.getVideosData,
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
        return videosList.length > 0 ? (
          <VideosList>
            {videosList.map(video => (
              <VideoCard key={video.id} videoData={video} />
            ))}
          </VideosList>
        ) : (
          <NoResultWindow>
            <ResultView viewData={noResultsViewData} />
          </NoResultWindow>
        )
      default:
        return null
    }
  }

  render() {
    const {showBanner, searchInput} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <HomeContainer theme={isDark} data-testid="home">
              <Header />
              <HomeSection>
                <NavSideBar />
                <BannerVideosSection theme={isDark}>
                  {showBanner && (
                    <Banner data-testid="banner">
                      <BannerTitleSection>
                        <NxtWatchLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <CloseBannerBtn
                          type="button"
                          data-testid="close"
                          onClick={this.closeBanner}
                        >
                          <MdClose />
                        </CloseBannerBtn>
                      </BannerTitleSection>
                      <BannerDescription>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerDescription>
                      <BannerGetBtn type="button">GET IT NOW</BannerGetBtn>
                    </Banner>
                  )}
                  <VideosSection theme={isDark} showBanner={showBanner}>
                    <SearchBar theme={isDark}>
                      <SearchWrapper>
                        <SearchInput
                          type="search"
                          placeholder="Search"
                          value={searchInput}
                          theme={isDark}
                          onChange={this.onChangeSearch}
                          onKeyDown={this.onKeyDownSearch}
                        />
                        <ClearOverlay theme={isDark} />
                      </SearchWrapper>
                      {searchInput && (
                        <ClearBtn
                          theme={isDark}
                          onClick={() => this.setState({searchInput: ''})}
                        >
                          <MdClose />
                        </ClearBtn>
                      )}
                      <SearchBtn
                        theme={isDark}
                        data-testid="searchButton"
                        onClick={this.onclickSearchBtn}
                        type="button"
                      >
                        <IoMdSearch />
                      </SearchBtn>
                    </SearchBar>
                    {this.renderHomeResults(isDark)}
                  </VideosSection>
                </BannerVideosSection>
              </HomeSection>
            </HomeContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
