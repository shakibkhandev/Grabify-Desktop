import ScreenContent from '@renderer/components/ScreenContent'
import React, { useState } from 'react'

export default function YoutubeContentScreen() {
  const [searchQuery, setSearchQuery] = useState('')
  const [quality, setQuality] = useState('1080p')
  const [qualityList, setQualityList] = useState(['1080p', '720p', '480p', '360p'])
  const [videosList, setVideosList] = useState([])

  const handleSearchQueryChange = (query: string) => {
    setSearchQuery(query)
      }

  const handleSubmit = () => {
    console.log('Searching for:', searchQuery, 'Quality:', quality)
  }

  const handleQualityChange = (quality: string) => {
    setQuality(quality)
  }

  const handleDownloadClick = () => {
    console.log('Downloading video with quality:', quality)
  }

  return (
    <div>
      <ScreenContent videosList={videosList} title="Youtube" onSearchQueryChange={handleSearchQueryChange} searchQuery={searchQuery} onSubmit={handleSubmit} onQualityChange={handleQualityChange} quality={quality} qualityList={qualityList} onDownloadClick={handleDownloadClick} />
    </div>
  )
}
