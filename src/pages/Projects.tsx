
import { useState } from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Health', 'Education', 'Environment', 'Community', 'Youth'];

  const projects = [
    {
      title: 'Blood Donation Drive 2024',
      category: 'Health',
      year: '2024',
      status: 'Ongoing',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Quarterly blood donation camps to support local hospitals and emergency needs.',
      impact: '150+ units collected per camp',
      beneficiaries: '450+ patients helped'
    },
    {
      title: 'Digital Literacy for Seniors',
      category: 'Education',
      year: '2024',
      status: 'Ongoing',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Teaching smartphone and internet basics to senior citizens for better connectivity.',
      impact: '200+ seniors trained',
      beneficiaries: '200+ families connected'
    },
    {
      title: 'Clean River Initiative',
      category: 'Environment',
      year: '2023',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Community-wide river cleaning and pollution awareness campaign.',
      impact: '5km river stretch cleaned',
      beneficiaries: '50,000+ residents benefited'
    },
    {
      title: 'School Infrastructure Development',
      category: 'Education',
      year: '2023',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Renovating classrooms and building computer labs in rural schools.',
      impact: '5 schools renovated',
      beneficiaries: '1,200+ students'
    },
    {
      title: 'Youth Leadership Summit',
      category: 'Youth',
      year: '2024',
      status: 'Ongoing',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Annual summit to develop leadership skills among college students.',
      impact: '300+ participants',
      beneficiaries: '300+ future leaders'
    },
    {
      title: 'Community Health Camps',
      category: 'Health',
      year: '2023',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Free medical check-ups and treatment in underserved areas.',
      impact: '12 camps conducted',
      beneficiaries: '2,500+ patients treated'
    },
    {
      title: 'Women Empowerment Workshop',
      category: 'Community',
      year: '2024',
      status: 'Ongoing',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Skill development and entrepreneurship training for women.',
      impact: '150+ women trained',
      beneficiaries: '150+ families empowered'
    },
    {
      title: 'Tree Plantation Drive',
      category: 'Environment',
      year: '2023',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Large-scale tree plantation in urban and rural areas.',
      impact: '5,000+ trees planted',
      beneficiaries: 'Entire community'
    }
  ];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  return (
    <div>
      <Hero 
        title="Our Projects"
        subtitle="Creating Impact • Building Communities • Changing Lives"
        backgroundImage="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      />

      {/* Project Statistics */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">25+</div>
              <div className="text-gray-600">Active Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">50+</div>
              <div className="text-gray-600">Completed Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">10,000+</div>
              <div className="text-gray-600">Lives Impacted</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">₹50L+</div>
              <div className="text-gray-600">Investment Made</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50">
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

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-900">
                      {project.category}
                    </Badge>
                    <Badge 
                      variant={project.status === 'Ongoing' ? 'default' : 'outline'}
                      className={project.status === 'Ongoing' ? 'bg-green-100 text-green-800' : ''}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{project.year}</p>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Impact:</span>
                      <span className="font-semibold text-blue-900">{project.impact}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Beneficiaries:</span>
                      <span className="font-semibold text-blue-900">{project.beneficiaries}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-blue-900 hover:bg-blue-800">
                    Read More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us in Making a Difference</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Every project starts with a vision and grows through collaboration. 
            Be part of our mission to create positive change in the community.
          </p>
          <div className="space-x-4">
            <Button className="bg-yellow-400 text-blue-900 hover:bg-yellow-500">
              Volunteer Today
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              Propose a Project
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
