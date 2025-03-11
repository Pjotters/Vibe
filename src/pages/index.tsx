import Layout from '@/components/layout/Layout'
import VideoList from '@/components/video/VideoList'

const dummyVideos = [
  {
    id: '1',
    title: 'Awesome Video 1',
    thumbnail: '/thumbnails/1.jpg',
    views: 1234
  },
  // Voeg meer dummy videos toe
]

export default function Home() {
  return (
    <Layout>
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-8">Welkom bij Pjotters-Vibe</h1>
        <p className="text-xl text-gray-300">Ontdek de beste video's van onze community</p>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-6">Trending Videos</h2>
        <VideoList videos={dummyVideos} />
      </section>
    </Layout>
  )
} 