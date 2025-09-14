import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {
  TrendingRoutePage,
  TrendingRouteSection,
  TrendingVideosSection,
} from '../Trending/styledComponents'

export const GamingRoutePage = TrendingRoutePage

export const GamingRouteSection = TrendingRouteSection

export const GamingVideosSection = TrendingVideosSection

export const VideosList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  width: 100%;
  margin: 0px;
  padding: 13px;
  flex-wrap: wrap;
  align-item: center;

  @media screen and (min-width: 576px) {
    padding: 20px 5%;
    justify-content: space-between;
  }
`

export const GameVideoCard = styled(Link)`
  margin: 0px;
  padding: 0px;
  width: 48%;
  display: flex;
  font-family: 'Roboto';
  flex-direction: column;
  margin-bottom: 16px;
  text-decoration: none;
  
  @media screen and (min-width: 576px) {
    width: 30%;
  }
`

export const GameThumbnail = styled.img`
  width: 100%;
  margin: 0px;
  height: auto;
  margin-bottom: 10px;
  padding: 0px;

  @media screen and (min-width: 576px) {
    margin-bottom: 12px;
  }
`

export const GameTitle = styled.p`
  font-size: 16px;
  margin: 0px;
  text-align: left;
  padding: 0px;
  margin-bottom: 8px;
  color: ${props => (props.theme === true ? '#ffffff' : '#000000')};
`

export const GameStat = styled.p`
  font-size: 14px;
  margin: 0px;
  text-align: left;
  color: #7e858e;
  padding: 0px;
  margin-bottom: 16px;
`
