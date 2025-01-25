import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Customer Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Customer Testimonials
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See what our clients are saying about us!
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 border border-gray-200 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-gray-200"></div>
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-gray-800">John Doe</h4>
                <p className="text-sm text-gray-500">Traffic Manager, CityTech</p>
              </div>
            </div>
            <p className="text-gray-600 italic mb-4">
              "This solution transformed our traffic management completely!"
            </p>
            <div className="flex items-center">
              {/* Star Rating (5 Stars) */}
              <div className="flex space-x-1 text-yellow-500">
                <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.39 2.833 1.03-6.008L.806 7.036l6.012-.874L10 1l2.181 5.162 6.013.874-4.837 4.789 1.03 6.008L10 15z"/></svg>
                <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.39 2.833 1.03-6.008L.806 7.036l6.012-.874L10 1l2.181 5.162 6.013.874-4.837 4.789 1.03 6.008L10 15z"/></svg>
                <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.39 2.833 1.03-6.008L.806 7.036l6.012-.874L10 1l2.181 5.162 6.013.874-4.837 4.789 1.03 6.008L10 15z"/></svg>
                <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.39 2.833 1.03-6.008L.806 7.036l6.012-.874L10 1l2.181 5.162 6.013.874-4.837 4.789 1.03 6.008L10 15z"/></svg>
                <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.39 2.833 1.03-6.008L.806 7.036l6.012-.874L10 1l2.181 5.162 6.013.874-4.837 4.789 1.03 6.008L10 15z"/></svg>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 border border-gray-200 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-gray-200"></div>
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-gray-800">Jane Smith</h4>
                <p className="text-sm text-gray-500">Operations Lead, SmartTraffic</p>
              </div>
            </div>
            <p className="text-gray-600 italic mb-4">
              "The analytics dashboard is incredibly user-friendly!"
            </p>
            <div className="flex items-center">
              {/* Star Rating (5 Stars) */}
              <div className="flex space-x-1 text-yellow-500">
                <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.39 2.833 1.03-6.008L.806 7.036l6.012-.874L10 1l2.181 5.162 6.013.874-4.837 4.789 1.03 6.008L10 15z"/></svg>
                <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.39 2.833 1.03-6.008L.806 7.036l6.012-.874L10 1l2.181 5.162 6.013.874-4.837 4.789 1.03 6.008L10 15z"/></svg>
                <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.39 2.833 1.03-6.008L.806 7.036l6.012-.874L10 1l2.181 5.162 6.013.874-4.837 4.789 1.03 6.008L10 15z"/></svg>
                <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.39 2.833 1.03-6.008L.806 7.036l6.012-.874L10 1l2.181 5.162 6.013.874-4.837 4.789 1.03 6.008L10 15z"/></svg>
                <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.39 2.833 1.03-6.008L.806 7.036l6.012-.874L10 1l2.181 5.162 6.013.874-4.837 4.789 1.03 6.008L10 15z"/></svg>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 border border-gray-200 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-gray-200"></div>
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-gray-800">Emily Johnson</h4>
                <p className="text-sm text-gray-500">Project Director, UrbanFlow</p>
              </div>
            </div>
            <p className="text-gray-600 italic mb-4">
              "Real-time updates have made our job so much easier!"
            </p>
            <div className="flex items-center">
              {/* Star Rating (5 Stars) */}
              <div className="flex space-x-1 text-yellow-500">
                <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.39 2.833 1.03-6.008L.806 7.036l6.012-.874L10 1l2.181 5.162 6.013.874-4.837 4.789 1.03 6.008L10 15z"/></svg>
                <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.39 2.833 1.03-6.008L.806 7.036l6.012-.874L10 1l2.181 5.162 6.013.874-4.837 4.789 1.03 6.008L10 15z"/></svg>
                <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.39 2.833 1.03-6.008L.806 7.036l6.012-.874L10 1l2.181 5.162 6.013.874-4.837 4.789 1.03 6.008L10 15z"/></svg>
                <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.39 2.833 1.03-6.008L.806 7.036l6.012-.874L10 1l2.181 5.162 6.013.874-4.837 4.789 1.03 6.008L10 15z"/></svg>
                <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.39 2.833 1.03-6.008L.806 7.036l6.012-.874L10 1l2.181 5.162 6.013.874-4.837 4.789 1.03 6.008L10 15z"/></svg>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-800 p-12 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Transform Your Traffic Experience
          </h3>
          <p className="text-gray-300 mb-6">
            Discover how our AI solutions can revolutionize traffic management for your community today!
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
              Learn More
            </button>
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition duration-300">
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
