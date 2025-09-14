import {formatDistanceToNow, format} from 'date-fns'
import {VscCircleFilled} from 'react-icons/vsc'
import {
  VideoLink,
  VideoItem,
  ThumbNail,
  ImgCard,
  VideoInfo,
} from './styledComponents'
import {
  VideoInfoCard,
  VideoTitle,
  ChannelLogo,
  ChannelName,
  VideoStats,
  UIDotMobile,
  UIDot,
  Stat,
  VideoStatsWrapper,
} from '../VideoCard/styledComponents'
import ThemeContext from '../../context/ThemeContext'

const TrendingSavedVideoCard = ({videoData}) => {
  const {id, thumbnailUrl, channel, title, viewCount, publishedAt} = videoData

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <VideoItem key={id}>
            <VideoLink to={`/videos/${id}`}>
              <ThumbNail alt="video thumbnail" src={thumbnailUrl} />
              <VideoInfoCard>
                <ImgCard>
                  <ChannelLogo
                    alt="channel logo"
                    src={channel.profileImageUrl}
                  />
                </ImgCard>
                <VideoInfo>
                  <VideoTitle theme={isDark}>{title}</VideoTitle>
                  <VideoStats>
                    <ChannelName>{channel.name}</ChannelName>
                    <VideoStatsWrapper>
                      <UIDotMobile>
                        <VscCircleFilled />
                      </UIDotMobile>
                      <Stat>{`${viewCount} views`}</Stat>
                      <UIDot>
                        <VscCircleFilled />
                      </UIDot>
                      <Stat>{`${format(
                        new Date(publishedAt),
                        'MMM d, yyyy',
                      )} | ${formatDistanceToNow(
                        new Date(publishedAt),
                      )}`}</Stat>
                    </VideoStatsWrapper>
                  </VideoStats>
                </VideoInfo>
              </VideoInfoCard>
            </VideoLink>
          </VideoItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TrendingSavedVideoCard
