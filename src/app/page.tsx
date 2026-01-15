import { HomeLayout } from "@/features/home/components/layout/home-layout";
import { Sidebar } from "@/features/home/components/sidebar/sidebar";
// Yeni oluşturduğumuz Header'ı import ediyoruz
import { Header } from "@/features/home/components/header/header"; 

export default function Home() {
  return (
    <HomeLayout sidebar={<Sidebar />}>
      <div className="flex flex-col h-full">
        
        {/* Artık tüm kod burada toplandı */}
        <Header />

        {/* İçerik Alanı */}
        <div className="flex-1 overflow-auto p-8 flex items-center justify-center text-gray-400">
          <p>Proje listesi buraya gelecek...</p>
        </div>
        
      </div>
    </HomeLayout>
  );
}