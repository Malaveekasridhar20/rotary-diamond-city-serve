
import { useState } from 'react';
import { ChevronDown, ChevronUp, Linkedin, Instagram, Facebook } from 'lucide-react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const Members = () => {
  const [selectedYear, setSelectedYear] = useState('2024-25');
  const [showPastMembers, setShowPastMembers] = useState(false);

  const currentMembers = [
    {
      name: 'Dr. Rajesh Kumar',
      designation: 'President',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      occupation: 'Chief Cardiologist, Apollo Hospital',
      linkedin: 'https://linkedin.com/in/rajeshkumar',
      instagram: 'https://instagram.com/dr_rajesh',
      facebook: 'https://facebook.com/rajesh.kumar'
    },
    {
      name: 'Mrs. Priya Sharma',
      designation: 'Secretary',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b691?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      occupation: 'Senior Partner, Sharma & Associates Law Firm',
      linkedin: 'https://linkedin.com/in/priyasharma',
      instagram: 'https://instagram.com/priya_sharma_law',
      facebook: 'https://facebook.com/priya.sharma'
    },
    {
      name: 'Mr. Suresh Babu',
      designation: 'Treasurer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      occupation: 'Managing Director, Trichy Steel Industries',
      linkedin: 'https://linkedin.com/in/sureshbabu',
      instagram: 'https://instagram.com/suresh_steel',
      facebook: 'https://facebook.com/suresh.babu'
    },
    {
      name: 'Dr. Lakshmi Menon',
      designation: 'Vice President',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      occupation: 'Head of Pediatrics, Government Medical College',
      linkedin: 'https://linkedin.com/in/lakshmimenon',
      instagram: 'https://instagram.com/dr_lakshmi',
      facebook: 'https://facebook.com/lakshmi.menon'
    },
    {
      name: 'Mr. Arun Krishnan',
      designation: 'Club Service Director',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      occupation: 'CEO, Krishnan Technologies',
      linkedin: 'https://linkedin.com/in/arunkrishnan',
      instagram: 'https://instagram.com/arun_tech',
      facebook: 'https://facebook.com/arun.krishnan'
    },
    {
      name: 'Mrs. Kavitha Rajan',
      designation: 'Community Service Director',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      occupation: 'Principal, St. Mary\'s Higher Secondary School',
      linkedin: 'https://linkedin.com/in/kavitharajan',
      instagram: 'https://instagram.com/kavitha_education',
      facebook: 'https://facebook.com/kavitha.rajan'
    },
    {
      name: 'Dr. Ramesh Gupta',
      designation: 'Member',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      occupation: 'Orthopedic Surgeon, JIPMER',
      linkedin: 'https://linkedin.com/in/rameshgupta',
      instagram: 'https://instagram.com/dr_ramesh_ortho',
      facebook: 'https://facebook.com/ramesh.gupta'
    },
    {
      name: 'Ms. Meera Nair',
      designation: 'Member',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      occupation: 'District Collector, Tiruchirappalli',
      linkedin: 'https://linkedin.com/in/meeranair',
      instagram: 'https://instagram.com/meera_collector',
      facebook: 'https://facebook.com/meera.nair'
    }
  ];

  const pastMembers = [
    { name: 'Dr. K. Srinivasan', designation: 'Past President', year: '2022-23' },
    { name: 'Mrs. R. Malathi', designation: 'Past President', year: '2021-22' },
    { name: 'Mr. S. Gopalakrishnan', designation: 'Past President', year: '2020-21' },
    { name: 'Dr. P. Vijayalakshmi', designation: 'Past President', year: '2019-20' },
    { name: 'Mr. N. Subramanian', designation: 'Past President', year: '2018-19' },
    { name: 'Mrs. L. Radhika', designation: 'Past President', year: '2017-18' },
    { name: 'Dr. M. Selvakumar', designation: 'Past President', year: '2016-17' },
    { name: 'Mr. V. Anandan', designation: 'Past President', year: '2015-16' },
    { name: 'Mrs. S. Praveena', designation: 'Past Secretary', year: '2022-23' },
    { name: 'Mr. R. Venkatesh', designation: 'Past Treasurer', year: '2021-22' }
  ];

  return (
    <div>
      <Hero 
        title="Members"
        subtitle="Leadership • Dedication • Service Excellence"
        backgroundImage="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      />

      {/* Year Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024-25">2024-25</SelectItem>
                <SelectItem value="2023-24">2023-24</SelectItem>
                <SelectItem value="2022-23">2022-23</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Current Members */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Current Members {selectedYear}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentMembers.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden group">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-900 font-semibold mb-2 text-sm">{member.designation}</p>
                  <p className="text-xs text-gray-600 mb-3 leading-tight">{member.occupation}</p>
                  
                  {/* Social Media Links */}
                  <div className="flex justify-center space-x-3">
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Linkedin size={16} />
                    </a>
                    <a 
                      href={member.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-pink-600 hover:text-pink-800 transition-colors"
                    >
                      <Instagram size={16} />
                    </a>
                    <a 
                      href={member.facebook} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Facebook size={16} />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Presidents & Members */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Collapsible open={showPastMembers} onOpenChange={setShowPastMembers}>
              <CollapsibleTrigger className="flex items-center justify-center mx-auto bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors">
                <span className="mr-2">View Past Presidents & Members</span>
                {showPastMembers ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </CollapsibleTrigger>
              
              <CollapsibleContent>
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Past Presidents & Members</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {pastMembers.map((member, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg border hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-gray-900">{member.name}</h4>
                        <p className="text-blue-900 font-semibold text-sm">{member.designation}</p>
                        <p className="text-gray-600 text-sm">{member.year}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Message from Our Members</h2>
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-xl italic mb-6">
              "Together, we are committed to creating positive change in our community. 
              Each member brings unique skills, experience, and passion to our mission of 
              'Service Above Self.' Through collaboration and dedication, we continue to 
              make a meaningful impact in Tiruchirappalli and beyond."
            </blockquote>
            <p className="text-blue-200">
              - Rotary Club of Tiruchirappalli Diamond City Members
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Members;
