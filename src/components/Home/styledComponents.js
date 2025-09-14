import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 0px;
  background-color: ${props => (props.theme === true ? '#181818' : '#f9f9f9')};
  font-family: 'Roboto';
`
export const HomeSection = styled.div`
  display: flex;
  padding: 0px;
  margin: 0px;
  flex: 1;
  height: 100vh;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`

export const BannerVideosSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: 0px;
  height: 100vh;
  overflow: scroll;
  overflow-x: hidden;
  margin: 0px;
  background-color: ${props => (props.theme === true ? '#181818' : '#f9f9f9')};
`

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 0px;
  width: auto;
  background-size: cover;
  box-shadow: inset 2px 2px 15px -4px rgba(0, 0, 0, 0.5);
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
`

export const BannerTitleSection = styled.div`
  padding: 0px;
  margin: 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
`

export const NxtWatchLogo = styled.img`
  width: 25%;
  height: auto;
  margin: 0px;
  padding: 0px;
`
export const CloseBannerBtn = styled.button`
  padding: 0px 8px 8px 8px;
  color: #475569;
  text-align: center;
  margin: 0px;
  font-size: 18px;
  border: none;
  background: none;
  cursor: pointer;
`

export const BannerDescription = styled.p`
  font-size: 14px;
  color: #0f0f0f;
  text-align: left;
  line-height: 1;
  margin-bottom: 38px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const BannerGetBtn = styled.button`
  padding: 10px 14px;
  color: #181818;
  text-align: center;
  border: 1.5px solid #0f0f0f;
  font-size: 12px;
  font-weight: 700;
  margin: 0px;
  width: max-content;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const VideosSection = styled.div`
  width: auto;
  display:flex;
  flex-direction: column;
  flex: 1;
  padding-top: 22px;
  margin: 0px;
  background-color: ${props => (props.theme === true ? '#000000' : '#ffffff')};
  box-shadow: inset 2px 0px 15px -4px rgba(0, 0, 0, 0.5);
  @media screen and (min-width: 576px) {
    padding: 16px;
  }
  @media screen and (min-width: 768px) {
    padding: 22px;
  }
`

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: relative;
  width: 100%;
  border: ${props =>
    props.theme === true ? '1px solid #909090' : '1px solid #cccccc'};
  margin: 0px;
  padding: 0px;
  margin-bottom: 22px;
  @media screen and (min-width: 576px) {
    width: 80%;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 36px;
    width: 50%;
  }
`

export const SearchWrapper = styled.div`
  position: relative;
  width: 85%;
`

export const SearchInput = styled.input`
  font-size: 16px;
  width: 100%;
  flex-shrink: 1;
  outline: none;
  padding: 10px;
  color: ${props => (props.theme === true ? '#cccccc' : '#909090')};
  border: none;
  background: none;
`

export const ClearOverlay = styled.div`
  position: absolute;
  right: 10px; /* Adjust this based on the × location */
  top: 10px;
  width: 20px;
  height: 20px;
  background-color: ${props => (props.theme === true ? '#000000' : '#ffffff')};
  pointer-events: none; /* Ensures interaction is blocked */
`

export const ClearBtn = styled.button`
  right: 10px; /* Keep it closer to input */
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  cursor: pointer;
  color: ${props => (props.theme === true ? '#ffffff' : '#000000')};

  &:hover {
    color: red;
  }
`

export const SearchBtn = styled.button`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 15%;
  cursor: pointer;
  background-color: ${props =>
    props.theme === true ? '#606060' : 'transparent'};
  color: ${props => (props.theme === true ? '#cccccc' : '#313131')};
  border: none;
  border-left: ${props =>
    props.theme === true ? '2px solid #909090' : '2px solid #cccccc'};
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
