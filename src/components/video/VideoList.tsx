import Link from 'next/link'
import Image from 'next/image'

interface Video {
  id: string
  title: string
  thumbnail: string
  views: number
}

const VideoList = ({ videos }: { videos: Video[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video) => (
        <Link 
          href={`/videos/${video.id}`} 
          key={video.id}
          className="group hover:transform hover:scale-105 transition-all"
        >
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <Image
              src={video.thumbnail}
              alt={video.title}
              width={400}
              height={225}
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">{video.title}</h3>
              <p className="text-gray-400">{video.views} views</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default VideoList 