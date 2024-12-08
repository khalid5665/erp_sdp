import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { Layout } from "./components/Layout";
import { useAuth } from "./contexts/AuthContext";
import { SidebarProvider } from "./components/ui/sidebar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Classes from "./pages/Classes";
import Calendar from "./pages/Calendar";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

function PublicRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  return !user ? children : <Navigate to="/" />;
}

const AppRoutes = () => (
  <Routes>
    <Route
      path="/login"
      element={
        <PublicRoute>
          <Login />
        </PublicRoute>
      }
    />
    <Route
      path="/"
      element={
        <PrivateRoute>
          <SidebarProvider>
            <Layout>
              <Dashboard />
            </Layout>
          </SidebarProvider>
        </PrivateRoute>
      }
    />
    <Route
      path="/students"
      element={
        <PrivateRoute>
          <SidebarProvider>
            <Layout>
              <Students />
            </Layout>
          </SidebarProvider>
        </PrivateRoute>
      }
    />
    <Route
      path="/teachers"
      element={
        <PrivateRoute>
          <SidebarProvider>
            <Layout>
              <Teachers />
            </Layout>
          </SidebarProvider>
        </PrivateRoute>
      }
    />
    <Route
      path="/classes"
      element={
        <PrivateRoute>
          <SidebarProvider>
            <Layout>
              <Classes />
            </Layout>
          </SidebarProvider>
        </PrivateRoute>
      }
    />
    <Route
      path="/calendar"
      element={
        <PrivateRoute>
          <SidebarProvider>
            <Layout>
              <Calendar />
            </Layout>
          </SidebarProvider>
        </PrivateRoute>
      }
    />
    <Route
      path="/settings"
      element={
        <PrivateRoute>
          <SidebarProvider>
            <Layout>
              <Settings />
            </Layout>
          </SidebarProvider>
        </PrivateRoute>
      }
    />
  </Routes>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;