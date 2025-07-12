
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FolderOpen, Calendar, Users, MessageSquare, Activity, TrendingUp, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const { data: stats, isLoading } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const [
        { count: projectsCount },
        { count: eventsCount },
        { count: membersCount },
        { count: messagesCount }
      ] = await Promise.all([
        supabase.from('projects').select('*', { count: 'exact', head: true }),
        supabase.from('events').select('*', { count: 'exact', head: true }),
        supabase.from('pst_members').select('*', { count: 'exact', head: true }),
        supabase.from('contact_messages').select('*', { count: 'exact', head: true })
      ]);

      return {
        projects: projectsCount || 0,
        events: eventsCount || 0,
        members: membersCount || 0,
        messages: messagesCount || 0
      };
    }
  });

  const { data: upcomingEvents } = useQuery({
    queryKey: ['upcoming-events'],
    queryFn: async () => {
      const { data } = await supabase
        .from('events')
        .select('*')
        .gte('event_date', new Date().toISOString().split('T')[0])
        .order('event_date', { ascending: true })
        .limit(5);
      
      return data || [];
    }
  });

  const { data: recentMessages } = useQuery({
    queryKey: ['recent-messages'],
    queryFn: async () => {
      const { data } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);
      
      return data || [];
    }
  });

  const statCards = [
    {
      title: 'Total Projects',
      value: stats?.projects || 0,
      icon: FolderOpen,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      description: 'Active projects',
      route: '/admin/projects'
    },
    {
      title: 'Total Events',
      value: stats?.events || 0,
      icon: Calendar,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      description: 'Scheduled events',
      route: '/admin/events'
    },
    {
      title: 'PST Members',
      value: stats?.members || 0,
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      description: 'Team members',
      route: '/admin/members'
    },
    {
      title: 'Messages',
      value: stats?.messages || 0,
      icon: MessageSquare,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      description: 'Contact inquiries',
      route: '/admin/messages'
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Welcome Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Activity className="w-8 h-8 text-primary" />
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            </div>
            <p className="text-gray-600">Rotary Club of Tiruchirappalli Diamond City</p>
            <div className="mt-2 px-3 py-1 bg-primary/10 text-primary text-sm rounded-full inline-flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              System Active
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card 
              key={stat.title} 
              className="hover:shadow-lg transition-all cursor-pointer border-l-4 border-l-primary"
              onClick={() => navigate(stat.route)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-2">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Dashboard Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Upcoming Events
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => navigate('/admin/events')}
              >
                <Plus className="w-4 h-4 mr-1" />
                Add Event
              </Button>
            </CardTitle>
            <CardDescription>Events scheduled for the coming days</CardDescription>
          </CardHeader>
          <CardContent>
            {upcomingEvents && upcomingEvents.length > 0 ? (
              <div className="space-y-3">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                    <div>
                      <h3 className="font-medium">{event.title}</h3>
                      <p className="text-sm text-gray-600">
                        {event.event_date && new Date(event.event_date).toLocaleDateString()}
                        {event.event_time && ` at ${event.event_time}`}
                      </p>
                      {event.location && (
                        <p className="text-sm text-gray-500">{event.location}</p>
                      )}
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      event.is_member_only 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {event.is_member_only ? 'Members Only' : 'Public'}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <Calendar className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                <p>No upcoming events</p>
                <Button 
                  variant="outline" 
                  className="mt-2"
                  onClick={() => navigate('/admin/events')}
                >
                  Create First Event
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent Messages */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Recent Messages
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => navigate('/admin/messages')}
              >
                View All
              </Button>
            </CardTitle>
            <CardDescription>Latest contact form submissions</CardDescription>
          </CardHeader>
          <CardContent>
            {recentMessages && recentMessages.length > 0 ? (
              <div className="space-y-3">
                {recentMessages.map((message) => (
                  <div key={message.id} className="p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-medium">{message.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{message.email}</p>
                        <p className="text-sm text-gray-700 line-clamp-2">{message.message}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {!message.is_read && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        )}
                        <span className="text-xs text-gray-500">
                          {new Date(message.created_at).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <MessageSquare className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                <p>No messages yet</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Quick Actions
          </CardTitle>
          <CardDescription>Common administrative tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button 
              variant="outline" 
              className="h-auto p-6 flex flex-col items-center gap-3 hover:bg-primary/5 hover:border-primary"
              onClick={() => navigate('/admin/projects')}
            >
              <FolderOpen className="w-8 h-8 text-gray-400" />
              <span className="text-sm font-medium">Manage Projects</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-auto p-6 flex flex-col items-center gap-3 hover:bg-primary/5 hover:border-primary"
              onClick={() => navigate('/admin/events')}
            >
              <Calendar className="w-8 h-8 text-gray-400" />
              <span className="text-sm font-medium">Schedule Event</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-auto p-6 flex flex-col items-center gap-3 hover:bg-primary/5 hover:border-primary"
              onClick={() => navigate('/admin/members')}
            >
              <Users className="w-8 h-8 text-gray-400" />
              <span className="text-sm font-medium">Manage PST Members</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-auto p-6 flex flex-col items-center gap-3 hover:bg-primary/5 hover:border-primary"
              onClick={() => navigate('/admin/messages')}
            >
              <MessageSquare className="w-8 h-8 text-gray-400" />
              <span className="text-sm font-medium">View Messages</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
