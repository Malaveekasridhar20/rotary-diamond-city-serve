
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Club Info */}
          <div>
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

        {/* Developer Credits Section */}
        <div className="border-t border-blue-800 mt-8 pt-8">
          <div className="max-w-4xl mx-auto">
            <h4 className="text-lg font-semibold mb-6 text-center">Designed & Developed by</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Praveen Kumar R.E */}
              <div className="text-center">
                <h5 className="font-semibold text-blue-200 mb-2">Praveen Kumar R.E</h5>
                <div className="flex justify-center space-x-3">
                  <a 
                    href="https://www.linkedin.com/in/praveen-kumar-r-e-b0292836b/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-yellow-400 transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://www.instagram.com/praveen_7b?igsh=NDU0dG9nZDRrdXNs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-yellow-400 transition-colors"
                  >
                    Instagram
                  </a>
                  <a 
                    href="mailto:praveenkumar7bp@gmail.com"
                    className="text-blue-200 hover:text-yellow-400 transition-colors"
                  >
                    Email
                  </a>
                </div>
              </div>

              {/* Malaveeka Sridhar */}
              <div className="text-center">
                <h5 className="font-semibold text-blue-200 mb-2">Malaveeka Sridhar</h5>
                <div className="flex justify-center space-x-3">
                  <a 
                    href="https://www.linkedin.com/in/malaveeka-sridhar-750b70252/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-yellow-400 transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://www.instagram.com/malaveekasridhar?igsh=emM1MHNiOXF4dXhl" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-yellow-400 transition-colors"
                  >
                    Instagram
                  </a>
                  <a 
                    href="mailto:malaveekasridhar20072004@gmail.com"
                    className="text-blue-200 hover:text-yellow-400 transition-colors"
                  >
                    Email
                  </a>
                </div>
              </div>

              {/* Vignesh H */}
              <div className="text-center">
                <h5 className="font-semibold text-blue-200 mb-2">Vignesh H</h5>
                <div className="flex justify-center space-x-3">
                  <a 
                    href="https://www.linkedin.com/in/vigneshhariraj" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-yellow-400 transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://www.instagram.com/_vignesh_exe_?igsh=MXhrd2NvbzhiaHV6cQ==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-yellow-400 transition-colors"
                  >
                    Instagram
                  </a>
                  <a 
                    href="mailto:vigneshhariraj@gmail.com"
                    className="text-blue-200 hover:text-yellow-400 transition-colors"
                  >
                    Email
                  </a>
                </div>
              </div>
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
