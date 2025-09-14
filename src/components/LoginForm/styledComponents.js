import styled from 'styled-components'

export const LoginContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
`
export const FormCard = styled.form`
  width: 80%;
  padding: 32px;
  border-radius: 14px;
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`
export const InputLabel = styled.label`
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: ${props => props.color};
`

export const LoginWebsiteLogoimg = styled.img`
  width: 165px;
  margin-bottom: 35px;
  max-width: 350px;
`
export const InputField = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #d7dfe9;
  color: #606060;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
  background-color: ${props => props.bgColor};
`

export const ShowPasswordLabel = styled.label`
  display: flex;
  gap: 6px;
  margin-top: 20px;
  width: auto;
  align-self: start;
  cursor: pointer;
`

export const CheckBoxName = styled.span`
  font-size: 16px;
  color: ${props => props.color}; 
`

export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 2px;
  background-color: #3b82f6;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  outline: none;
`
export const ErrorMsg = styled.p`
  align-self: start;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 16px;
  color: #ff0b37;
`
