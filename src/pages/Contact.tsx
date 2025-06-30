
import { useState } from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      <Hero 
        title="Contact Us"
        subtitle="Get in Touch • Join Our Mission • Make a Difference"
        backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68e2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      />

      {/* Contact Form & Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="mt-1"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="mt-1"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="mt-1"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="membership">Membership Inquiry</SelectItem>
                        <SelectItem value="volunteer">Volunteer Opportunity</SelectItem>
                        <SelectItem value="partnership">Partnership Proposal</SelectItem>
                        <SelectItem value="donation">Donation Inquiry</SelectItem>
                        <SelectItem value="event">Event Information</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                    className="mt-1 min-h-32"
                    placeholder="Tell us how we can help you or how you'd like to get involved..."
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">📧</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email Us</h3>
                      <p className="text-gray-600">rotarytrichy@gmail.com</p>
                      <p className="text-gray-600">president@rotarytrichy.org</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">📞</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Call Us</h3>
                      <p className="text-gray-600">+91 431-2412345</p>
                      <p className="text-gray-600">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">📍</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Visit Us</h3>
                      <p className="text-gray-600">
                        Rotary Club of Tiruchirappalli<br />
                        Diamond City Hall<br />
                        Anna Nagar, Tiruchirappalli<br />
                        Tamil Nadu - 620017
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">🕒</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Meeting Times</h3>
                      <p className="text-gray-600">
                        Regular Meetings: Every Thursday<br />
                        Time: 7:00 PM - 8:30 PM<br />
                        Venue: Hotel Sangam
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
                <div className="grid grid-cols-3 gap-4">
                  <a 
                    href="#" 
                    className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <div className="w-8 h-8 bg-blue-600 rounded-full mb-2"></div>
                    <span className="text-sm font-medium">Facebook</span>
                  </a>
                  <a 
                    href="#" 
                    className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <div className="w-8 h-8 bg-pink-600 rounded-full mb-2"></div>
                    <span className="text-sm font-medium">Instagram</span>
                  </a>
                  <a 
                    href="#" 
                    className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <div className="w-8 h-8 bg-blue-800 rounded-full mb-2"></div>
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 bg-red-50 border-red-200">
            <h3 className="text-xl font-bold text-red-900 mb-4">Emergency Contact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-red-800">Club Secretary</h4>
                <p className="text-red-700">Mrs. Priya Sharma</p>
                <p className="text-red-700">📞 +91 98765 43211</p>
                <p className="text-red-700">📧 secretary@rotarytrichy.org</p>
              </div>
              <div>
                <h4 className="font-semibold text-red-800">President</h4>
                <p className="text-red-700">Dr. Rajesh Kumar</p>
                <p className="text-red-700">📞 +91 98765 43210</p>
                <p className="text-red-700">📧 president@rotarytrichy.org</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Find Us</h2>
          <Card className="overflow-hidden">
            <div className="bg-gray-200 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📍</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive Map</h3>
                <p className="text-gray-600 mb-4">
                  Tiruchirappalli, Tamil Nadu<br />
                  (Map integration would go here)
                </p>
                <Button variant="outline">
                  Get Directions
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Join our community of dedicated individuals committed to service above self. 
            Together, we can create positive change in Tiruchirappalli and beyond.
          </p>
          <div className="space-x-4">
            <Button className="bg-yellow-400 text-blue-900 hover:bg-yellow-500">
              Join Rotary
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              Become a Volunteer
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
