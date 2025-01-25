import React from 'react';

const Feature = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left Side: Main Text */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transforming Traffic Management with Smart Solutions
            </h2>
            <p className="text-lg text-gray-500 mb-6">
              Explore how AI-driven traffic management solutions can reduce congestion and optimize traffic flow.
            </p>
            <button className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-700">
              Learn More
            </button>
          </div>
          
          {/* Right Side: Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Stay Ahead with Real-Time Traffic Monitoring
                </h3>
                <p className="mt-2 text-gray-600">
                  Monitor and adjust traffic flow in real-time with our AI-powered system.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Smart Solutions with AI-Driven Adjustments
                </h3>
                <p className="mt-2 text-gray-600">
                  Optimize traffic management with AI-driven adjustments that respond to live conditions.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Gain Insights with Detailed Analytics Dashboard
                </h3>
                <p className="mt-2 text-gray-600">
                  Access comprehensive analytics to make informed decisions.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Engaging Visuals for Enhanced User Experience
                </h3>
                <p className="mt-2 text-gray-600">
                  Display data in an interactive and user-friendly way.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Discover the Future of Traffic Management with Our Innovative AI Solutions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <div className="h-40 bg-gray-200 rounded mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Experience Real-Time Traffic Monitoring and Dynamic Adjustments Like Never Before
            </h3>
            <p className="text-gray-600">
              Our innovative solutions allow for unparalleled traffic management.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <div className="h-40 bg-gray-200 rounded mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Interactive Dashboards Provide Insights into Traffic Patterns and Performance Metrics
            </h3>
            <p className="text-gray-600">
              Visualize data in real-time and gain insights with our detailed dashboards.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <div className="h-40 bg-gray-200 rounded mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Seamless Integration with Existing Infrastructure for Effortless Implementation
            </h3>
            <p className="text-gray-600">
              Easily integrate with your existing systems for a smooth transition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
