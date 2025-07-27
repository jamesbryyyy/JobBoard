import { useState } from "react";
import JobFilter from "../components/JobFilter";
import { Link } from "react-router-dom";

function Home() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <h1 className="text-xl sm:text-2xl font-bold text-blue-600">
              🌟 Job Board
            </h1>

            {/* Desktop Menu */}
            <div className="hidden sm:flex space-x-4 items-center">
              <Link to="/" className="hover:text-blue-600">Home</Link>
              <button onClick={() => setLoginModalOpen(true)} className="hover:text-blue-600">
                Log in
              </button>
              <Link to="/add-job" className="text-blue-500 hover:underline">
                Post Job
              </Link>
            </div>

            {/* Hamburger Button (Mobile) */}
            <button
              className="sm:hidden text-gray-600 focus:outline-none"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden px-4 pb-4">
            <Link to="/" className="block py-2 hover:text-blue-600">Home</Link>
            <button
              onClick={() => {
                setLoginModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="block py-2 hover:text-blue-600"
            >
              Log in
            </button>
            <Link to="/add-job" className="block py-2 text-blue-500 hover:underline">
              Post Job
            </Link>
          </div>
        )}
      </nav>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-semibold mb-4">Login</h2>
            <p className="text-sm text-gray-600 mb-4">Login form goes here.</p>
            <button
              onClick={() => setLoginModalOpen(false)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <JobFilter />
        </section>
      </main>
    </div>
  );
}

export default Home;
