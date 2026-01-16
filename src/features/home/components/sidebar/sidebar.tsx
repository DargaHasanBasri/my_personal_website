import { Settings } from "lucide-react"; // İkonu import et

// Sidebar'a dışarıdan gelecek verilerin tipini tanımlıyoruz (Flutter'daki final fields gibi)
interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  
  // Tekrar eden buton kodunu fonksiyonlaştırdık (Widget Extraction)
  const renderMenuItem = (id: string, label: string) => {
    const isActive = activeTab === id;
    
    return (
      <button
        onClick={() => onTabChange(id)}
        className={`text-left px-4 py-2 rounded text-sm font-medium transition-colors w-full
          ${isActive 
            ? "bg-[#3574F0] text-white shadow-md"  // Seçiliyse Mavi
            : "text-gray-600 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-[#393B40]" // Değilse Gri
          }
        `}
      >
        {label}
      </button>
    );
  };

  return (
    <div className="p-4 h-full flex flex-col gap-2">
      {/* Logo Alanı */}
      <div className="mb-8 flex items-center gap-3 px-2">
        <div className="h-8 w-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
          AS
        </div>
        <div>
          <h1 className="font-semibold text-lg leading-none tracking-tight">Android Studio</h1>
          <span className="text-xs text-gray-500 dark:text-gray-400">Meerkat | 2024.3.1</span>
        </div>
      </div>

      {/* Menü - Dinamik Yapı */}
      <nav className="flex flex-col gap-1">
        {renderMenuItem("about", "About Me")}
        {renderMenuItem("experience", "Experience")}
        {renderMenuItem("projects", "Projects")}
        {renderMenuItem("contact", "Contact")}
      </nav>
      
      {/* Ayarlar */}
      <div className="mt-auto px-4 py-2">
        <button className="text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors">
           <Settings size={20} />
        </button>
      </div>
    </div>
  );
}