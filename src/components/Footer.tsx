
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Club Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-blue-900 font-bold text-xl">R</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Rotary Club of Tiruchirappalli</h3>
                <p className="text-blue-200">Diamond City • RID 3000</p>
              </div>
            </div>
            <p className="text-blue-200 mb-4 max-w-md">
              "Service Above Self" - Dedicated to creating positive change in our community 
              through fellowship, integrity, diversity, and service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-blue-200 hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="text-blue-200 hover:text-yellow-400 transition-colors">Projects</Link></li>
              <li><Link to="/events" className="text-blue-200 hover:text-yellow-400 transition-colors">Events</Link></li>
              <li><Link to="/contact" className="text-blue-200 hover:text-yellow-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-blue-200">
              <p>📧 rotarytrichy@gmail.com</p>
              <p>📞 +91 431-2412345</p>
              <p>📍 Tiruchirappalli, Tamil Nadu</p>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-blue-200 hover:text-yellow-400 transition-colors">Facebook</a>
              <a href="#" className="text-blue-200 hover:text-yellow-400 transition-colors">Instagram</a>
              <a href="#" className="text-blue-200 hover:text-yellow-400 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; 2024 Rotary Club of Tiruchirappalli Diamond City. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
