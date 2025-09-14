import {Component} from 'react'
import {BiListPlus} from 'react-icons/bi'
import NavSideBar from '../NavSideBar'
import Header from '../Header'
import TrendingSavedVideoCard from '../TrendingSavedVideoCard'
import ResultView from '../ResultView'
import ThemeContext from '../../context/ThemeContext'
import {
  SavedRoutePage,
  SavedRouteSection,
  SavedVideosSection,
} from './styledComponents'

import {
  Banner,
  VideosSection,
  PageLogo,
  PageTitle,
  VideosList,
  LoaderWindow,
} from '../Trending/styledComponents'

const NoSavedVideosWindow = LoaderWindow

class SavedVideos extends Component {
  renderSavedVideosResults = (isDark, videosList) => {
    const noSavedVideosViewData = {
      altValue: 'no saved videos',
      srcValue:
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png',
      heading: 'No saved videos found',
      description: 'You can save your videos while watching them',
      isDark,
    }

    if (videosList.length === 0) {
      return (
        <NoSavedVideosWindow>
          <ResultView viewData={noSavedVideosViewData} />
        </NoSavedVideosWindow>
      )
    }

    return (
      <>
        <Banner theme={isDark}>
          <PageLogo theme={isDark} as={BiListPlus} />
          <PageTitle theme={isDark}>Saved Videos</PageTitle>
        </Banner>
        <VideosList>
          {videosList.map(video => (
            <TrendingSavedVideoCard key={video.id} videoData={video} />
          ))}
        </VideosList>
      </>
    )
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, savedVideos} = value
          return (
            <SavedRoutePage theme={isDark} data-testid="savedVideos">
              <Header />
              <SavedRouteSection>
                <NavSideBar />
                <SavedVideosSection theme={isDark}>
                  <VideosSection theme={isDark}>
                    {this.renderSavedVideosResults(isDark, savedVideos)}
                  </VideosSection>
                </SavedVideosSection>
              </SavedRouteSection>
            </SavedRoutePage>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideos
