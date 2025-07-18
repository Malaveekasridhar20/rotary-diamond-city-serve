import React from 'react';
import Hero from '../components/Hero';
import { Card } from '@/components/ui/card';

const Legacy = () => {
  const timeline = [
    {
      year: 1985,
      title: "Foundation Stone",
      description: "Rotary Club of Tiruchirappalli Diamond City was chartered on March 15, 1985, with 25 founding members led by Charter President Rtn. Dr. K. Raghunathan."
    },
    {
      year: 1987,
      title: "First Major Project",
      description: "Established our first rural health clinic in partnership with local government, serving over 500 families in remote villages."
    },
    {
      year: 1990,
      title: "Educational Initiative",
      description: "Launched the 'Light of Learning' scholarship program, providing educational support to 100+ underprivileged children annually."
    },
    {
      year: 1995,
      title: "International Recognition",
      description: "Received our first Rotary International Presidential Citation for outstanding community service and membership growth."
    },
    {
      year: 2000,
      title: "Millennium Project",
      description: "Initiated the 'Clean Water for All' project, installing 50 hand pumps and bore wells in drought-affected areas."
    },
    {
      year: 2005,
      title: "Youth Empowerment",
      description: "Established our first Rotaract and Interact clubs in local colleges, creating a network of 500+ young volunteers."
    },
    {
      year: 2010,
      title: "Healthcare Milestone",
      description: "Opened the Rotary Community Health Center, providing free medical care to over 10,000 patients annually."
    },
    {
      year: 2015,
      title: "Environmental Leadership",
      description: "Planted 1 million trees through our 'Green Trichy' initiative, making Tiruchirappalli one of India's greenest cities."
    },
    {
      year: 2020,
      title: "Pandemic Response",
      description: "Led COVID-19 relief efforts, distributing 50,000+ relief kits, establishing isolation centers, and supporting frontline workers."
    },
    {
      year: 2024,
      title: "Digital Transformation",
      description: "Launched digital literacy programs and established technology centers in 25 rural schools, impacting 5,000+ students."
    }
  ];

  const pastPresidents = [
    { name: "Dr. K. Raghunathan", year: "1985-86", designation: "Charter President", achievement: "Established the foundation" },
    { name: "Rtn. S. Krishnamurthy", year: "1986-87", designation: "President", achievement: "First community health project" },
    { name: "Rtn. M. Venkatesh", year: "1987-88", designation: "President", achievement: "Membership expansion" },
    { name: "Rtn. Dr. Priya Sharma", year: "2020-21", designation: "President", achievement: "COVID-19 relief leadership" },
    { name: "Rtn. R. Subramanian", year: "2021-22", designation: "President", achievement: "Digital transformation" },
    { name: "Rtn. A. Kavitha", year: "2022-23", designation: "President", achievement: "Women empowerment initiatives" },
    { name: "Rtn. Dr. M. Kumar", year: "2023-24", designation: "President", achievement: "Healthcare expansion" }
  ];

  const principles = [
    {
      title: "Service Above Self",
      description: "Our guiding principle that places community service at the heart of everything we do.",
      quote: "The way to get started is to quit talking and begin doing."
    },
    {
      title: "Fellowship",
      description: "Building bridges across communities, cultures, and countries through meaningful relationships.",
      quote: "In fellowship, we find strength; in service, we find purpose."
    },
    {
      title: "Diversity & Inclusion",
      description: "Embracing differences and creating opportunities for all members of our community.",
      quote: "Our diversity is our strength, our unity is our power."
    },
    {
      title: "Integrity",
      description: "Upholding the highest standards of honesty and ethical conduct in all our endeavors.",
      quote: "Integrity is doing the right thing when no one is watching."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero 
        title="Legacy of Rotary Club of Tiruchirappalli Diamond City"
        subtitle="Four Decades of Service • Countless Lives Changed • Endless Possibilities"
        backgroundImage="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      />

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8" style={{ color: '#002B7F' }}>
              A Rich Heritage of Service
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The Rotary Club of Tiruchirappalli Diamond City, chartered in 1985, stands as a pillar of selfless service and impactful leadership in RID 3000. With a legacy rooted in "Service Above Self," the club has pioneered numerous health camps, literacy initiatives, community development projects, and youth engagement programs. Over the decades, it has grown into a vibrant institution of changemakers, consistently earning accolades for its commitment to society. This legacy continues to inspire new generations of Rotarians to carry forward the torch of service, compassion, and transformation in every corner of Tiruchirappalli and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#002B7F' }}>
            Chronological Milestones
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-900 to-yellow-400"></div>
            
            <div className="space-y-12">
              {timeline.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-white z-10"
                       style={{ backgroundColor: '#FDB913' }}>
                  </div>
                  
                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:text-right md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                    <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-center mb-3" 
                           style={{ color: '#FDB913' }}>
                        <span className="text-2xl font-bold">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3" style={{ color: '#002B7F' }}>
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past Presidents Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#002B7F' }}>
            Leadership Legacy - Our Past Presidents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastPresidents.map((president, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center"
                       style={{ backgroundColor: '#002B7F' }}>
                    <span className="text-2xl font-bold" style={{ color: '#FDB913' }}>
                      {president.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#002B7F' }}>
                    {president.name}
                  </h3>
                  <p className="text-sm mb-2" style={{ color: '#FDB913' }}>
                    {president.designation} • {president.year}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {president.achievement}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founding Principles Section */}
      <section className="py-16" style={{ backgroundColor: '#002B7F', color: 'white' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Founding Principles</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              "The foundation of our club rests on four pillars that guide every action, 
              every project, and every relationship we build."
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <Card key={index} className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                       style={{ backgroundColor: '#FDB913' }}>
                    <span className="text-xl font-bold" style={{ color: '#002B7F' }}>
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#FDB913' }}>
                      {principle.title}
                    </h3>
                    <p className="text-blue-100 mb-4 leading-relaxed">
                      {principle.description}
                    </p>
                    <blockquote className="text-sm italic text-blue-200 border-l-2 pl-4"
                                style={{ borderColor: '#FDB913' }}>
                      "{principle.quote}"
                    </blockquote>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#002B7F' }}>
            Join Our Legacy
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Be part of a tradition that spans decades and impacts generations. 
            Together, we can continue building a legacy of service, fellowship, and positive change.
          </p>
          <div className="inline-block px-8 py-3 rounded-lg font-semibold text-white transition-colors hover:opacity-90"
               style={{ backgroundColor: '#FDB913' }}>
            <span style={{ color: '#002B7F' }}>Learn More About Membership</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legacy;