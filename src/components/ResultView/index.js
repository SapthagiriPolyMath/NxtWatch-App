import {
  ViewImg,
  ViewHeading,
  ViewDescription,
  RetryBtn,
} from './styledComponents'

const ResultView = ({viewData}) => {
  const {altValue, srcValue, heading, description, retry, isDark} = viewData

  return (
    <>
      <ViewImg alt={altValue} src={srcValue} />
      <ViewHeading theme={isDark}>{heading}</ViewHeading>
      <ViewDescription theme={isDark}>{description}</ViewDescription>
      {retry && (
        <RetryBtn type="button" onClick={retry}>
          Retry
        </RetryBtn>
      )}
    </>
  )
}

export default ResultView
