import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoItem = styled.li`
  margin: 0px;
  padding: 0px;
  width: 100%;
  margin-bottom: 40px;
  padding: 0px;
  @media screen and (min-width: 576px) {
    width: 49%;
    margin-bottom: 8%;
  }
  @media screen and (min-width: 768px) {
    width: 32%;
    margin-bottom: 6%;
  }
`

export const VideoLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

export const ThumbNail = styled.img`
  margin: 0px;
  margin-bottom: 14px;
  padding: 0px;
  width: 100%;
  height: auto;

  @media screen and (min-width: 768px) {
    margin-bottom: 18px;
  }
`

export const VideoInfoCard = styled.div`
  display: flex;
  width: 100%;
  margin: 0px;
  padding: 0px 14px 0px 14px;

  @media screen and (min-width: 576px) {
    padding: 0px;
  }

  @media screen and (min-width: 768px) {
    padding: 0px;
  }
`

export const ImgCard = styled.div`
  width: 15%;
  padding: 0px;
  margin: 0px;
`

export const ChannelLogo = styled.img`
  margin: 0px;
  padding: 0px;
  width: 75%;
  border-radius: 50%;
`

export const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0px;
  padding: 0px;
  gap: 8px;
`

export const VideoTitle = styled.p`
  font-size: 16px;
  color: ${props => (props.theme === true ? '#f4f4f4' : 'black')};
  font-family: 'Roboto';
  margin: 0px;
  line-height: 1.5;
  padding: 0px;
`

export const VideoStats = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px;
  padding: 0px;

  @media screen and (min-width: 576px) {
    flex-direction: column;
  }
`

export const ChannelName = styled.p`
  margin: 3px 3px 0px 0px;
  padding: 0px;
  font-size: 12px;
  color: #7e858e;

  @media screen and (min-width: 576px) {
    font-size: 14px;
    font-weight: bold;
    margin: 2px 5px 10px 0px;
  }
`

export const VideoStatsWrapper = styled.div`
  display: flex;
  gap: 3px;
  align-items: center;
  margin: 0px;
  padding: 0px;

  @media screen and (min-width: 768px) {
    gap: 5px;
  }
`

export const UIDotMobile = styled.p`
  margin: 2px 0px 0px 0px;
  font-size: 10px;
  color: #7e858e;
  padding-top: 3px;
  text-align: left;
  
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const UIDot = styled(UIDotMobile)`
  display: block;
`

export const Stat = styled(UIDotMobile)`
  font-size: 12px;
  padding: 0px;

  @media screen and (min-width: 576px) {
    display: block;
  }
`

export const StatMobile = styled.h1`
  font-size: 12px;
  padding: 0px;
  font-weight: normal;
  margin: 2px 0px 0px 0px;
  color: #7e858e;
  text-align: left;
  
  @media screen and (min-width: 576px) {
    display: none;
  }
`
