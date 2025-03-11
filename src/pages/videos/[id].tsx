import { useRouter } from 'next/router'
import Layout from '@/components/layout/Layout'
import VideoPlayer from '@/components/video/VideoPlayer'

export default function VideoDetail() {
  const router = useRouter()
  const { id } = router.query

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <VideoPlayer 
          videoUrl={`/videos/${id}.mp4`}
          thumbnail={`/thumbnails/${id}.jpg`}
        />
        
        <div className="mt-6">
          <h1 className="text-2xl font-bold">Video Titel</h1>
          <p className="text-gray-400 mt-2">1234 views</p>
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Reacties</h2>
            {/* Voeg hier de comments component toe */}
          </div>
        </div>
      </div>
    </Layout>
  )
} 