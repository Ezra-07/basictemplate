"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const predefinedAmounts = [25, 50, 100, 250, 500];

export default function DonatePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");
  const [isCustomAmount, setIsCustomAmount] = useState(false);
  const router = useRouter();
  
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setIsCustomAmount(false);
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setIsCustomAmount(true);
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    
    try {
      const amount = isCustomAmount ? parseFloat(customAmount) : selectedAmount;
      
      // Call your API to create a checkout session
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: amount * 100, // Convert to cents for Stripe
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const { sessionId } = await response.json();
      
      // Redirect to Stripe checkout
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({ sessionId });
      
      if (error) {
        console.error("Error redirecting to checkout:", error);
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Make a Donation</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Your generosity helps us continue our mission to support communities in need around the world.
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Select Donation Amount</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
                    {predefinedAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => handleAmountSelect(amount)}
                        className={`py-3 px-4 border rounded-md font-medium ${
                          selectedAmount === amount && !isCustomAmount
                            ? "bg-blue-600 text-white border-blue-600"
                            : "bg-white text-gray-700 border-gray-300 hover:border-blue-500"
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                    <div className={`py-2 px-4 border rounded-md flex items-center ${
                      isCustomAmount
                        ? "border-blue-500 ring-2 ring-blue-200"
                        : "border-gray-300"
                    }`}>
                      <span className="text-gray-500">$</span>
                      <input
                        type="number"
                        placeholder="Other"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        className="w-full border-none focus:outline-none focus:ring-0 p-1"
                        min="1"
                        step="0.01"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-4">Your Information</h2>
                  
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        {...register("name", { required: "Name is required" })}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                          errors.name ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register("email", { 
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message (Optional)
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        {...register("message")}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Share why you're donating or any special instructions"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium text-lg transition-colors flex justify-center items-center"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      `Donate ${isCustomAmount ? `$${customAmount}` : `$${selectedAmount}`}`
                    )}
                  </button>
                </div>
              </form>
            </div>
            
            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Your donation helps us:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide clean water to communities in need</li>
                <li>Support education programs for underprivileged children</li>
                <li>Deliver essential medical supplies to remote areas</li>
                <li>Fund sustainable development projects</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 