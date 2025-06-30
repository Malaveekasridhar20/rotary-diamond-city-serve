
import Hero from '../components/Hero';
import Card from '../components/Card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Events = () => {
  const upcomingEvents = [
    {
      title: 'Annual Charity Gala',
      date: '2024-04-15',
      time: '7:00 PM',
      location: 'Grand Hotel, Tiruchirappalli',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Join us for an elegant evening of fundraising, fellowship, and celebrating our community impact.',
      category: 'Fundraising',
      registration: 'Open'
    },
    {
      title: 'Blood Donation Camp',
      date: '2024-04-20',
      time: '9:00 AM',
      location: 'Community Center, Anna Nagar',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Help save lives by donating blood. Free health check-up for all donors.',
      category: 'Health',
      registration: 'Open'
    },
    {
      title: 'Youth Leadership Workshop',
      date: '2024-05-05',
      time: '10:00 AM',
      location: 'PSG College of Technology',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Empowering young minds with leadership skills and career guidance.',
      category: 'Education',
      registration: 'Open'
    }
  ];

  const completedEvents = [
    {
      title: 'Tree Plantation Drive 2024',
      date: '2024-03-10',
      location: 'Uyyakondan Thirumalai',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Successfully planted 500 saplings with 100+ volunteers.',
      category: 'Environment',
      participants: '120+ volunteers',
      impact: '500 trees planted'
    },
    {
      title: 'Digital Literacy Training',
      date: '2024-02-25',
      location: 'Senior Citizens Center',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Taught smartphone and internet basics to 50+ senior citizens.',
      category: 'Education',
      participants: '60+ seniors',
      impact: 'Digital inclusion achieved'
    },
    {
      title: 'Community Health Camp',
      date: '2024-02-15',
      location: 'Rural Health Center, Manachanallur',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Free medical check-ups and medicines for rural community.',
      category: 'Health',
      participants: '200+ patients',
      impact: 'Free healthcare provided'
    },
    {
      title: 'Women Empowerment Seminar',
      date: '2024-01-28',
      location: 'Holy Cross College',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Inspiring women with entrepreneurship and leadership skills.',
      category: 'Community',
      participants: '150+ women',
      impact: 'Skills development achieved'
    },
    {
      title: 'Educational Material Distribution',
      date: '2024-01-15',
      location: 'Government Schools, Tiruchirappalli',
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Distributed books, stationery, and school bags to underprivileged children.',
      category: 'Education',
      participants: '300+ students',
      impact: 'Education support provided'
    },
    {
      title: 'New Year Fellowship Meet',
      date: '2024-01-07',
      location: 'Hotel Sangam',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Annual fellowship gathering with members and families.',
      category: 'Fellowship',
      participants: '80+ members',
      impact: 'Community bonding strengthened'
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Health': 'bg-red-100 text-red-800',
      'Education': 'bg-blue-100 text-blue-800',
      'Environment': 'bg-green-100 text-green-800',
      'Community': 'bg-purple-100 text-purple-800',
      'Fellowship': 'bg-yellow-100 text-yellow-800',
      'Fundraising': 'bg-orange-100 text-orange-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div>
      <Hero 
        title="Events"
        subtitle="Join Us • Learn • Serve • Celebrate"
        backgroundImage="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      />

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Upcoming Events</h2>
          <div className="space-y-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className={getCategoryColor(event.category)}>
                        {event.category}
                      </Badge>
                      <Badge variant="outline" className="border-green-500 text-green-700">
                        {event.registration}
                      </Badge>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                    
                    <div className="space-y-2 mb-4 text-gray-600">
                      <p>📅 {formatDate(event.date)}</p>
                      <p>🕒 {event.time}</p>
                      <p>📍 {event.location}</p>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{event.description}</p>
                    
                    <div className="flex space-x-4">
                      <Button className="bg-blue-900 hover:bg-blue-800">
                        Register Now
                      </Button>
                      <Button variant="outline">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Completed Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Recent Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedEvents.map((event, index) => (
              <Card key={index} className="overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <Badge className={`${getCategoryColor(event.category)} mb-3`}>
                    {event.category}
                  </Badge>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{formatDate(event.date)}</p>
                  <p className="text-sm text-gray-600 mb-3">📍 {event.location}</p>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Participants:</span>
                      <span className="font-semibold text-blue-900">{event.participants}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Impact:</span>
                      <span className="font-semibold text-blue-900">{event.impact}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Never miss an event! Subscribe to our newsletter or follow us on social media 
            for the latest updates on upcoming events and activities.
          </p>
          <div className="space-x-4">
            <Button className="bg-yellow-400 text-blue-900 hover:bg-yellow-500">
              Subscribe Newsletter
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              View Calendar
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
