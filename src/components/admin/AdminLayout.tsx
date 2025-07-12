
import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  FolderOpen, 
  Calendar, 
  Users, 
  MessageSquare, 
  LogOut,
  Settings,
  Shield,
  BarChart3,
  Globe
} from 'lucide-react';

const AdminLayout = () => {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const menuItems = [
    { path: '/admin', icon: LayoutDashboard, label: 'Dashboard Overview', exact: true },
    { path: '/admin/projects', icon: FolderOpen, label: 'Manage Projects' },
    { path: '/admin/events', icon: Calendar, label: 'Manage Events' },
    { path: '/admin/members', icon: Users, label: 'PST Members' },
    { path: '/admin/messages', icon: MessageSquare, label: 'Messages Inbox' },
    { path: '/admin/settings', icon: Settings, label: 'Admin Settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Enhanced Sidebar */}
      <div className="w-64 bg-white shadow-lg border-r border-gray-200 flex flex-col">
        {/* Enhanced Header */}
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8" />
            <div>
              <h1 className="text-xl font-bold">Admin Control</h1>
              <p className="text-sm opacity-90">Website Management</p>
            </div>
          </div>
        </div>

        {/* User Info */}
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 truncate">{user?.email}</p>
              <p className="text-xs text-gray-600">System Administrator</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full inline-flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              Admin Access
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open('/', '_blank')}
              className="text-xs"
            >
              <Globe className="w-3 h-3 mr-1" />
              View Site
            </Button>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 py-4">
          <div className="px-4 mb-4">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Website Management
            </p>
          </div>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.exact 
              ? location.pathname === item.path 
              : location.pathname.startsWith(item.path) && location.pathname !== '/admin';
            
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center px-6 py-3 text-left hover:bg-primary/5 transition-all duration-200 ${
                  isActive 
                    ? 'bg-primary/10 text-primary border-r-4 border-primary font-medium shadow-sm' 
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                <span className="text-sm">{item.label}</span>
                {isActive && (
                  <div className="ml-auto w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                )}
              </button>
            );
          })}
        </nav>

        {/* System Status */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center gap-2 mb-3">
            <BarChart3 className="w-4 h-4 text-green-600" />
            <span className="text-xs font-medium text-gray-700">System Status</span>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">Database</span>
              <span className="text-green-600 font-medium">Online</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">Auth System</span>
              <span className="text-green-600 font-medium">Active</span>
            </div>
          </div>
        </div>
        
        {/* Logout */}
        <div className="p-4 border-t border-gray-200">
          <Button 
            onClick={handleSignOut}
            variant="outline" 
            className="w-full hover:bg-red-50 hover:border-red-200 hover:text-red-700"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
