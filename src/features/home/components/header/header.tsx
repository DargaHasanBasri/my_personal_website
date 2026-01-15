import { Search } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

// --- Header Butonu (Gri Olanlar) ---
function HeaderButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-4 py-1.5 text-sm font-medium rounded transition-colors border shadow-sm whitespace-nowrap
      text-gray-700 bg-white border-gray-300 hover:bg-gray-50
      dark:text-gray-300 dark:bg-[#2B2D30] dark:border-[#4E5157] dark:hover:bg-[#35373B]">
      {children}
    </button>
  );
}

export function Header() {
  return (
    // DEĞİŞİKLİK 1: 'justify-between' kaldırıldı. 'gap-4' eklendi.
    <header className="h-16 flex items-center px-6 gap-6 shrink-0 transition-colors
      border-b border-[var(--border-color)] bg-[var(--sidebar-bg)]">
      
      {/* Arama Alanı */}
      {/* DEĞİŞİKLİK 2: 'flex-1' eklendi. Bu Flutter'daki Expanded gibidir, kalan tüm boşluğu kaplar. */}
      <div className="flex-1 flex items-center gap-2 text-gray-500 dark:text-gray-400">
        <Search size={16} /> 
        <input 
          type="text" 
          placeholder="Search projects" 
          // DEĞİŞİKLİK 3: 'w-64' yerine 'w-full' yapıldı.
          className="bg-transparent border-none outline-none text-sm w-full placeholder:text-gray-500
            text-gray-900 dark:text-gray-200"
        />
      </div>
      
      {/* Butonlar */}
      {/* DEĞİŞİKLİK 4: 'shrink-0' eklendi, böylece ekran küçülse bile butonlar ezilmez. */}
      <div className="flex items-center gap-3 shrink-0">
        <HeaderButton>New Flutter Project</HeaderButton>
        <HeaderButton>New Project</HeaderButton>
        <HeaderButton>Open</HeaderButton>
        <div className="ml-1">
          <ThemeToggle />
        </div>
      </div>

    </header>
  );
}