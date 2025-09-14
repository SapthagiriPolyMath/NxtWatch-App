import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoItem = styled.li`
  margin: 0px;
  padding: 0px;
  width: 100%;
  margin-bottom: 40px;
  padding: 0px;
  @media screen and (min-width: 576px) {
    margin-bottom: 8%;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 6%;
  }
`

export const VideoLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2%;

  @media screen and (min-width: 576px) {
    flex-direction: row;
  }
  
`

export const ThumbNail = styled.img`
  margin: 0px;
  margin-bottom: 18px;
  padding: 0px;
  width: 100%;
  height: auto;

  @media screen and (min-width: 576px) {
    width: 58%;
  }

  @media screen and (min-width: 768px) {
    width: 49%;
  }
`

export const ImgCard = styled.div`
  width: 10%;
  padding: 0px;
  margin: 0px;

  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  margin: 0px;
  padding: 0px;
  gap: 8px;
`
