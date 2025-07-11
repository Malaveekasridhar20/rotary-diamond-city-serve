
import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { Plus, Edit, Trash2, User, Building, Calendar } from 'lucide-react';
import { toast } from 'sonner';

interface PSTMember {
  id: string;
  name: string;
  position: string;
  year: number;
  business: string | null;
  image_url: string | null;
  social_links: any;
  created_at: string;
}

interface MemberFormData {
  name: string;
  position: string;
  year: number;
  business: string;
  image_url: string;
}

const MembersManagement = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<PSTMember | null>(null);
  const queryClient = useQueryClient();

  const form = useForm<MemberFormData>({
    defaultValues: {
      name: '',
      position: 'President',
      year: new Date().getFullYear(),
      business: '',
      image_url: ''
    }
  });

  const { data: members, isLoading } = useQuery({
    queryKey: ['admin-pst-members'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('pst_members')
        .select('*')
        .order('year', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  const createMutation = useMutation({
    mutationFn: async (data: MemberFormData) => {
      const { error } = await supabase
        .from('pst_members')
        .insert([data]);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-pst-members'] });
      queryClient.invalidateQueries({ queryKey: ['admin-stats'] });
      toast.success('PST Member added successfully');
      setIsDialogOpen(false);
      form.reset();
    },
    onError: () => {
      toast.error('Failed to add PST member');
    }
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: MemberFormData }) => {
      const { error } = await supabase
        .from('pst_members')
        .update({
          ...data,
          updated_at: new Date().toISOString()
        })
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-pst-members'] });
      toast.success('PST Member updated successfully');
      setIsDialogOpen(false);
      setEditingMember(null);
      form.reset();
    },
    onError: () => {
      toast.error('Failed to update PST member');
    }
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('pst_members')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-pst-members'] });
      queryClient.invalidateQueries({ queryKey: ['admin-stats'] });
      toast.success('PST Member deleted successfully');
    },
    onError: () => {
      toast.error('Failed to delete PST member');
    }
  });

  const onSubmit = (data: MemberFormData) => {
    if (editingMember) {
      updateMutation.mutate({ id: editingMember.id, data });
    } else {
      createMutation.mutate(data);
    }
  };

  const handleEdit = (member: PSTMember) => {
    setEditingMember(member);
    form.reset({
      name: member.name,
      position: member.position,
      year: member.year,
      business: member.business || '',
      image_url: member.image_url || ''
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this PST member?')) {
      deleteMutation.mutate(id);
    }
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setEditingMember(null);
    form.reset();
  };

  if (isLoading) {
    return <div className="p-6">Loading PST members...</div>;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">PST Members Management</h1>
          <p className="text-muted-foreground">Manage Past Service Team members</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add PST Member
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {editingMember ? 'Edit PST Member' : 'Add New PST Member'}
              </DialogTitle>
              <DialogDescription>
                {editingMember ? 'Update PST member details' : 'Add a new Past Service Team member'}
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter member's full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Position</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select position" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="President">President</SelectItem>
                            <SelectItem value="Secretary">Secretary</SelectItem>
                            <SelectItem value="Treasurer">Treasurer</SelectItem>
                            <SelectItem value="Member">Member</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="year"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Year</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            placeholder="Enter service year" 
                            {...field}
                            onChange={(e) => field.onChange(parseInt(e.target.value))}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="business"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business/Organization</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter business or organization" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="image_url"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Profile Image URL</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter image URL" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-end space-x-2">
                  <Button type="button" variant="outline" onClick={handleDialogClose}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={createMutation.isPending || updateMutation.isPending}>
                    {editingMember ? 'Update' : 'Add'} Member
                  </Button>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All PST Members</CardTitle>
          <CardDescription>
            Total members: {members?.length || 0}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Year</TableHead>
                <TableHead>Business</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {members?.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      <span className="font-medium">{member.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {member.position}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {member.year}
                    </div>
                  </TableCell>
                  <TableCell>
                    {member.business && (
                      <div className="flex items-center">
                        <Building className="w-4 h-4 mr-1" />
                        {member.business}
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" onClick={() => handleEdit(member)}>
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="destructive" 
                        onClick={() => handleDelete(member.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default MembersManagement;
