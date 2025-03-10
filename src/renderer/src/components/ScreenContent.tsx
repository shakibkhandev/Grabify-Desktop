import VideoCard from '../components/VideoCard';

export default function ScreenContent({
  videosList,
  title,
  onSearchQueryChange,
  searchQuery,
  onSubmit,
  onQualityChange,
  quality,
  qualityList,
  onDownloadClick
} : {
  videosList: object[],
  title: string,
  onSearchQueryChange: (query: string) => void,
  searchQuery: string,
  onSubmit: () => void,
  onQualityChange: (quality: string) => void,
  quality: string,
  qualityList: string[],
  onDownloadClick: () => void
}) {



  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(searchQuery);
      // Optional: Add some visual feedback
      console.log('URL copied to clipboard!');
      // You could also add a toast notification here if you have one
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }


  return (
    <div className="flex flex-col items-center p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">{title} Media Downloader</h1>
      
      <div className="w-full space-y-8">
        {/* Search input and button */}
        <div className="flex gap-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchQueryChange(e.target.value)}
            placeholder="Enter URL"
            className="flex-1 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          />
          <button
            onClick={onSubmit}
            className="px-8 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-md hover:bg-gray-700 dark:hover:bg-gray-600"
          >
            Get
          </button>
        </div>

        {/* Quality selector */}
        <div className="w-full">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">All types</p>
          <select
            value={quality}
            onChange={(e) => onQualityChange(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white appearance-none cursor-pointer"
          >
            <option value="1080p">1080p - Video + Audio</option>
            <option value="720p">720p - Video + Audio</option>
            <option value="480p">480p - Video + Audio</option>
          </select>
        </div>

        {/* Action buttons */}
        <div className="flex gap-4 justify-center mt-6">
          <button
            onClick={handleCopy}
            className="p-2 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
            </svg>
          </button>
          <button
            onClick={onDownloadClick}
            className="px-6 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-md hover:bg-gray-700 dark:hover:bg-gray-600 flex items-center gap-2"
          >
            Download
          </button>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {videosList.map((video, index) => (
            <VideoCard
              key={index}
              title={video.title}
              description={video.description}
              author={video.author}
              thumbnail={video.thumbnail}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
