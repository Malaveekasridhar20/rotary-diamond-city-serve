
import Hero from '../components/Hero';
import Card from '../components/Card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const About = () => {
  const awards = [
    { name: "Medical camps", emoji: "🥇" },
    { name: "Platinum Presidential citation award", emoji: "🥇" },
    { name: "Royal Vocational Service award", emoji: "🎖" },
    { name: "Blood donation camp award", emoji: "🏅" },
    { name: "Royal Community Service award", emoji: "🥉" },
    { name: "100% contribution to TRF award", emoji: "🎖" },
    { name: "Royal International Service award", emoji: "🥇" },
    { name: "Tree plantation award", emoji: "🥉" },
    { name: "Royal Public Image Service award", emoji: "🥇" },
    { name: "Polio Rally award", emoji: "🥉" },
    { name: "Royal Youth Service award", emoji: "🎖" },
    { name: "Dhasavatharam Project awards", emoji: "🎖" },
    { name: "Royal Supreme Star Award", emoji: "🥉" },
    { name: "Royal Super Star President", emoji: "🎖" },
    { name: "Royal Super Star Club", emoji: "🥇" },
    { name: "Royal Super Star Secretary", emoji: "🥉" },
    { name: "Royal Supreme Star Club", emoji: "🥇" }
  ];

  const milestones = [
    { year: 1985, event: "Charter established for Rotary Club of Tiruchirappalli Diamond City" },
    { year: 1990, event: "First major community health camp organized" },
    { year: 1995, event: "Education support program launched for underprivileged children" },
    { year: 2000, event: "Environmental conservation initiative started" },
    { year: 2005, event: "International partnership established with Sister Club in Australia" },
    { year: 2010, event: "Polio eradication drive intensified in rural areas" },
    { year: 2015, event: "Digital literacy program for senior citizens launched" },
    { year: 2020, event: "COVID-19 relief efforts - distributed 10,000+ relief kits" },
    { year: 2024, event: "Celebrating 39 years of dedicated community service" }
  ];

  const roadTracks = [
    {
      institution: "PSG College of Technology",
      programs: ["Rotaract Club", "Environmental Club", "Community Service Wing"],
      established: "1992",
      description: "Engineering students engage in technical innovation for social good"
    },
    {
      institution: "Holy Cross College",
      programs: ["Rotaract Club", "Youth Leadership Program", "Women Empowerment Initiative"],
      established: "1995",
      description: "Empowering young women leaders in arts and sciences"
    },
    {
      institution: "Bharathidasan University",
      programs: ["Rotaract Club", "Research for Society", "Rural Development Cell"],
      established: "1998",
      description: "Graduate students conducting research-based community projects"
    },
    {
      institution: "St. Joseph's Higher Secondary School",
      programs: ["Interact Club", "Eco Warriors", "Young Volunteers"],
      established: "2001",
      description: "Nurturing young minds with values of service and responsibility"
    },
    {
      institution: "National College",
      programs: ["Rotaract Club", "Social Innovation Lab", "Health Awareness Team"],
      established: "2005",
      description: "Students leading health and education initiatives in local communities"
    }
  ];

  return (
    <div>
      <Hero 
        title="About Our Club"
        subtitle="39 Years of Service • Building Communities • Changing Lives"
        backgroundImage="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      />

      {/* Club History */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our History</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 1985, the Rotary Club of Tiruchirappalli Diamond City has been a beacon of hope 
              and service in the heart of Tamil Nadu. Our club was chartered as part of Rotary International 
              District 3000, bringing together business and professional leaders united by the shared values 
              of fellowship, integrity, diversity, service, and leadership.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-6">
              Over nearly four decades, we have grown from a small group of dedicated individuals to a 
              vibrant community of 75+ active members. Our journey has been marked by countless acts of 
              service, from local community projects to international humanitarian efforts, always guided 
              by our motto "Service Above Self."
            </p>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ROTARY CLUB OF TIRUCHIRAPPALLI DIAMOND CITY
            </h2>
            <p className="text-xl text-blue-900 font-semibold">A Proud Recipient of 17 Prestigious Awards</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {awards.map((award, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{award.emoji}</span>
                  <span className="font-medium text-gray-900">{award.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide service to others, promote integrity, and advance world understanding, 
                goodwill, and peace through our fellowship of business, professional, and community 
                leaders. We are committed to addressing the changing needs of our community through 
                innovative projects and sustainable solutions.
              </p>
            </Card>
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading service organization in Tiruchirappalli, known for our impactful 
                community projects, ethical leadership, and unwavering commitment to creating positive 
                change. We envision a world where all people have access to quality education, 
                healthcare, and opportunities for prosperity.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Road Tracks Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Road Tracks - Our Educational Partnerships
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our Road Tracks program establishes Rotaract and Interact clubs in colleges and schools, 
            creating a network of young leaders committed to service. These partnerships foster leadership 
            development, community engagement, and social responsibility among students.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roadTracks.map((track, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-blue-900 font-semibold bg-blue-100 px-3 py-1 rounded-full">
                    Est. {track.established}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{track.institution}</h3>
                <p className="text-gray-600 mb-4">{track.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Active Programs:</h4>
                  <ul className="space-y-1">
                    {track.programs.map((program, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                        {program}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Journey</h2>
          <Accordion type="single" collapsible className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  <span className="font-bold text-blue-900">{milestone.year}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">{milestone.event}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-900 font-bold text-xl">S</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Service</h3>
              <p className="text-blue-200">Putting service above self in everything we do</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-900 font-bold text-xl">F</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Fellowship</h3>
              <p className="text-blue-200">Building lasting friendships across cultures</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-900 font-bold text-xl">I</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-blue-200">Upholding the highest ethical standards</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-900 font-bold text-xl">L</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Leadership</h3>
              <p className="text-blue-200">Developing leaders who create positive change</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
