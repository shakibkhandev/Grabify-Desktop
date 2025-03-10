import "../assets/header.css"

import "../assets/header.css"

export default function Header() {

  return (
    <div className="sticky top-0 z-10 backdrop-blur-md bg-white/75 dark:bg-gray-900/75 border-b border-gray-200/50 dark:border-gray-700/50 h-16 header-webkit">
      <div className="flex items-center justify-end h-full px-4">
        <div className="flex items-center space-x-2">
          {/* Action Buttons */}
          <button className="p-2 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl text-gray-600 dark:text-gray-300 hover:scale-105">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          
          {/* Other action buttons with same styling pattern */}
          <button className="p-2 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl text-gray-600 dark:text-gray-300 hover:scale-105">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
          
          <button className="p-2 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl text-gray-600 dark:text-gray-300 hover:scale-105">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </button>

          {/* Profile Avatar */}
          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full ring-2 ring-white dark:ring-gray-800"></div>

          {/* Window Control Icons */}
          <div className="flex items-center space-x-1.5 ml-4 border-l border-gray-200 dark:border-gray-700 pl-4">
            <button className="p-2 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl text-gray-600 dark:text-gray-300 btn" onClick={() => window.context.send("minimize")}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 12h12" />
              </svg>
            </button>

            <button className="p-2 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl text-gray-600 dark:text-gray-300 btn" onClick={() => window.context.send("maximize")}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4h16v16H4z" />
              </svg>
            </button>

            <button className="p-2 transition-all duration-200 hover:bg-red-100 dark:hover:bg-red-900/50 rounded-xl text-gray-600 dark:text-gray-300 btn" onClick={() => window.context.send("close")}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 6L18 18M6 18L18 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
