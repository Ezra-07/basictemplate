"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FaCheckCircle } from "react-icons/fa";

export default function ThankYouPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [donationDetails, setDonationDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDonationDetails = async () => {
      if (!sessionId) {
        setIsLoading(false);
        return;
      }

      try {
        // In a real application, you would fetch the donation details from your backend
        // For this template, we'll simulate it with a timeout
        setTimeout(() => {
          setDonationDetails({
            amount: "$100.00",
            date: new Date().toLocaleDateString(),
            receiptNumber: `DON-${Math.floor(Math.random() * 1000000)}`,
          });
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching donation details:", error);
        setIsLoading(false);
      }
    };

    fetchDonationDetails();
  }, [sessionId]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {isLoading ? (
              <div className="flex justify-center items-center py-16">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="flex justify-center mb-6">
                  <FaCheckCircle className="text-green-500 text-6xl" />
                </div>
                
                <h1 className="text-3xl font-bold mb-4">Thank You for Your Donation!</h1>
                
                <p className="text-gray-600 text-lg mb-8">
                  Your generous contribution will help us make a difference in the lives of those we serve.
                </p>
                
                {donationDetails && (
                  <div className="bg-gray-50 p-6 rounded-lg mb-8 max-w-md mx-auto">
                    <h2 className="text-xl font-semibold mb-4">Donation Receipt</h2>
                    <div className="space-y-2 text-left">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Amount:</span>
                        <span className="font-medium">{donationDetails.amount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Date:</span>
                        <span className="font-medium">{donationDetails.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Receipt Number:</span>
                        <span className="font-medium">{donationDetails.receiptNumber}</span>
                      </div>
                    </div>
                  </div>
                )}
                
                <p className="text-gray-600 mb-8">
                  We've sent a confirmation email with your donation receipt. If you have any questions, please don't hesitate to contact us.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors"
                  >
                    Return to Home
                  </Link>
                  <Link 
                    href="/projects"
                    className="bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md font-medium transition-colors"
                  >
                    Explore Our Projects
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 