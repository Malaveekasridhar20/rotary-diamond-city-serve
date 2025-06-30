
import { useState } from 'react';
import Hero from '../components/Hero';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filters = ['All', 'Community Service', 'Events', 'Health Camps', 'Education', 'Environment'];

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: 'Community Volunteering',
      category: 'Community Service',
      description: 'Members volunteering at local community center'
    },
    {
      src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: 'Blood Donation Drive',
      category: 'Health Camps',
      description: 'Annual blood donation camp 2024'
    },
    {
      src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: 'Charity Gala Evening',
      category: 'Events',
      description: 'Annual fundraising gala event'
    },
    {
      src: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: 'School Visit Program',
      category: 'Education',
      description: 'Educational support program in rural schools'
    },
    {
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: 'Tree Plantation Drive',
      category: 'Environment',
      description: 'Environmental conservation initiative'
    },
    {
      src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: 'Free Medical Camp',
      category: 'Health Camps',
      description: 'Healthcare services in rural areas'
    },
    {
      src: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: 'Youth Leadership Summit',
      category: 'Events',
      description: 'Annual youth development program'
    },
    {
      src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: 'Women Empowerment Workshop',
      category: 'Community Service',
      description: 'Skill development for women'
    },
    {
      src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: 'River Cleaning Campaign',
      category: 'Environment',
      description: 'Community river conservation project'
    },
    {
      src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: 'Digital Literacy Program',
      category: 'Education',
      description: 'Technology training for seniors'
    },
    {
      src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: 'Community Support Initiative',
      category: 'Community Service',
      description: 'Helping families in need'
    },
    {
      src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: 'Fellowship Meeting',
      category: 'Events',
      description: 'Monthly fellowship gathering'
    }
  ];

  const filteredImages = selectedFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedFilter);

  return (
    <div>
      <Hero 
        title="Gallery"
        subtitle="Capturing Moments • Celebrating Service • Preserving Memories"
        backgroundImage="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      />

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                onClick={() => setSelectedFilter(filter)}
                className={selectedFilter === filter ? "bg-blue-900 hover:bg-blue-800" : ""}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Load More Section */}
      <section className="py-8 bg-gray-50 text-center">
        <Button className="bg-blue-900 hover:bg-blue-800">
          Load More Images
        </Button>
      </section>

      {/* Modal for Image Preview */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt="Gallery preview"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Photo Submission CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Share Your Moments</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Have photos from our events or activities? We'd love to feature them in our gallery. 
            Help us document our journey of service and fellowship.
          </p>
          <Button className="bg-yellow-400 text-blue-900 hover:bg-yellow-500">
            Submit Photos
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
