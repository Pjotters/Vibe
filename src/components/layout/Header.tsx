import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-gray-900 text-white">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Pjotters-Vibe
          </Link>
          <div className="flex space-x-4">
            <Link href="/videos" className="hover:text-gray-300">
              Videos
            </Link>
            <Link href="/upload" className="hover:text-gray-300">
              Upload
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header 