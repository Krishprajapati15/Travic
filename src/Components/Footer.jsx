import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Us Section */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">About Us</h3>
          <p className="text-gray-400">
            We are a leading provider of AI-driven traffic management solutions,
            helping cities improve their traffic flow and reduce congestion
            through innovative technology.
          </p>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Traffic Monitoring</a></li>
            <li><a href="#" className="hover:text-white">AI Traffic Light Adjustment</a></li>
            <li><a href="#" className="hover:text-white">Data Analytics</a></li>
            <li><a href="#" className="hover:text-white">Smart City Integration</a></li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Whitepapers</a></li>
            <li><a href="#" className="hover:text-white">Case Studies</a></li>
            <li><a href="#" className="hover:text-white">Support</a></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Contact Info</h3>
          <p className="text-gray-400 mb-2">123 Traffic Lane, Cityville</p>
          <p className="text-gray-400 mb-2">Email: info@trafficai.com</p>
          <p className="text-gray-400">Phone: +1 234 567 890</p>
          <div className="mt-6 flex space-x-4">
            <a href="#" className="hover:text-white"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-white"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="hover:text-white"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-12 pt-6 text-center">
        <p className="text-gray-500">&copy; 2024 Traffic AI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
