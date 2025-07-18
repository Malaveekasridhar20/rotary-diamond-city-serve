import React from "react";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

type Member = {
  name: string;
  linkedin: string;
  instagram: string;
  email: string;
};

const team: Member[] = [
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

const CreditsSection: React.FC = () => {
  return (
    <footer className="bg-[#002B7F] text-white py-6 text-center">
      <p className="text-lg font-semibold mb-4 text-[#FDB913]">
        Designed & Developed by
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {team.map((member, index) => (
          <div key={index} className="text-sm text-white">
            <p className="font-bold mb-2">{member.name}</p>
            <div className="flex justify-center gap-4 text-[#FDB913] text-xl">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href={`mailto:${member.email}`}>
                <FaEnvelope />
              </a>
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default CreditsSection;