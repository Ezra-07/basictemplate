import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { FaHandHoldingHeart, FaUsers, FaGlobe } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-blue-700 text-white">
        <div className="absolute inset-0 z-0 opacity-30 bg-[url('/hero-bg.jpg')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Making a Difference Together
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl">
            Join our mission to create positive change in communities around the world through innovative solutions and compassionate action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/donate" 
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-md font-medium text-lg transition-colors"
            >
              Donate Now
            </Link>
            <Link 
              href="/projects" 
              className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-md font-medium text-lg transition-colors"
            >
              Our Projects
            </Link>
          </div>
        </div>
      </section>
      
      {/* Impact Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                <FaHandHoldingHeart className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-2">$2.5M+</h3>
              <p className="text-gray-600">Raised for communities in need</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                <FaUsers className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-2">50,000+</h3>
              <p className="text-gray-600">People directly helped</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                <FaGlobe className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-2">25+</h3>
              <p className="text-gray-600">Countries with active projects</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our current initiatives making an impact around the world
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">Project Title {project}</h3>
                  <p className="text-gray-600 mb-4">
                    Brief description of the project and its impact on the community.
                  </p>
                  <Link 
                    href={`/projects/${project}`}
                    className="text-blue-600 font-medium hover:text-blue-800"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link
              href="/projects"
              className="inline-block bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Your support can transform lives. Join us in our mission to create lasting change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md font-medium text-lg transition-colors"
            >
              Donate Now
            </Link>
            <Link
              href="/volunteer"
              className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-md font-medium text-lg transition-colors"
            >
              Volunteer
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
