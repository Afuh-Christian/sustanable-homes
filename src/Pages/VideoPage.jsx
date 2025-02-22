
const videos = [
    {
      title: 'Volferda Factory Tour',
      image: '/api/placeholder/400/250',
    },
    {
      title: 'Volferda Camp Showroom Tour',
      image: '/api/placeholder/400/250',
    },
    {
      title: 'Volferda Capsule House E8 without balcony Tour',
      image: '/api/placeholder/400/250',
    },
    {
      title: 'Volferda Capsule House E8 with balcony Tour',
      image: '/api/placeholder/400/250',
    },
    {
      title: 'Volferda Apple Cabin A1 5.8m Tour',
      image: '/api/placeholder/400/250',
    },
    {
      title: 'Volferda Apple Cabin A1 8.5m Tour',
      image: '/api/placeholder/400/250',
    }
  ];




function VideoPage() {
  return (
    <div className="p-20">
    <h2 className="text-blue-600 text-2xl font-semibold mb-4">Video</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {videos.map((video, index) => (
        <div key={index} className="bg-white rounded-lg overflow-hidden shadow">
          <img
            src={video.image}
            alt={video.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <p className="text-sm text-gray-700">{video.title}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default VideoPage