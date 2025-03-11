const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Pjotters-Vibe</h3>
            <p className="mt-2">Deel je mooiste momenten</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">Over ons</a>
            <a href="#" className="hover:text-white">Contact</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 