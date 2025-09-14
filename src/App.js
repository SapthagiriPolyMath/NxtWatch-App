import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import ThemeContext from './context/ThemeContext'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

class App extends Component {
  state = {
    isDark: false,
    likedVideos: [],
    dislikedVideos: [],
    savedVideos: [],
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDark: !prevState.isDark,
    }))
  }

  updateVideosReaction = (id, action) => {
    this.setState(prevState => {
      const {likedVideos, dislikedVideos} = prevState

      const isLiked = likedVideos.includes(id)
      const isDisliked = dislikedVideos.includes(id)

      let updatedLikedVideos = likedVideos
      let updatedDislikedVideos = dislikedVideos

      if (action === 'LIKE') {
        updatedLikedVideos = isLiked
          ? likedVideos.filter(eachId => eachId !== id)
          : [...likedVideos, id]
        updatedDislikedVideos = dislikedVideos.filter(eachId => eachId !== id)
      } else if (action === 'DISLIKE') {
        updatedDislikedVideos = isDisliked
          ? dislikedVideos.filter(eachId => eachId !== id)
          : [...dislikedVideos, id]
        updatedLikedVideos = likedVideos.filter(eachId => eachId !== id)
      }

      return {
        likedVideos: updatedLikedVideos,
        dislikedVideos: updatedDislikedVideos,
      }
    })
  }

  updateSavedVideos = videoDetailsData => {
    this.setState(prevState => {
      if (
        prevState.savedVideos.some(
          eachVideo => eachVideo.id === videoDetailsData.id,
        )
      ) {
        return {
          savedVideos: prevState.savedVideos.filter(
            eachVideo => eachVideo.id !== videoDetailsData.id,
          ),
        }
      }
      return {savedVideos: [...prevState.savedVideos, videoDetailsData]}
    })
  }

  render() {
    const {isDark, likedVideos, dislikedVideos, savedVideos} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDark,
          likedVideos,
          dislikedVideos,
          savedVideos,
          toggleTheme: this.toggleTheme,
          updateVideosReaction: this.updateVideosReaction,
          updateSavedVideos: this.updateSavedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
