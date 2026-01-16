"use client" // DİKKAT: State kullandığımız için bu satır en başta olmalı!

import { useState } from "react";
import { HomeLayout } from "@/features/home/components/layout/home-layout";
import { Sidebar } from "@/features/home/components/sidebar/sidebar";
import { Header } from "@/features/home/components/header/header";
import { AboutView } from "@/features/about/components/about-view";
import { EducationView } from "@/features/education/components/education-view";

export default function Home() {
  // Flutter'daki: int _selectedIndex = 0;
  const [activeTab, setActiveTab] = useState("about");

  return (
    <HomeLayout 
      sidebar={
        <Sidebar 
          activeTab={activeTab} 
          onTabChange={(tab) => setActiveTab(tab)} 
        />
      }
    >
      <div className="flex flex-col h-full">
        <Header />

        {/* İçerik Alanı (Body) */}
        <div className="flex-1 overflow-auto bg-white dark:bg-[#1E1F22] relative">
          
          {/* Flutter'daki body: _pages[_selectedIndex] mantığı */}
          
          {activeTab === "about" && <AboutView />}

          {activeTab === "education" && <EducationView />}
          
          {activeTab === "experience" && (
             <div className="flex h-full items-center justify-center text-gray-500">Experience Sayfası Yapılacak...</div>
          )}
          
          {activeTab === "projects" && (
             <div className="flex h-full items-center justify-center text-gray-500">Projeler Listesi Gelecek...</div>
          )}
          
          {activeTab === "contact" && (
             <div className="flex h-full items-center justify-center text-gray-500">İletişim Formu Gelecek...</div>
          )}

        </div>
        
      </div>
    </HomeLayout>
  );
}