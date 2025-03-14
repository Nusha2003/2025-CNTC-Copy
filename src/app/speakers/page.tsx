export default function Speakers() {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-[#0c1233]">
        <h1 className="text-4xl font-bold text-white mb-8">Our Speakers</h1>
  
        {/* Grid Layout for Speakers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 mt-4 px-4">
          {/* Speaker 1 */}
          <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-lg p-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Speaker 1"
              className="rounded-full w-32 h-32 object-cover mb-4"
            />
            <h2 className="text-xl font-semibold">Dr. Philip Sabes</h2>
            <p className="text-sm text-gray-500">CEO at Tech Company</p>
          </div>
  
          {/* Speaker 2 */}
          <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-lg p-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Speaker 2"
              className="rounded-full w-32 h-32 object-cover mb-4"
            />
            <h2 className="text-xl font-semibold">Spero Kkoul</h2>
            <p className="text-sm text-gray-500">Professor at University</p>
          </div>
  
          {/* Speaker 3 */}
          <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-lg p-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Speaker 3"
              className="rounded-full w-32 h-32 object-cover mb-4"
            />
            <h2 className="text-xl font-semibold">Alice Johnson</h2>
            <p className="text-sm text-gray-500">Lead Researcher at XYZ Lab</p>
          </div>
  
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 mt-16 px-4">
          {/* Speaker 1 */}
          <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-lg p-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Speaker 1"
              className="rounded-full w-32 h-32 object-cover mb-4"
            />
            <h2 className="text-xl font-semibold">John Doe</h2>
            <p className="text-sm text-gray-500">CEO at Tech Company</p>
          </div>
  
          {/* Speaker 2 */}
          <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-lg p-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Speaker 2"
              className="rounded-full w-32 h-32 object-cover mb-4"
            />
            <h2 className="text-xl font-semibold">Jane Smith</h2>
            <p className="text-sm text-gray-500">Professor at University</p>
          </div>
  
          {/* Speaker 3 */}
          <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-lg p-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Speaker 3"
              className="rounded-full w-32 h-32 object-cover mb-4"
            />
            <h2 className="text-xl font-semibold">Alice Johnson</h2>
            <p className="text-sm text-gray-500">Lead Researcher at XYZ Lab</p>
          </div>
  
        </div>
      </main>
    );
  }
  
  
