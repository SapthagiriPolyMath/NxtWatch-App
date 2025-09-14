import styled from 'styled-components'

export const VideoItemDetailsPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 0px;
  height: 100vh;
  overflow: scroll;
  overflow-x: hidden;
  background-color: ${props => (props.theme === true ? '#181818' : '#f9f9f9')};
  font-family: 'Roboto';
`

export const VideoItemDetailsSection = styled.div`
  display: flex;
  padding: 0px;
  margin: 0px;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    height: 100vh;
  }
`

export const VideoItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: 16px;
  height: 100vh;
  overflow: scroll;
  margin: 0px;
  overflow-x: hidden;
  box-shadow: inset 2px 2px 15px -4px rgba(0, 0, 0, 0.5);
  background-color: ${props => (props.theme === true ? '#181818' : '#f9f9f9')};
`

export const LoaderWindow = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  box-shadow: inset 2px 2px 15px -4px rgba(0, 0, 0, 0.5);
`

export const FailureWindow = styled(LoaderWindow)`
  height: 100vh;
  padding-top: 20px;
  overflow: auto;
`

export const VideoPlayer = styled.div`
  height: 75%;
  margin-bottom: 16px;
  flex-shrink: 0;

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  text-align: left;
  font-size: 16px;
  padding: 0px;
  margin-bottom: 18px;
  color: ${props => (props.theme === true ? '#f8fafc' : '#231f20')};

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const VideoStatsReactionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%
  padding: 0px;
  margin: 0px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }
`

export const VideoStatsCard = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 16px;
  align-items: center;
  display: flex;
  align-items: center;
  padding: 0px;

  @media screen and (min-width: 768px) {
    margin: 0px;
  }
`

export const VideoStat = styled.p`
  color: #7e858e;
  font-size: 14px;
  padding: 0px;
  margin: 0px;
  margin-right: 5px;
`

export const ReactionsBtnCard = styled.div`
  display: flex;
  gap: 18px;
  margin-bottom: 16px;
  align-items: center;
  display: flex;
  align-items: center;
  padding: 0px;

  @media screen and (min-width: 768px) {
    margin: 0px;
  }
`

export const ReactionBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  font-size: 16px;
  color: ${props => (props.isActive === true ? '#2563eb' : '#64748b')};
  border-style: none;
  background: none;
  font-weight: ${props => (props.isActive === true ? 'bold' : 'normal')};
  cursor: pointer;
  gap: 5px;
`

export const HorizontalRule = styled.div`
  width: 100%;
  border: solid 1px #64748b;
  border-top: none;
  margin-bottom: 24px;
  padding: 0px;
`

export const ChannelInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0px;
  padding: 0px;
  font-family: 'Roboto';
  margin-bottom: 30px;
`

export const ChannelInfoCard = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 24px;
  gap: 15px;
`

export const ChannelLogo = styled.img`
  border-radius: 50%;
  margin: 0px;
  padding: 0px;
  width: 50px;
  height: auto;
`

export const ChannelStatCard = styled.div`
  display: flex;
  margin: 0px;
  padding: 4px 0px;
  flex-direction: column;
  justify-content: space-between;
  height: 50px;
`

export const ChannelTitle = styled.p`
  font-size: 14px;
  color: ${props => (props.theme === true ? '#ffffff' : '#000000')};
  margin: 0px;
  padding: 0px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const SubsCount = styled.p`
  font-size: 12px;
  color: #64748b;
  margin: 0px;
  padding: 0px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

export const VideoDescription = styled.p`
  color: ${props => (props.theme === true ? '#ffffff' : '#000000')};
  font-size: 14px;
  text-align: left;
  margin: 0px;
  padding: 0px;

  @media screen and (min-width: 768px) {
    margin-left: 65px;
    font-size: 16px;
  }
`
