import React from 'react'

const NxtWatchContext = React.createContext({
  isDark: true,
  toggleTheme: () => {},
  updateVideosReaction: () => {},
  updateSavedVideos: () => {},
  likedVideos: [],
  dislikedVideos: [],
  savedVideos: [],
})

export default NxtWatchContext
