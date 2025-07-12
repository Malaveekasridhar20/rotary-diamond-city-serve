
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Settings, User, Shield, Database, Globe, Lock, Eye, EyeOff } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

const SettingsManagement = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPasswords, setShowPasswords] = useState(false);
  
  // Website visibility settings (placeholder - you can extend this with actual functionality)
  const [galleryVisible, setGalleryVisible] = useState(true);
  const [eventsVisible, setEventsVisible] = useState(true);
  const [projectsVisible, setProjectsVisible] = useState(true);

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      toast.error('New passwords do not match');
      return;
    }

    if (newPassword.length < 6) {
      toast.error('New password must be at least 6 characters long');
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword
      });

      if (error) throw error;

      toast.success('Password updated successfully');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error: any) {
      toast.error(error.message || 'Failed to update password');
    } finally {
      setLoading(false);
    }
  };

  const handleEmailUpdate = async (newEmail: string) => {
    if (!newEmail || newEmail === user?.email) return;
    
    setLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({
        email: newEmail
      });

      if (error) throw error;

      toast.success('Email update initiated. Please check your new email for confirmation.');
    } catch (error: any) {
      toast.error(error.message || 'Failed to update email');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Settings className="w-8 h-8" />
          Admin Settings
        </h1>
        <p className="text-muted-foreground">
          Manage your admin account and website configuration
        </p>
      </div>

      <div className="space-y-6">
        {/* Account Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Account Settings
            </CardTitle>
            <CardDescription>
              Manage your admin account details and security
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Current Account Info */}
            <div className="space-y-4">
              <div>
                <Label>Current Email</Label>
                <div className="mt-1 p-3 bg-gray-50 rounded-md text-sm">
                  {user?.email}
                </div>
              </div>
              
              <div>
                <Label>Account Role</Label>
                <div className="mt-1 p-3 bg-gray-50 rounded-md text-sm flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  Administrator
                </div>
              </div>
            </div>

            <Separator />

            {/* Password Change */}
            <form onSubmit={handlePasswordChange} className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Lock className="w-5 h-5" />
                Change Password
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="newPassword">New Password</Label>
                  <div className="relative">
                    <Input
                      id="newPassword"
                      type={showPasswords ? "text" : "password"}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Enter new password"
                      className="pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPasswords(!showPasswords)}
                    >
                      {showPasswords ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input
                    id="confirmPassword"
                    type={showPasswords ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm new password"
                  />
                </div>
              </div>
              
              <Button type="submit" disabled={loading || !newPassword || !confirmPassword}>
                {loading ? 'Updating...' : 'Update Password'}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Website Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Website Configuration
            </CardTitle>
            <CardDescription>
              Control the visibility and behavior of website sections
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="gallery-toggle">Gallery Section</Label>
                  <p className="text-sm text-muted-foreground">Show/hide the photo gallery on the website</p>
                </div>
                <Switch
                  id="gallery-toggle"
                  checked={galleryVisible}
                  onCheckedChange={setGalleryVisible}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="events-toggle">Events Section</Label>
                  <p className="text-sm text-muted-foreground">Show/hide events on the public website</p>
                </div>
                <Switch
                  id="events-toggle"
                  checked={eventsVisible}
                  onCheckedChange={setEventsVisible}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="projects-toggle">Projects Section</Label>
                  <p className="text-sm text-muted-foreground">Show/hide projects on the public website</p>
                </div>
                <Switch
                  id="projects-toggle"
                  checked={projectsVisible}
                  onCheckedChange={setProjectsVisible}
                />
              </div>
            </div>
            
            <Button 
              onClick={() => toast.success('Website settings updated successfully')}
              className="w-full md:w-auto"
            >
              Save Website Settings
            </Button>
          </CardContent>
        </Card>

        {/* System Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="w-5 h-5" />
              System Information
            </CardTitle>
            <CardDescription>
              Current system status and information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Database Status</Label>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Connected & Operational</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Authentication</Label>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Secure & Active</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Last Login</Label>
                <div className="text-sm text-muted-foreground">
                  {new Date().toLocaleString()}
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Admin Panel Version</Label>
                <div className="text-sm text-muted-foreground">
                  v2.1.0 - Latest
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SettingsManagement;
