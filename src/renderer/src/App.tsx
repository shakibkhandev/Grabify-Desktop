import Header from './components/Header'
import NavigationRail from './components/NavigationRail'

const App = () => {

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
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <span className="text-4xl">🏠</span>
            </div>
            <h1 className="text-4xl font-bold text-center mb-12">Acme Home</h1>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Team Section */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Team</h2>
                <div className="space-y-3">
                  <a href="#" className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                    <span>⭐</span>
                    <span>What's New</span>
                  </a>
                  {/* Add more team items similarly */}
                </div>
              </div>

              {/* Policies Section */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Policies</h2>
                <div className="space-y-3">
                  <a href="#" className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                    <span>📚</span>
                    <span>Office Manual</span>
                  </a>
                  {/* Add more policy items similarly */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
