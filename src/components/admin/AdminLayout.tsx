
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
  Shield
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
    { path: '/admin', icon: LayoutDashboard, label: 'Dashboard', exact: true },
    { path: '/admin/projects', icon: FolderOpen, label: 'Manage Projects' },
    { path: '/admin/events', icon: Calendar, label: 'Manage Events' },
    { path: '/admin/members', icon: Users, label: 'PST Members' },
    { path: '/admin/messages', icon: MessageSquare, label: 'Messages Inbox' },
    { path: '/admin/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 bg-primary text-white">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8" />
            <div>
              <h1 className="text-xl font-bold">Admin Panel</h1>
              <p className="text-sm opacity-90">Rotary Club Dashboard</p>
            </div>
          </div>
        </div>

        {/* User Info */}
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <p className="text-sm text-gray-600">Logged in as:</p>
          <p className="font-medium text-gray-900 truncate">{user?.email}</p>
          <div className="mt-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full inline-flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            Admin Access
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 py-4">
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
                {item.label}
                {isActive && (
                  <div className="ml-auto w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                )}
              </button>
            );
          })}
        </nav>
        
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
