import styled from 'styled-components'

export const ViewImg = styled.img`
  margin: 24px;
  padding: 0px;
  width: 50%;
`

export const ViewHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  margin-bottom: 22px;
  padding: 0px;
  text-align: center;
  color: ${props => (props.theme === true ? '#f1f1f1' : '#181818')}
`

export const ViewDescription = styled.p`
  font-size: 22px;
  text-align: center;
  color: #94a3b8;
  margin-bottom: 20px;
`

export const RetryBtn = styled.button`
  font-size: 14px;
  font-weight: bold;
  padding: 12px 20px;
  color: #f8fafc;
  background: #4f46e5;
  border-radius: 4px;
  border-style: none;
  cursor: pointer;
  outline: none;
  margin-bottom: 15px;
`
