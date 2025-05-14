
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sidebar, SidebarContent, SidebarTrigger, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { ChartBar, ChartLine, DollarSign, Home } from "lucide-react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen flex w-full bg-gray-50">
      <AppSidebar currentPath={location.pathname} />
      <div className="flex flex-col flex-1">
        <header className="h-16 px-6 border-b flex items-center justify-between bg-white">
          <div className="flex items-center gap-4">
            <SidebarTrigger />
            <h1 className="text-xl font-bold text-avatar-blue">Avatar</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline">
              <span className="mr-2">Connexion</span>
            </Button>
          </div>
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

interface AppSidebarProps {
  currentPath: string;
}

const AppSidebar = ({ currentPath }: AppSidebarProps) => {
  const menuItems = [
    {
      title: "Accueil",
      url: "/",
      icon: Home
    },
    {
      title: "Tableau de bord",
      url: "/dashboard",
      icon: ChartBar
    },
    {
      title: "Prévisions",
      url: "/forecasts", 
      icon: ChartLine
    },
    {
      title: "Saisie de données",
      url: "/data-input",
      icon: DollarSign
    }
  ];

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <div className="py-4 px-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-avatar-blue flex items-center justify-center">
                <span className="text-white font-semibold">A</span>
              </div>
              <span className="text-lg font-semibold">Avatar Finance</span>
            </div>
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton asChild active={currentPath === item.url}>
                    <Link to={item.url} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default MainLayout;
