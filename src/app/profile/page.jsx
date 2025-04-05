import { getSession } from "@auth0/nextjs-auth0";
import React from "react";
import { Footer, Header } from "@/components";

export default async function ProfileServer() {
  const { user } = await getSession();

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white mt-16">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {user && (
            <div className="space-y-6">
              {/* Profile Summary */}
              <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-100">
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-8">
                  <div className="relative">
                    <img
                      src={user.picture}
                      alt={user.name}
                      className="h-24 w-24 rounded-xl shadow-md object-cover transform transition hover:scale-105"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-green-400 p-1.5 rounded-lg">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-center sm:text-left">
                    <h1 className="text-3xl font-bold text-gray-900">
                      {user.name}
                    </h1>
                    <p className="text-gray-600 mt-1">{user.email}</p>
                    <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start">
                      <span className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-600 rounded-full">
                        Verified Customer
                      </span>
                      <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-600 rounded-full">
                        {new Date(user.updated_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content Tabs */}
              <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
                <div className="border-b border-gray-200">
                  <nav className="-mb-px flex space-x-8 px-6" aria-label="Tabs">
                    {["Shipping Information", "Order History", "Settings"].map(
                      (tab) => (
                        <button
                          key={tab}
                          className={`py-4 px-1 border-b-2 ${
                            tab === "Shipping Information"
                              ? "border-purple-500 text-purple-600"
                              : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                          } font-medium text-sm`}
                        >
                          {tab}
                        </button>
                      )
                    )}
                  </nav>
                </div>

                <div className="p-6">
                  {/* Shipping Information Content */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact Details */}
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">
                          Contact Details
                        </h3>
                        <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
                          Edit
                        </button>
                      </div>
                      <div className="space-y-4">
                        {/* Phone inputs with improved styling */}
                        <div className="relative">
                          <label className="text-sm font-medium text-gray-700">
                            Primary Phone
                          </label>
                          <input
                            type="tel"
                            className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                            placeholder="Enter phone number"
                          />
                        </div>
                        {/* ... More contact fields ... */}
                      </div>
                    </div>

                    {/* Delivery Address */}
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">
                          Default Delivery Address
                        </h3>
                        <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
                          Change
                        </button>
                      </div>
                      {/* Address display card */}
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <div className="space-y-2">
                          <p className="text-gray-800">123 Example Street</p>
                          <p className="text-gray-600">Mabopane</p>
                          <p className="text-gray-600">Pretoria, 0001</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recent Orders Section */}
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Recent Orders
                    </h3>
                    <div className="bg-gray-50 rounded-lg divide-y divide-gray-200">
                      {[1, 2, 3].map((order) => (
                        <div
                          key={order}
                          className="p-4 hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                <svg
                                  className="w-6 h-6 text-purple-600"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                  />
                                </svg>
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900">
                                  Order #{12345 + order}
                                </p>
                                <p className="text-sm text-gray-500">
                                  Placed on {new Date().toLocaleDateString()}
                                </p>
                              </div>
                            </div>
                            <button className="flex items-center text-purple-600 hover:text-purple-700 text-sm font-medium">
                              View Details
                              <svg
                                className="w-4 h-4 ml-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
