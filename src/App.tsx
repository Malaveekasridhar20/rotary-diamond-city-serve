
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Members from "./pages/Members";
import Projects from "./pages/Projects";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AuthPage from "./components/auth/AuthPage";
import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboard from "./components/admin/AdminDashboard";
import ProjectsManagement from "./components/admin/ProjectsManagement";
import EventsManagement from "./components/admin/EventsManagement";
import MembersManagement from "./components/admin/MembersManagement";
import MessagesManagement from "./components/admin/MessagesManagement";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import React from "react";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Auth Route */}
            <Route path="/auth" element={<AuthPage />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={
              <ProtectedRoute requireAdmin>
                <AdminLayout />
              </ProtectedRoute>
            }>
              <Route index element={<AdminDashboard />} />
              <Route path="projects" element={<ProjectsManagement />} />
              <Route path="events" element={<EventsManagement />} />
              <Route path="members" element={<MembersManagement />} />
              <Route path="messages" element={<MessagesManagement />} />
              <Route path="settings" element={<div className="p-6">Settings - Coming Soon</div>} />
            </Route>
            
            {/* Public Routes */}
            <Route path="/*" element={
              <div className="min-h-screen flex flex-col bg-gray-50">
                <Header />
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/office-bearers" element={<Members />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            } />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
