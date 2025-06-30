
import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import { Button } from '@/components/ui/button';

const Home = () => {
  const [projectCount, setProjectCount] = useState(0);
  const [beneficiaryCount, setBeneficiaryCount] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80", // People volunteering
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80", // Community service
    "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"  // Helping hands
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Animated counters
    const projectTimer = setInterval(() => {
      setProjectCount((prev) => prev < 25 ? prev + 1 : 25);
    }, 100);
    
    const beneficiaryTimer = setInterval(() => {
      setBeneficiaryCount((prev) => prev < 5000 ? prev + 100 : 5000);
    }, 50);

    return () => {
      clearInterval(projectTimer);
      clearInterval(beneficiaryTimer);
    };
  }, []);

  const recentProjects = [
    {
      title: "Blood Donation Drive",
      description: "Organized blood donation camp collecting 150+ units",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      date: "March 2024"
    },
    {
      title: "Education Support Program",
      description: "Providing educational materials to underprivileged children",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      date: "February 2024"
    },
    {
      title: "Environmental Clean-Up",
      description: "Community-wide initiative to clean local parks and rivers",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      date: "January 2024"
    }
  ];

  return (
    <div>
      {/* Hero Section with Carousel */}
      <Hero 
        title="Welcome to Rotary"
        subtitle="Service Above Self • Rotary Club of Tiruchirappalli Diamond City"
        backgroundImage={heroImages[currentImageIndex]}
        height="h-screen"
      />

      {/* Welcome Message */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Serving Our Community Since 1985
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            "The whole object of the Rotary Club is to serve. We meet together for fellowship, 
            but fellowship with a purpose, and that purpose is service to the community in which we live."
          </p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Recent Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-blue-900 font-semibold">{project.date}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Button variant="outline" className="text-blue-900 border-blue-900 hover:bg-blue-900 hover:text-white">
                    Read More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Highlight */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Upcoming Event</h2>
          <div className="bg-white bg-opacity-10 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Annual Charity Gala</h3>
            <p className="text-lg mb-4">Join us for an evening of fellowship and fundraising for our education initiative</p>
            <p className="text-yellow-400 font-semibold mb-6">April 15, 2024 • 7:00 PM • Grand Hotel</p>
            <Button className="bg-yellow-400 text-blue-900 hover:bg-yellow-500">
              Register Now
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">{projectCount}+</div>
              <div className="text-gray-600">Ongoing Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">{beneficiaryCount.toLocaleString()}+</div>
              <div className="text-gray-600">People Benefited</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">39</div>
              <div className="text-gray-600">Years of Service</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">75+</div>
              <div className="text-gray-600">Active Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Rotary Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Rotary International - District 3000</h2>
              <p className="text-gray-600 mb-4">
                Rotary members are people of action who see a world where people unite and take action 
                to create lasting change. For more than 110 years, our 1.2 million members have used 
                their passion, energy, and intelligence to take action on sustainable projects.
              </p>
              <p className="text-gray-600 mb-6">
                From literacy and peace to water and health, we are always working to better our world, 
                and we stay committed to the end.
              </p>
              <Button className="bg-blue-900 hover:bg-blue-800">
                Learn More About Rotary
              </Button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Rotary service"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
