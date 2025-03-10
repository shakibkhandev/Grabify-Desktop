import { useGlobalContext } from '@renderer/context/GlobalContextProvider'
import Header from './components/Header'
import NavigationRail from './components/NavigationRail'
import FacebookContentScreen from './contents/FacebookContentScreen'
import InstagramContentScreen from './contents/InstagramContentScreen'
import TiktokContentScreen from './contents/TiktokContentScreen'
import YoutubeContentScreen from './contents/YoutubeContentScreen'
const App = () => {
  const {screenContent} = useGlobalContext()  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Sidebar */}

      <NavigationRail />

      {/* Main Content */}
      <main className="ml-16 transition-all duration-300">
        {/* Header with Actions */}
      <Header />

        {/* Main Content Container */}
        <div className="p-8">
          {/* Header */}
          {screenContent === "youtube" && <YoutubeContentScreen />}
          {screenContent === "facebook" && <FacebookContentScreen />}
          {screenContent === "instagram" && <InstagramContentScreen />}
          {screenContent === "tiktok" && <TiktokContentScreen />}
        </div>
      </main>
    </div>
  )
}

export default App
