import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaHandHoldingHeart, FaLightbulb, FaHandshake } from "react-icons/fa";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Jane Smith",
      role: "Executive Director",
      image: "/placeholder.jpg",
      bio: "Jane has over 15 years of experience in nonprofit leadership and is passionate about creating sustainable change.",
    },
    {
      name: "John Davis",
      role: "Program Director",
      image: "/placeholder.jpg",
      bio: "John oversees our global programs and has worked in community development for over a decade.",
    },
    {
      name: "Sarah Johnson",
      role: "Partnerships Manager",
      image: "/placeholder.jpg",
      bio: "Sarah builds strategic partnerships that amplify our impact and reach more communities in need.",
    },
    {
      name: "Michael Chen",
      role: "Financial Director",
      image: "/placeholder.jpg",
      bio: "Michael ensures transparency and efficiency in our financial operations to maximize our impact.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We're dedicated to creating lasting change through community-centered approaches and innovative solutions.
            </p>
          </div>
        </section>
        
        {/* Mission & Vision */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-6">
                  Our mission is to empower communities facing challenges by providing resources, education, and sustainable solutions that create lasting positive change.
                </p>
                <p className="text-gray-600">
                  We believe in a world where everyone has access to clean water, quality education, healthcare, and opportunities to thrive. Through collaborative partnerships and community-led initiatives, we work to make this vision a reality.
                </p>
              </div>
              <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                <p className="text-gray-500 text-center">Mission Image Placeholder</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                  <FaHandHoldingHeart className="text-blue-600 text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-4">Compassion</h3>
                <p className="text-gray-600">
                  We approach our work with empathy and understanding, recognizing the dignity and worth of every person we serve.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                  <FaLightbulb className="text-blue-600 text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We constantly seek creative and sustainable solutions to complex challenges, adapting our approaches as needed.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                  <FaHandshake className="text-blue-600 text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-4">Collaboration</h3>
                <p className="text-gray-600">
                  We believe in the power of partnerships and work closely with communities, organizations, and governments.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-64 bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">Team Member Photo</p>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                    <p className="text-blue-600 mb-4">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Impact Statistics */}
        <section className="py-16 bg-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-12">Our Impact</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <p className="text-5xl font-bold mb-2">10+</p>
                <p className="text-xl">Years of Service</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">50K+</p>
                <p className="text-xl">Lives Impacted</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">25+</p>
                <p className="text-xl">Countries Reached</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">100+</p>
                <p className="text-xl">Partner Organizations</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 