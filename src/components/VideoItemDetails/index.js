import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {VscCircleFilled} from 'react-icons/vsc'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'
import {format, formatDistanceToNow} from 'date-fns'
import Header from '../Header'
import NavSideBar from '../NavSideBar'
import ResultView from '../ResultView'
import ThemeContext from '../../context/ThemeContext'
import {
  VideoItemDetailsPage,
  VideoItemDetailsSection,
  VideoItemDetailsContainer,
  VideoPlayer,
  LoaderWindow,
  FailureWindow,
  VideoTitle,
  VideoStatsReactionsContainer,
  VideoStatsCard,
  VideoStat,
  ReactionsBtnCard,
  ReactionBtn,
  HorizontalRule,
  ChannelInfoContainer,
  ChannelInfoCard,
  ChannelLogo,
  ChannelStatCard,
  ChannelTitle,
  SubsCount,
  VideoDescription,
} from './styledComponents'

const videoDetailsStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

// Function to convert snake_case to camelCase
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

class VideoItemDetails extends Component {
  state = {
    videoDetailsStatus: videoDetailsStatusConstants.initial,
    videoDetailsData: {},
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({videoDetailsStatus: videoDetailsStatusConstants.loading})
    const {match} = this.props
    const {id} = match.params
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {authorization: `Bearer ${Cookies.get('jwt_token')}`},
    }

    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()
      const formattedData = convertKeysToCamelCase(data.video_details)
      this.setState({
        videoDetailsData: formattedData,
        videoDetailsStatus: videoDetailsStatusConstants.success,
      })
      console.log(formattedData)
    } else {
      this.setState({videoDetailsStatus: videoDetailsStatusConstants.failure})
    }
  }

  renderVideoItemDetails = () => {
    const {videoDetailsData, videoDetailsStatus} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {
            isDark,
            likedVideos,
            dislikedVideos,
            savedVideos,
            updateVideosReaction,
            updateSavedVideos,
          } = value

          const failureViewData = {
            altValue: 'failure view',
            srcValue: isDark
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png',
            heading: 'Oops! Something Went Wrong',
            description:
              'We are having some trouble to complete your request.\nPlease try again.',
            isDark,
            retry: this.getVideoDetails,
          }

          const isSaved = savedVideos.some(
            eachVideo => eachVideo.id === videoDetailsData.id,
          )

          switch (videoDetailsStatus) {
            case videoDetailsStatusConstants.loading:
              return (
                <LoaderWindow data-testid="loader">
                  <Loader
                    type="ThreeDots"
                    color={isDark ? '#ffffff' : '#000000'}
                    height="50"
                    width="50"
                  />
                </LoaderWindow>
              )
            case videoDetailsStatusConstants.failure:
              return (
                <FailureWindow>
                  <ResultView viewData={failureViewData} />
                </FailureWindow>
              )
            case videoDetailsStatusConstants.success:
              return (
                <VideoItemDetailsContainer theme={isDark}>
                  <VideoPlayer
                    as={ReactPlayer}
                    url={videoDetailsData.videoUrl}
                    controls
                    width="100%"
                    height="75%"
                  />
                  <VideoTitle theme={isDark}>
                    {videoDetailsData.title}
                  </VideoTitle>
                  <VideoStatsReactionsContainer>
                    <VideoStatsCard>
                      <VideoStat>
                        {`${videoDetailsData.viewCount} views`}
                      </VideoStat>
                      <VideoStat style={{fontSize: 8, paddingTop: 5}}>
                        <VscCircleFilled />
                      </VideoStat>
                      <VideoStat>{`${format(
                        new Date(videoDetailsData.publishedAt),
                        'MMM d, yyyy',
                      )} | ${formatDistanceToNow(
                        new Date(videoDetailsData.publishedAt),
                      )}`}</VideoStat>
                    </VideoStatsCard>
                    <ReactionsBtnCard>
                      <ReactionBtn
                        isActive={likedVideos.includes(videoDetailsData.id)}
                        type="button"
                        onClick={() =>
                          updateVideosReaction(videoDetailsData.id, 'LIKE')
                        }
                      >
                        <span style={{fontSize: 18}}>
                          <BiLike />
                        </span>
                        Like
                      </ReactionBtn>
                      <ReactionBtn
                        isActive={dislikedVideos.includes(videoDetailsData.id)}
                        type="button"
                        onClick={() =>
                          updateVideosReaction(videoDetailsData.id, 'DISLIKE')
                        }
                      >
                        <span style={{fontSize: 18}}>
                          <BiDislike />
                        </span>
                        Dislike
                      </ReactionBtn>
                      <ReactionBtn
                        isActive={isSaved}
                        type="button"
                        onClick={() => {
                          updateSavedVideos(videoDetailsData)
                        }}
                      >
                        <BiListPlus />
                        {isSaved ? 'Saved' : 'Save'}
                      </ReactionBtn>
                    </ReactionsBtnCard>
                  </VideoStatsReactionsContainer>
                  <HorizontalRule> </HorizontalRule>
                  <ChannelInfoContainer>
                    <ChannelInfoCard>
                      <ChannelLogo
                        src={videoDetailsData.channel.profileImageUrl}
                        alt="channel logo"
                      />
                      <ChannelStatCard>
                        <ChannelTitle theme={isDark}>
                          {videoDetailsData.channel.name}
                        </ChannelTitle>
                        <SubsCount>{`${videoDetailsData.channel.subscriberCount} subscribers`}</SubsCount>
                      </ChannelStatCard>
                    </ChannelInfoCard>
                    <VideoDescription theme={isDark}>
                      {videoDetailsData.description}
                    </VideoDescription>
                  </ChannelInfoContainer>
                </VideoItemDetailsContainer>
              )
            default:
              return null
          }
        }}
      </ThemeContext.Consumer>
    )
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <VideoItemDetailsPage data-testid="videoItemDetails" theme={isDark}>
              <Header />
              <VideoItemDetailsSection>
                <NavSideBar />
                {this.renderVideoItemDetails()}
              </VideoItemDetailsSection>
            </VideoItemDetailsPage>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
