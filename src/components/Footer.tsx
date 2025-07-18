
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const team = [
    {
      name: "Praveen Kumar R.E",
      linkedin: "https://www.linkedin.com/in/praveen-kumar-r-e-b0292836b/",
      instagram: "https://www.instagram.com/praveen_7b?igsh=NDU0dG9nZDRrdXNs",
      email: "praveenkumar7bp@gmail.com"
    },
    {
      name: "Malaveeka Sridhar",
      linkedin: "https://www.linkedin.com/in/malaveeka-sridhar-750b70252/",
      instagram: "https://www.instagram.com/malaveekasridhar?igsh=emM1MHNiOXF4dXhl",
      email: "malaveekasridhar20072004@gmail.com"
    },
    {
      name: "Vignesh H",
      linkedin: "https://www.linkedin.com/in/vigneshhariraj",
      instagram: "https://www.instagram.com/_vignesh_exe_?igsh=MXhrd2NvbzhiaHV6cQ==",
      email: "vigneshhariraj@gmail.com"
    }
  ];

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

          {/* Developer Credits - Center Column */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-6 text-yellow-400">Designed & Developed by</h4>
            <div className="space-y-6">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <p className="font-bold text-lg mb-2 text-white">{member.name}</p>
                  <div className="flex justify-center gap-4 text-yellow-400 text-xl">
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-white hover:scale-110 transition-all duration-200"
                    >
                      <FaLinkedin />
                    </a>
                    <a 
                      href={member.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-white hover:scale-110 transition-all duration-200"
                    >
                      <FaInstagram />
                    </a>
                    <a 
                      href={`mailto:${member.email}`}
                      className="hover:text-white hover:scale-110 transition-all duration-200"
                    >
                      <FaEnvelope />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Empty third column for spacing */}
          <div></div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; 2024 Rotary Club of Tiruchirappalli Diamond City. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
