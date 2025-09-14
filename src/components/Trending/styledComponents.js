import styled from 'styled-components'
import {
  HomeContainer,
  HomeSection,
  BannerVideosSection,
} from '../Home/styledComponents'

export const TrendingRoutePage = HomeContainer

export const TrendingRouteSection = HomeSection

export const TrendingVideosSection = styled(BannerVideosSection)`
  align-items: center;
  padding: 0px;
`

export const Banner = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 5%;
  margin-bottom: 20px;
  width: 100%;
  gap: 16px;
  background-color: ${props => (props.theme === true ? '#212121' : '#d7dfe9')};
`

export const PageLogo = styled.p`
  font-size: 40px;
  border-radius: 50%;
  padding: 10px;
  color: #ff0b37;
  background-color: ${props => (props.theme === true ? '#000000' : '#cbd5e1')};
  margin: 0px;

  @media screen and (min-width: 768px) {
    font-size: 60px;
    padding: 14px;
  }
`

export const PageTitle = styled.h1`
  text-align: left;
  font-weight: bold;
  padding: 0px;
  margin: 0px;
  color: ${props => (props.theme === true ? '#ffffff' : '#000000')};
`

export const VideosSection = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
  flex: 1;
  margin: 0px;
  background-color: ${props => (props.theme === true ? '#000000' : '#ffffff')};
  box-shadow: inset 2px 0px 15px -4px rgba(0, 0, 0, 0.5);
`

export const VideosList = styled.ul`
  display: flex;
  list-style-type: none;
  width: 100%;
  margin: 0px;
  padding: 0px;
  flex-wrap: wrap;
  align-item: center;

  @media screen and (min-width: 576px) {
    padding: 20px 5%;
    gap: 2%;
  }

  @media screen and (min-width: 768px) {
    gap: 2%;
  }
`

export const LoaderWindow = styled.div`
  flex:1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
