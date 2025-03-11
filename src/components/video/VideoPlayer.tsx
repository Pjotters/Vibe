import { useRef, useEffect, useState } from 'react'

interface VideoPlayerProps {
  videoUrl: string
  thumbnail: string
}

const VideoPlayer = ({ videoUrl, thumbnail }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="relative w-full aspect-video">
      <video
        ref={videoRef}
        src={videoUrl}
        poster={thumbnail}
        className="w-full h-full object-cover rounded-lg"
        onClick={togglePlay}
      />
      <button
        className="absolute bottom-4 right-4 bg-white/80 p-2 rounded-full"
        onClick={togglePlay}
      >
        {isPlaying ? "⏸️" : "▶️"}
      </button>
    </div>
  )
}

export default VideoPlayer 