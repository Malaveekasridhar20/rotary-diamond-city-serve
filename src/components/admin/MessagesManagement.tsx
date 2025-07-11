
import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Mail, MailOpen, Phone, Trash2, Eye } from 'lucide-react';
import { toast } from 'sonner';
import { format } from 'date-fns';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  is_read: boolean;
  created_at: string;
}

const MessagesManagement = () => {
  const queryClient = useQueryClient();

  const { data: messages, isLoading } = useQuery({
    queryKey: ['admin-contact-messages'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  const markAsReadMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('contact_messages')
        .update({ is_read: true })
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-contact-messages'] });
      queryClient.invalidateQueries({ queryKey: ['admin-stats'] });
      toast.success('Message marked as read');
    },
    onError: () => {
      toast.error('Failed to mark message as read');
    }
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('contact_messages')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-contact-messages'] });
      queryClient.invalidateQueries({ queryKey: ['admin-stats'] });
      toast.success('Message deleted successfully');
    },
    onError: () => {
      toast.error('Failed to delete message');
    }
  });

  const handleMarkAsRead = (id: string) => {
    markAsReadMutation.mutate(id);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      deleteMutation.mutate(id);
    }
  };

  const unreadCount = messages?.filter(msg => !msg.is_read).length || 0;

  if (isLoading) {
    return <div className="p-6">Loading messages...</div>;
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Contact Messages</h1>
        <p className="text-muted-foreground">
          Manage contact form submissions - {unreadCount} unread messages
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>All Messages</span>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">
                Total: {messages?.length || 0}
              </Badge>
              {unreadCount > 0 && (
                <Badge variant="destructive">
                  Unread: {unreadCount}
                </Badge>
              )}
            </div>
          </CardTitle>
          <CardDescription>
            Contact form submissions from website visitors
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Status</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {messages?.map((message) => (
                <TableRow key={message.id} className={!message.is_read ? 'bg-blue-50' : ''}>
                  <TableCell>
                    {message.is_read ? (
                      <MailOpen className="w-4 h-4 text-gray-500" />
                    ) : (
                      <Mail className="w-4 h-4 text-blue-600" />
                    )}
                  </TableCell>
                  <TableCell className="font-medium">{message.name}</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="text-sm">{message.email}</div>
                      {message.phone && (
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Phone className="w-3 h-3 mr-1" />
                          {message.phone}
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="max-w-xs truncate text-sm">
                      {message.message}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      {format(new Date(message.created_at), 'MMM dd, yyyy')}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {format(new Date(message.created_at), 'HH:mm')}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      {!message.is_read && (
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleMarkAsRead(message.id)}
                          disabled={markAsReadMutation.isPending}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                      )}
                      <Button 
                        size="sm" 
                        variant="destructive"
                        onClick={() => handleDelete(message.id)}
                        disabled={deleteMutation.isPending}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {(!messages || messages.length === 0) && (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                    No contact messages yet
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default MessagesManagement;
